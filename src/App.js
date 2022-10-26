// load math.js (using node.js)
import {evaluate} from 'mathjs'
import React, {useState} from 'react'
import './App.css';

function App() {
  const [count, setCount] = useState('')
  const buttonnums  = ['C', '$', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-','1', '2', '3', '+', '0', '.']
  const buttonfnc  = ['=']

  //create handler to handle adding characters to the display array
  function addnumhander(button) {
    setCount(count + button)
    if (button === 'C') {
      setCount('')
    } else if ( button === '=' ) {
      setCount(evaluate(count)) 
    }
  }
  return (
    <>
    <div className='calculator'>
    <div className='displaydiv'>
    <Calculator display={count} addnum={setCount} />
    </div>
    <div className='btndiv'>
    <Buttons array={buttonnums} btntotal={count} btncnt={addnumhander}/>
    <div className='equate'>
    <Equate array={buttonfnc} btntotal={count} btncnt={addnumhander}/>
    </div>
    </div>
    </div>
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

//
function Equate(props) {  
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
