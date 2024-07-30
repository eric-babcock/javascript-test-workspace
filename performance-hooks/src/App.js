import { useState,useCallback } from 'react';
// example
import logo from './logo.svg';
import './App.css';
import Numbers from './components/Numbers/Numbers';

function App() {
  const [nums, setNums] = useState([]);
  const [count, setCount] = useState(0);

  const increaseCounter = () => {
    setCount(count + 1);
  };

  const addRandom = useCallback(() => {
    let randNum = parseInt(Math.random() * 1000, 10);
    setNums([...nums, randNum]);
  },[nums]);
  const magicNum = calculateMagicNumber(count);

  return (
    <div className="App">
      <body className="App-header">
        <div>
          Count: {count} | Magic number: {magicNum} &nbsp;
          <button onClick={increaseCounter}>
            +
          </button>
        </div>
        <hr />
        <Numbers nums={nums} addRandom={addRandom}/>
      </body>
    </div>
  );
}

export default App;