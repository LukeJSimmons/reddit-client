import { Outlet } from 'react-router-dom';
import './Root.css';

import { useState } from 'react';
import { Link } from 'react-router-dom';

function Root() {

  const [page, setPage] = useState('r/popular/.json');
  const [subredditInput, setSubredditInput] = useState('');
  const [searchInput, setSearchInput] = useState('');

  function handlePopularClick(event) {
    setSearchInput('');
    setSubredditInput('');
    setPage('r/popular/.json');
  }

  function handleSubredditChange(event) {
    setSubredditInput(event.target.value);
  }

  function handleSubredditKeyDown(event) {
    if (event.key === 'Enter') {
      setPage('r/'+subredditInput.toLowerCase()+'/.json');
    }
  }
  
  function handlePageChange(event) {
    setSearchInput(event.target.value);
  }

  function handleSearchKeyDown(event) {
    if (event.key === 'Enter') {
      setPage('search.json?q='+searchInput.toLowerCase().replace(' ', '+'));
    }
  }

  return (
    <>
    <header className="App-header">
      <Link to="/"><h1><em>Not-</em>Reddit</h1></Link>
      <div id='subreddits'>
        <div>
          <button id='popular' disabled={page==='r/popular/.json'} onClick={handlePopularClick}>Popular</button>
        </div>
        <input 
          id='otherInput'
          onChange={handleSubredditChange} 
          value={subredditInput} 
          onKeyDown={handleSubredditKeyDown} 
          placeholder='other' 
          />
      </div>
      <input 
        onChange={handlePageChange} 
        value={searchInput} 
        onKeyDown={handleSearchKeyDown}
        placeholder='search'
      />
    </header>
    <Outlet context={page} />
    </>
  );
}

export default Root;
