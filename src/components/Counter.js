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
        <Select number={number} setNumber={setNumber} />
        <h2>{count}</h2>
        <Button value={`Subtrai ${number}`} operation={sub} />
        <Button value={`Adiciona ${number}`} operation={add} />
        <div>
          <Button value="Reset" operation={reset} />
        </div>
    </div>
  )
}

export default Counter;




