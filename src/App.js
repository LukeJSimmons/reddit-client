import './App.css';

import { useState } from 'react';

import Post from './components/Post';

import image from './images/NMELogo.png';

function App() {
  const [votes, setVotes] = useState(0);

  function increaseVotes() {
    setVotes(votes+1);
  }

  function decreaseVotes() {
    setVotes(votes-1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1><em>Not-</em>Reddit</h1>
      </header>
      <body className="App-body">
        <Post 
          title={'title'}
          image={image}
          author={'author'}
          date={'date'}
          comments={'59'}
          increaseVotes={increaseVotes}
          decreaseVotes={decreaseVotes}
          votes={votes}
        />
      </body>
    </div>
  );
}

export default App;
