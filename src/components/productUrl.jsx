import React, { useState } from 'react';
import './ProductURL.css';

function ProductURL() {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted URL:', url);
    alert(`URL submitted: ${url}`);
  };

  return (
    <div className="product-url-container">
      <h1 className="product-url-heading">Enter Product URL</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          placeholder="Enter URL here"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="product-url-input"
          required
        />
        <button type="submit" className="product-url-button">Submit</button>
      </form>
    </div>
  );
}

export default ProductURL;
