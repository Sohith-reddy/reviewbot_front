import React, { useState } from 'react';
export default function SearchBar() {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Searching for: ${query}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={query} 
        onChange={handleChange} 
        placeholder="Search..." 
        aria-label="Search"
      />
      <button type="submit">Search</button>
    </form>
  );
}
