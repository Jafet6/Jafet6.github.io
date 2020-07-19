import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [randomNumber, setRandomNumber] = useState();
  const [timer, setTimer] = useState(0);
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);


  useEffect(() => {
    setInterval(() => {
      setRandomNumber(Math.floor(Math.random() * 10))
    }, 10000)
    
    setInterval(() => {
      setTimer((currentTimer) => currentTimer + 1)
    }, 1000)

  }, [])

  useEffect(() => {
    if (randomNumber % 3 === 0 || randomNumber % 5 === 0) {
      setMessage('Acerto');
      setShowMessage(true)
      const messageInterval = setTimeout(() => {
        setMessage('')
        setShowMessage(false)
      }, 4000)
    }
  }, [randomNumber])
  
  return (
    <div className="App">
      <span>Number: {randomNumber}</span><br></br>
      {showMessage ? <div><span>Message: {message}</span><br></br></div> : <span></span>}
      <span>Timer: {timer}</span>
    </div>
  );
}

export default App;
