import React, { useState } from 'react'

import './App.css';

const App = (props) => {
  const [result,setresult] = useState("");
  const clickHanlder =(event)=>{
    setresult(result.concat(event.target.value));
  }
  const clickC=(event)=>{
    setresult(0);
  }
  const clickX=(event)=>{
    setresult(result.slice(0,-1));
  }
  const calculate =() =>{
    setresult(eval(result).toString());
  }
  return (
    <div className='calculator'>
    <input className="text" type="text" value ={result}/>
    <div className="btn-container">
      <div className="row">
        <input type="button" value="c" onClick={clickC}/>
        <input type="button" value="x" onClick={clickX}/>
        <input type="button" value="%" onClick={clickHanlder}/>
        <input type="button" value="/" onClick={clickHanlder} />
      </div>
      <div className="row">
        <input type="button" value="7" onClick={clickHanlder} />
        <input type="button" value="8" onClick={clickHanlder}/>
        <input type="button" value="9" onClick={clickHanlder}/>
        <input type="button" value="*" onClick={clickHanlder}/>
      </div>
      <div className="row">
        <input type="button" value="4" onClick={clickHanlder} />
        <input type="button" value="5" onClick={clickHanlder} />
        <input type="button" value="6" onClick={clickHanlder} />
        <input type="button" value="-" onClick={clickHanlder} />
      </div>
      <div className="row">
        <input type="button" value="1" onClick={clickHanlder} />
        <input type="button" value="2" onClick={clickHanlder} />
        <input type="button" value="3" onClick={clickHanlder}/>
        <input type="button" value="+" onClick={clickHanlder}/>
      </div>
      <div className="row">
        <input type="button" value="." onClick={clickHanlder}/>
        <div className="zero">
          <input type="button" value="0" onClick={clickHanlder} />
        </div>
        <input type="button" value="="  onClick={calculate}/>
      </div>
    </div>
  </div>
  

  )
}



export default App
