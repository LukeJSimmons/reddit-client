import './App.css';

import { useState } from 'react';

import Post from './components/Post';
import LoadingPost from './components/LoadingPost';

import image from './images/NMELogo.png';

function App() {

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState('popular');

  async function getPage() {
    const response = await fetch(`https://www.reddit.com/r/${page}/.json`);

    if (!response.ok) {
      throw new Error('Response is not ok');
    }

    const data = await response.json();

    setIsLoading(false);

    return await data.data.children.map(post => post.data);
  }

  getPage()
  .then(posts => {
    setPosts(posts);
    // console.log(posts);
  });

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



  return (
    <div className="App">
      <header className="App-header">
        <h1><em>Not-</em>Reddit</h1>
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

export default App;
