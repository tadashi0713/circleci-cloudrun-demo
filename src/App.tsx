import React, { useState } from 'react';

const App = () => {
  const [showText, setShowText] = useState(false)
  const onClick = () => setShowText(true)
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <button data-testid="Button" onClick={onClick} className="bg-blue-500 hover:bg-blue-700 text-white text-4xl font-bold py-4 px-8 rounded">Click</button>
        { showText ? <p data-testid="Text" className="text-4xl pt-10 text-center">Hello</p> : null }
      </div>
    </div>
  );
}

export default App;
