import React, { useState } from 'react';
import './App.css';
import Display from './components/Display.jsx';
import Button from './components/Button.jsx';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
  };

  return (
    <div className="App">
      <div className="calculator">
        <Display value={input || '0'} clearAll={handleClear} />
        <div className="buttons">
          <Button value="7" className='button' onClick={() => handleClick('7')} />
          <Button value="8" className='button'onClick={() => handleClick('8')} />
          <Button value="9" className='button'onClick={() => handleClick('9')} />
          <Button value="/" className='button'onClick={() => handleClick('/')} />
          <Button value="4" className='button'onClick={() => handleClick('4')} />
          <Button value="5" className='button'onClick={() => handleClick('5')} />
          <Button value="6" className='button'onClick={() => handleClick('6')} />
          <Button value="*" className='button'onClick={() => handleClick('*')} />
          <Button value="1" className='button'onClick={() => handleClick('1')} />
          <Button value="2" className='button'onClick={() => handleClick('2')} />
          <Button value="3" className='button'onClick={() => handleClick('3')} />
          <Button value="-" className='button'onClick={() => handleClick('-')} />
          <Button value="0" className='button'onClick={() => handleClick('0')} />
          <Button value="." className='button'onClick={() => handleClick('.')} />
          <Button value="=" className='button'onClick={handleCalculate} />
          <Button value="+" className='button'onClick={() => handleClick('+')} />
        </div>
      </div>
    </div>
  );
}

export default App;
