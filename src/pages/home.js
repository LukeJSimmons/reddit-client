import '../components/Root/Root.css';

import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

import Post from '../components/Post/Post';
import LoadingPost from '../components/LoadingPost/LoadingPost';

function HomePage() {

  const page = useOutletContext();

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isOk, setIsOk] = useState(true);

  useEffect(() => {
    async function getPage() {
      setIsLoading(true);
      try {
        const response = await fetch(`https://www.reddit.com/${page}`);

        setIsOk(response.ok);
  
        if (!response.ok) {
          throw new Error('Response is not ok');
        }
    
        const data = await response.json();
        setPosts(data.data.children.map(post => post.data));
      } catch (error) {
        setIsOk(false);
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

  if (posts.length === 0) { // For an invalid search input
    return (<p>No results</p>);
  } 
  else if (isOk === false) { // For an invalid Subreddit input
    return (<p>Invalid Input</p>);
  } 
  else {
    return (
      <body className="App-body">
      {
      posts.map(post => {
        const pastDate = new Date(post.created * 1000).getTime();
        const currentDate = new Date().getTime();

        return isOk ? (<Post postId={post.id} title={post.title} author={post.author} comments={post.num_comments} votes={post.ups} image={post.thumbnail} date={Math.floor((currentDate-pastDate)/(1000*60*60))} />) : (<p>Error loading page: Try again later</p>)
        })}
    </body>
    );
  }
}

export default HomePage;
