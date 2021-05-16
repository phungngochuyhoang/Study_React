
import './App.css';

// useState 
import React, { useState  } from 'react';

function App() {

  const [text, setText] = useState('');


  return (
    <div className='App'>
      <input type='text' onKeyUp={(e) => setText(e.target.value)} />
      <p>Change Name: {text}</p>
    </div>
  );
}

export default App;
