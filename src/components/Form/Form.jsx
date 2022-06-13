import React, {useState} from 'react'
import "./Form.scss";
import blackCross from "../../assets/images/black-cross.png";

const Form = (props) => {
    const [inputName, setInputName] = useState("")
    const [inputRole, setInputRole] = useState("")
  
console.log(inputName);
console.log(inputRole);
const {newMember, toggleForm } = props


  return (
    
    <form className='form' onSubmit={(e) => newMember(inputName,inputRole, e)}>
    <img src={blackCross} alt="Close form" className="form__cross" 
    onClick={toggleForm}/>
    <label>
      Name:
      <input type="text" onChange={(e)=> setInputName(e.target.value)} id='inputName' name="name" />
    </label>
    <label>
      Role:
      <input type="text" onChange={(e)=> setInputRole(e.target.value)} id='inputRole' name="role" />
    </label>
    <input type="submit" id='submitButton' value="Submit" />
  </form> 
 
  );
};

export default Form;