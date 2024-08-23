

const Button = (props) => {
  return (
    <button className={`p-2 text-lg bg-teal-700 text-white ${props.className}`} onClick={props.onClick}>{props.children}
   
    </button>
  )
}

export default Button