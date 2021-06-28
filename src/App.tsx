import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [showText, setShowText] = useState(false)
  const onClick = () => setShowText(true)
  return (
    <div className="App">
      <button data-testid="Button" onClick={onClick}>Click</button>
      { showText ? <p data-testid="Text">Hello</p> : null }
    </div>
  );
}

export default App;
