import { useState } from "react";
import "./SearchResult.css";

export const SearchResult = ({ result }) => {
  const [reviews, setReviews] = useState(null); // To store the pros and cons

  const handleClick = (productName) => {
    // Send the selected product name to the backend
    fetch("http://localhost:3000/send-reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productName }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response from backend:", data); // Log the entire response to see its structure

        // Check if response contains the 'response_text' and parse it
        if (data.flaskResponse && data.flaskResponse.response_text) {
          // Remove backticks and markdown formatting
          const cleanResponseText = data.flaskResponse.response_text.replace(/```json|```|\n/g, "");

          // Parse the cleaned JSON string
          try {
            const parsedResponse = JSON.parse(cleanResponseText);
            setReviews(parsedResponse); // Set the parsed response to state
          } catch (error) {
            console.error("Error parsing the JSON response:", error);
            alert("Failed to parse response from Flask.");
          }
        } else {
          alert("No review data found.");
        }
      })
      .catch((error) => {
        console.error("Error sending reviews:", error);
        alert("There was an error processing your request.");
      });
  };

  return (
    <div className="search-result" onClick={() => handleClick(result)}>
      {result}
      {reviews && (
        <div className="reviews-container">
          <h3>Pros</h3>
          <ul>
            {reviews.pros.map((pros, index) => (
              <li key={index}>{pros}</li>
            ))}
          </ul>

          <h3>Cons</h3>
          <ul>
            {reviews.cons.map((cons, index) => (
              <li key={index}>{cons}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
