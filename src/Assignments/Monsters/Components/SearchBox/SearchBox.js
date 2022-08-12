import React from 'react';
import './SearchBox.scss';

function SearchBox({ setUserInput }) {
  const handleChange = e => setUserInput(e.target.value);

  return (
    <input
      className="search"
      type="search"
      placeholder="Search..."
      onChange={handleChange}
    />
  );
}

export default SearchBox;
