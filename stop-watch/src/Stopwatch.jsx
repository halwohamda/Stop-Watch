import React, {useState,useEffect,useRef} from 'react'

function Stopwatch (){
    const [isRunning, setRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

useEffect(()=>{

}, [isRunning]);

function start(){
    setRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
    console.log(startTimeRef.current)
}
function reset(){

}
function formatTime(){
    return `00:00:00`

}
  return (
    <div className='stopwatch'>
        <div className='display'>
            {formatTime()}
            <div className="controls">
                <button onClick={start} className='start-button'>start</button>
                <button onClick={stop} className='stop-button'>stop</button>
                <button onClick={reset} className='reset-button'>rest</button>
            </div>

        </div>


    </div>
  )
}

export default Stopwatch