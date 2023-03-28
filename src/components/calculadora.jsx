/* eslint-disable no-eval */
import React, { useState } from 'react'
import "./app.css"

export default function Calculadora() {

  const [result, setResult] = useState('')

  function handleClick(e) {
    setResult(result.concat(e.target.value));
  }

  function clear() {
    setResult("");
  }

  function backspace() {
    setResult(result.slice(0, -1));
  }

  function calc() {
    try {
      setResult(eval(result).toString());
    }
    catch (err) {
      setResult("Erro!!!");
    }
  }
  
  
  return (
    
    <div className='contender'>
      <form>
        <input type='text' value={result} className='result' />
      </form>
      <div className='tecla'>
        
        <button id='clear' onClick={clear} className='clear' >Clear</button>
        <button id='backspace' onClick={backspace} className='c'>C</button>
        <button value="+" onClick={handleClick} className='operacao' >+</button>
        <button value="1" onClick={handleClick} className='btn' >1</button>
        <button value="2" onClick={handleClick} className='btn' >2</button>
        <button value="3" onClick={handleClick} className='btn' >3</button>
        <button value="-" onClick={handleClick} className='operacao' >-</button>
        <button value="4" onClick={handleClick} className='btn' >4</button>
        <button value="5" onClick={handleClick} className='btn' >5</button>
        <button value="6" onClick={handleClick} className='btn' >6</button>
        <button value="*" onClick={handleClick} className='operacao' >*</button>
        <button value="7" onClick={handleClick} className='btn' >7</button>
        <button value="8" onClick={handleClick} className='btn' >8</button>
        <button value="9" onClick={handleClick} className='btn' >9</button>
        <button value="/" onClick={handleClick} className='operacao' >/</button>
        <button value="0" onClick={handleClick} className='btn' >0</button>
        <button value="." onClick={handleClick} className='btn' >.</button>
        <button value="=" onClick={calc} className='igual' >=</button>
       
      </div>
     </div>
   
  )

}
