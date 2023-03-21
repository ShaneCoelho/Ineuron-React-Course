import React, {useState} from 'react'
import './App.css'

const App=()=>{
  const [count,setCount]=useState(0)
  const [max,setMax]=useState(100)
  const[min,setMin]=useState(0)

  const Max=()=>{
    var value1=document.getElementById('max').value
    setMax(value1)
  }

  const Min=()=>{
    var value1=document.getElementById('min').value
    setMin(value1)
  }

  return(
    <div className="App">
      <header>
        <h1>Counter App</h1>
      </header>
      
        Max Limit:<input type='text' id='max'/>
        <button onClick={Max}>Submit</button><br />
        Min Limit:<input type='text' id='min'/>
        <button onClick={Min}>Submit</button><br />
      
      <h2>The current Count is {count}</h2>
      <button onClick={()=>setCount(0)}>Reset Counter</button>
      <button onClick={()=>(count>=max?"":setCount(count+1))}>Increase Counter</button>
      <button onClick={()=>(count<=min?"":setCount(count-1))}>Decrease Counter</button>


    </div>
  )
}

export default App