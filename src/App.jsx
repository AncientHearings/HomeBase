import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You entered: ${input}`);
    setInput('');
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>HomeBase 🏠</h1>
        <p>Welcome to the intelligent local-first AI agent.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ask something..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </header>
    </div>
  );
}

export default App;
