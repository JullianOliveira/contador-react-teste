import { useState } from 'react';
import Button from "./Button"
import Select from './Select';

function Counter() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);

  function sub() {
    setCount(prevCount => prevCount - number);
    console.log(typeof number)
  }
  
  function add() {
    setCount(prevCount => prevCount + number);
    console.log(typeof number)
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="counter">
        <h2>CONTADOR REACT</h2>
        <Select number={number} setNumber={setNumber} />
        <h1>{count}</h1>
        <Button value={`- ${number}`} operation={sub} />
        <Button value="Reset" operation={reset} />
        <Button value={`+ ${number}`} operation={add} />       
    </div>
  )
}

export default Counter;




