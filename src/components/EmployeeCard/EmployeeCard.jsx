import React from 'react'
import "./EmployeeCard.scss"

const EmployeeCard = (props) => {
  const {nameTag, roleTag} = props;
  return (
    <div className='tag'>
      <h2 className='name'>{nameTag}</h2>
      <h3 className='role'>{roleTag}</h3>
    </div>
  )
}

export default EmployeeCard