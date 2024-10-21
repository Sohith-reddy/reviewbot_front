import { useState } from 'react';
import './Features.css'; 

function Features() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };


  const handleSubmit = async () => {
    const payload = {
      body: inputValue,  // Set the input value as the "body" field
    };

    try {
      const response = await fetch('http://localhost:3000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      console.log('Success:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="search-container">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search.."
          value={inputValue}
          onChange={handleInputChange}
          className="search-input"
        />
        <button onClick={handleSubmit} className="search-button">
          Fetch
        </button>
      </div>
    </div>
  );
}

export default Features;
