import React, {useState,useEffect,useRef} from 'react'

const Stopwatch = () => {
    const [isRunning, setRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const starRimeRef = useRef(0);

    
  return (
    <div>Stopwatch</div>
  )
}

export default Stopwatch