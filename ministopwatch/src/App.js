import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

//  lskjd
  const startStop = () => {
    setIsRunning(prevState => !prevState);
  };
  const reset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  
  return (
    <>
    <div className="stopwatch">
      <h1>Stopwatch</h1>
      <h2>Time: <span>{formatTime()}</span></h2>
      <div className="controls">
        <button onClick={startStop}>{isRunning ? 'Stop' : 'Start'}</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
    </>
  )
}

export default App