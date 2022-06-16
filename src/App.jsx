import "./App.scss";
import React, {useState, useEffect} from 'react'
import EmployeeCard from "./container/EmployeeCard/EmployeeCard";
import Counter from "./container/Counter/Counter";
import team from "./data/team";
import Form from "./components/Form/Form";

const App = (props) => {

  const [ showForm, setShowForm] = useState(false)
  const [ teamMembers, setTeamMembers] = useState(team)
  

  const toggleForm =() => {
 setShowForm(!showForm)
  };
  

  const addNewMember = (memberName, memberRole, event) =>{
    event.preventDefault()
    setTeamMembers([...teamMembers,{name:memberName, role:memberRole, id:team.length+1}])
    console.log(team);
  }
  console.log(teamMembers);

 

  const cardArr = (team) => {  return team.map((team) => (
    <div className="card">
      <EmployeeCard nameTag={team.name} roleTag={team.role} />
      <Counter title="Counter" />
      
    </div>
  ));
}
   
 
  return (
    <div className="app">
      {showForm &&  <Form newMember={addNewMember} toggleForm={toggleForm}/> }
      <button data-testid='button' onClick={toggleForm} toggleForm={toggleForm}>Click For New Employee</button>
      <h1 className="title">Ticket Tracker</h1>
      <div className="cardContainer">{cardArr(teamMembers)}</div>
     
 
    </div>
  );
};

export default App;
