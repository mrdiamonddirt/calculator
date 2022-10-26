// load math.js (using node.js)
import {evaluate} from 'mathjs'
import React, {useState} from 'react'
import './App.css';

function App() {
  const [count, setCount] = useState('')
  const buttonnums  = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-','*', '/', '.', '=', 'c']

  //create handler to handle adding characters to the display array
  function addnumhander(button) {
    setCount(count + button)
    if (button === 'c') {
      setCount('')
    } else if ( button === '=' ) {
      setCount(evaluate(count)) 
    }
  }
  return (
    <>
    <Calculator display={count} addnum={setCount} />
    <Buttons array={buttonnums} btntotal={count} btncnt={addnumhander}/>
    </>
  );
}
//
function Calculator(props) {
  return(
    <h1>{props.display}</h1>
  )
}

//
function Buttons(props) {  
  return (
  <>
  {props.array.map((button, index) => {
    return (
      <button key={index} onClick={() => props.btncnt(button)}>{button}</button>
    )
  })}
  </>
  )
}

export default App;
