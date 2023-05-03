
function Select({ number, setNumber }) {
  const numbers = [1,2,3,4,5];

  const handleChange = (event) => {
    setNumber(parseInt(event.target.value))
  }

  return (
    <div className="select">
      <label>Escolha um número: </label>
      <select value={number} onChange={handleChange} >
        {numbers.map(number => <option key={number} value={number}>{number}</option>)}
      </select>
    </div>
  )
}

export default Select