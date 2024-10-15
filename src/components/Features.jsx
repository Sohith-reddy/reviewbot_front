import React, { useState } from 'react';

function Features() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFetch = () => {
    
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Enter something..." 
        value={inputValue}
        onChange={handleInputChange} 
      />
      <button onClick={handleFetch}>Fetch</button>
    </div>
  );
}

export default Features;
