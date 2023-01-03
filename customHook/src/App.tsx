import React from 'react'
import { useTimer } from './Hooks/useTimer'

const App = () => {
   const [time,start,stop,reset] = useTimer(5);
  return (
    <>
    <h1>{time}</h1>
    <button onClick={start}>Start</button>
    <button onClick={stop}>Stop</button>
    <button onClick={reset}>reset</button>
    </>
  )
}

export default App