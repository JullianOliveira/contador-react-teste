import { useState } from 'react';
import Button from "./Button"
import Select from './Select';

function Counter() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);

  function sub() {
    setCount(prevCount => prevCount - number);
  }
  
  function add() {
    setCount(prevCount => prevCount + number);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="counter">
        <h2>CONTADOR REACT</h2>
        <Select number={number} setNumber={setNumber} />
        <div class="container">
          <Button value={`-${number}`} operation={sub} isReset={false} />
          <h1>{count}</h1>
          <Button value={`+${number}`} operation={add} isReset={false} />
        </div>
        <div>
          <Button value="Reset" operation={reset} isReset={true} />    
        </div>  
    </div>
  )
}

export default Counter;




