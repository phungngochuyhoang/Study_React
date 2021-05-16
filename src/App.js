
import React, {useState, useEffect} from 'react';

function App() {

  const [count, setCount] = useState(0);

  useEffect(() => {

    console.log(count);

  })

  return (
    <div className="App">
      <button type="button" className="btn btn-danger btn-lg btn-block" onClick={() => {setCount(count + 1)}}> click </button>
      <p>Count: {count}</p>
    </div>
  );
}

export default App;
