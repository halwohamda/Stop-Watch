import React, {useState,useEffect,useRef} from 'react'

const Stopwatch = () => {
    const [isRunning, setRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const starRimeRef = useRef(0);

useEffect(()=>{

}, isRunning);

function start(){

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

        </div>


    </div>
  )
}

export default Stopwatch