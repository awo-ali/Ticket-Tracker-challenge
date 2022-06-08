import React from 'react'
import "./Counter.scss"


const Counter = (props) => {
  const { title, buttonText, textButton } = props;
  return (
    <div>
        <h4>{title}</h4>
        <div></div>
        <button>{buttonText}</button>
        <button>{textButton}</button>
    </div>
  )
}

export default Counter