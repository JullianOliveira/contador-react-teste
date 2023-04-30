
function Button({ value, operation }) {
  return (
    <button className='button' onClick={operation} >{value}</button>
  )
}

export default Button;