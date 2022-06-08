import React, {useState} from 'react'
import "./Counter.scss"


const Counter = (props) => {
  const { title} = props;
  const [counter, setCounter] = useState(0)

 
  const handleIncrement = () => {
     setCounter(counter + 1)
  }
  const handleDecrement = () => {
    if(counter === 0){
      return
  }else{
   setCounter(counter - 1)
  }
     
  }

  return (
    <div  className='counterCard' >
        <h4>{title}</h4>
        <p>{counter}</p>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
    </div>
  )
}

export default Counter