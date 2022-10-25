// load math.js (using node.js)
import {useState} from 'react'
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  const buttonnums  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  return (
    <>
    <Calculator total={count} addnum={setCount} />
    <Buttons array={buttonnums} btntotal={count} btncnt={setCount}/>
    </>
  );
}

function Calculator(props) {
  return(
    <h1>{props.total}</h1>
  )
}
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
