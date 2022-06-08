import React, {useState} from 'react'
import "./Counter.scss"


const Counter = () => {
  
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
        <h4>Ticket</h4>
        <div className='counterButtons'>
        <button className='minusTicket' onClick={handleDecrement}>-</button>
        <p>{counter}</p>
        <button className='addTicket' onClick={handleIncrement}>+</button>
        </div>
    </div>
  )
}

export default Counter