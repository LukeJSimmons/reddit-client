import { Outlet } from 'react-router-dom';
import './Root.css';

import { useState } from 'react';
import { Link } from 'react-router-dom';

function Root() {

  const [page, setPage] = useState('home');
  const [pageInput, setPageInput] = useState('home');

  function handlePageChange(event) {
    setPageInput(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      setPage(pageInput);
    }
  }

  return (
    <>
    <header className="App-header">
      <Link to="/"><h1><em>Not-</em>Reddit</h1></Link>
      <input 
        onChange={handlePageChange} 
        value={pageInput} 
        onKeyDown={handleKeyDown}
        placeholder='search'
      />
    </header>
    <Outlet context={page} />
    </>
  );
}

export default Root;
