import React, { useState } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState(''); 
  const fetchQuote = async () => {
    try {
      const response = await fetch('https://quote-of-the-day-r6g9.onrender.com'); 
      setQuote(data.quote);
    } catch (error) {
      console.error('Error fetching the quote:', error);
      setQuote('Failed to fetch quote. Please try again later.');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Quote of the Day</h1>
        <p>{quote || 'Click the button to get a random quote!'}</p>
        <button onClick={fetchQuote}>Get a New Quote</button>
      </header>
    </div>
  );
}

export default App;
