import { useState, useEffect } from 'react';
import './Amazon.css';

function Amazon() {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const [responseData, setResponseData] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async () => {
    if (!inputValue.trim()) {
      setError("Please enter a product name.");
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productUrl: inputValue }), // Send the product name to the backend
      });

      if (response.ok) {
        setError('');
        const result = await response.json();
        console.log("Reviews fetched: ", result);

        // Set the response data to be displayed
        setResponseData(result.flaskResponse);
      } else {
        setError('No reviews found or error occurred.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Error fetching reviews. Please try again.');
    }
  };

  const renderProsCons = () => {
    if (!responseData) return null;

    const { pros, cons } = responseData;

    return (
      <div className="pros-cons-container">
        <div className="pros-cons-section">
          <h3>Pros</h3>
          <ul>
            {pros.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="pros-cons-section">
          <h3>Cons</h3>
          <ul>
            {cons.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  // Log responseData when it changes using useEffect
  useEffect(() => {
    if (responseData) {
      console.log("Updated responseData: ", responseData);
    }
  }, [responseData]);

  return (
    <div className="search-container">
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter product URL"
          value={inputValue}
          onChange={handleInputChange}
          className="search-input"
        />
        <button onClick={handleSubmit} className="search-button">
          Fetch Reviews
        </button>
      </div>

      {/* Display error if any */}
      {error && <div className="error-message">{error}</div>}

      {/* Render pros and cons if available */}
      {renderProsCons()}
    </div>
  );
}

export default Amazon;
