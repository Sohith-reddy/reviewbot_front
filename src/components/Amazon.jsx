import { useState, useEffect } from 'react';
import './Amazon.css';
import Chatbot from './Chatbot';

function Amazon() {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const [responseData, setResponseData] = useState(null);
  const [reviews, setReviews] = useState(null);
  // const [reviews, setReviews] = useState("An electrical product has been sent in a torn and damaged package which raises the question of authenticity of a premium product like Philips…. Money should be returned ASAP");  // State to store scraped reviews

  // State to store scraped reviews
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async () => {
    if (!inputValue.trim()) {
      setError("Please enter a product name.");
      return;
    }

    setIsLoading(true); // Start loading

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
        
        const cleanResponseText = result.flaskResponse.response_text.replace(/```json|```|\n/g, "");
        const parsedResponse = JSON.parse(cleanResponseText);

        // Update state with scraped reviews and the Flask response
        setResponseData(parsedResponse);
        setReviews(result.reviews);  // Set the scraped reviews data
      } else {
        setError('No reviews found or error occurred.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Error fetching reviews. Please try again.');
    } finally {
      setIsLoading(false); // Stop loading once request is completed
    }
  };

  const renderProsCons = () => {
    if (!responseData) return null;

    const { pros, cons } = responseData;

    return (
      <div className="pros-cons-container">
        {/* Pros Section */}
        <div className={`pros-cons-section ${pros.length === 0 ? 'empty' : ''}`}>
          <h3>Pros</h3>
          {pros.length > 0 ? (
            <ul>
              {pros.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>No pros found.</p>
          )}
        </div>

        {/* Cons Section */}
        <div className={`pros-cons-section ${cons.length === 0 ? 'empty' : ''}`}>
          <h3>Cons</h3>
          {cons.length > 0 ? (
            <ul>
              {cons.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>No cons found.</p>
          )}
        </div>
      </div>
    );
  };

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

      {/* Show loading spinner if isLoading is true */}
      {isLoading && <div className="loading-spinner">Loading...</div>}

      {/* Render pros and cons if available */}
      {renderProsCons()}

      {/* Conditionally render Chatbot only if reviews are available */}
      {reviews && reviews.length > 0 && <Chatbot reviews={reviews} />}
      {/* {console.log(reviews)} */}
    </div>
  );
}

export default Amazon;
