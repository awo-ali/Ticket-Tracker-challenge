
import './App.scss';
import EmployeeCard from './components/EmployeeCard/EmployeeCard'
import Counter from './components/Counter/Counter'
import team from './data/team'


const App = () => {

const cardArr = team.map ((team)  => 
<div  className='card'>
<EmployeeCard nameTag = {team.name} roleTag = {team.role}/>
<Counter title = "Counter"/>
</div>
)

  //console.log(team.name);
  return (


    <div className='app'>
    <h1 className='title'>Ticket Tracker</h1>
    <div className='cardContainer'>
    {cardArr}
    </div>
    </div>
  )
}

export default App

