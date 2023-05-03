
function Button({ value, operation, isReset }) {
  return (
    <button className={isReset === true ? "button reset" : "button"} onClick={operation} >{value}</button>
  )
}

export default Button;