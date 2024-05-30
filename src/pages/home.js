import '../components/Root/Root.css';

import { useState, useEffect } from 'react';

import Post from '../components/Post/Post';
import LoadingPost from '../components/LoadingPost/LoadingPost';

function HomePage() {

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState('popular');

  useEffect(() => {
    async function getPage() {
      setIsLoading(true);
      try {
        const response = await fetch(`https://www.reddit.com/r/${page}/.json`);
  
        if (!response.ok) {
          throw new Error('Response is not ok');
        }
    
        const data = await response.json();
        setPosts(data.data.children.map(post => post.data));
      } catch (error) {
        console.log('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    }
  
    getPage();
  }, [page]);

  if (isLoading) {
    return (
      <body className="App-body">
        <LoadingPost />
        <LoadingPost />
      </body>
    )
  }

  return (
    <body className="App-body">
      {
      posts.map(post => {
        const pastDate = new Date(post.created * 1000).getTime();
        const currentDate = new Date().getTime();

        return (<Post postId={post.id} title={post.title} author={post.author} comments={post.num_comments} votes={post.ups} image={post.thumbnail} date={Math.floor((currentDate-pastDate)/(1000*60*60))} />)
        })}
    </body>
  );
}

export default HomePage;
