import React from 'react'
import "./EmployeeCard.scss"

const EmployeeCard = (props) => {
  const {nameTag, roleTag} = props;
  return (
    <div>
      <h2>{nameTag}</h2>
      <h3>{roleTag}</h3>
    </div>
  )
}

export default EmployeeCard