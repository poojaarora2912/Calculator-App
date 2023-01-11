import './App.css';
import {useState} from 'react';

function App() {

  const createDigits = () => {
    const digits = [];

    for (let i=1; i<10 ; i++){
      digits.push(
        <button onClick= {() => updateCalc(i.toString())} key={i}>{i}</button>
      );
    }
    return digits;
  }

  const [calc, setCalc] = useState("");
  const[result, setResult] = useState("");

  const ops = ['/', '*', '+', '-', '.'];

  const updateCalc = value => {
    if (
      ops.includes(value) && calc === '' ||
      ops.includes(value) && ops.includes(calc.slice(-1))
    ){
      return;
    }

    setCalc (calc + value);

    if(!ops.includes(value)){
      setResult(eval(calc + value).toString());
    }
  }

  const updateResult = () => {
    setCalc(eval(calc).toString());
  }

  const updateDel = () => {
    if(calc === ''){
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  }

  return (
    <div className='calculator'>
     <h1>CALCULATOR</h1>
      <div className='display'>
        {result ? <span>({result})</span>: ''} {calc || "0"}
      </div>
      <div className='operators'>
        <button onClick= {() => updateCalc ('/')}>/</button>
        <button onClick= {() => updateCalc ('*')}>*</button>
        <button onClick= {() => updateCalc ('+')}>+</button>
        <button onClick= {() => updateCalc ('-')}>-</button>
        <button onClick = {() => updateDel()}>DEL</button>
      </div>
      <div className='digits'>{createDigits()}</div>
      <div className='ops'>
        <button onClick= {() => updateCalc ('0')}>0</button>
        <button onClick= {() => updateCalc ('.')}>.</button>
        <button onClick= {() => updateResult()}>=</button>
      </div>
    </div>
  );

  }
export default App;
