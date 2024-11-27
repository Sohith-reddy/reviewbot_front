import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("http://localhost:3000/prods")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((productName) => {
          return (
            value &&
            productName &&
            productName.toLowerCase().includes(value.toLowerCase())
          );
        });
        setResults(results);  // Set the filtered results
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="searchbar-container">
      <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input
          placeholder="Type to search..."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </div>
  );
};
