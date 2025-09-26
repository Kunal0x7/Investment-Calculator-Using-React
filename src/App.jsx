import UserInput from './Components/UserInput'
import Investimg from './assets/investment-calculator-logo.png'
function App() {
  return (
    <>
    <div id="header">
      <img src={Investimg} alt="" />
      <h1>Investment Calculator</h1>
    </div>
    <UserInput/>
    </>
    
  )
}

export default App
