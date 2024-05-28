import './Root.css';

import { useState, useEffect } from 'react';

import Post from '../Post/Post';
import LoadingPost from '../LoadingPost/LoadingPost';

function Root() {

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState('popular');
  const [pageInput, setPageInput] = useState('popular');

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
      <div className="App">
        <header className="App-header">
          <h1><em>Not-</em>Reddit</h1>
        </header>
        <body className="App-body">
          <LoadingPost />
          <LoadingPost />
        </body>
      </div>
    )
  }

  function handlePageChange(event) {
    setPageInput(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      setPage(pageInput);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1><em>Not-</em>Reddit</h1>
        <input 
          onChange={handlePageChange} 
          value={pageInput} 
          onKeyDown={handleKeyDown}
          placeholder='search'
        />
      </header>
      <body className="App-body">
        
        {
        posts.map(post => {
          const pastDate = new Date(post.created * 1000).getTime();
          const currentDate = new Date().getTime();

          return (<Post key={post.id} title={post.title} author={post.author} comments={post.num_comments} votes={post.ups} image={post.thumbnail} date={Math.floor((currentDate-pastDate)/(1000*60*60))} />)
          })}
      </body>
    </div>
  );
}

export default Root;
