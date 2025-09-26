import UserInput from './Components/UserInput'
import Results from './Components/Results'
import Investimg from './assets/investment-calculator-logo.png'
import { useState } from 'react'
function App() {
  const[userInput,setUserInput]=useState({
    initialInvestment:10000,
    annualInvestment:1200,
    expectedReturn:7,
    duration:10
})
const isValid=userInput.duration >=1;
function handleChange(inputIdentifier,newValue){
  setUserInput((prevInput)=>{
      return{
          ...prevInput,
          [inputIdentifier]:newValue === "" ? "" : +newValue
      }
  })
}
  return (
    
    <>
    <div id="header">
      <img src={Investimg} alt="" />
      <h1>Investment Calculator</h1>
    </div>
    <UserInput userInput={userInput} onChange={handleChange}/>
    {isValid ? <Results input={userInput}/>: <p className='center'>Please Enter Duration Greater than Zero.</p> }
    </>
    
  )
}

export default App
