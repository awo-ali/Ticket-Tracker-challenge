
import './App.scss';
import EmployeeCard from './components/EmployeeCard/EmployeeCard'
import Counter from './components/Counter/Counter'
const App = () => {
  return (
    <div className='app'>
    <h1>Ticket Tracker</h1>
    <div>
    <EmployeeCard nameTag = "Name:" roleTag = "Role:"/>
    <Counter title = "Counter" buttonText = "-" textButton = "+"/>
    </div>
    </div>
  )
}

export default App

