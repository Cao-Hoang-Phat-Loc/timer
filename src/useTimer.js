import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(ini);
  const isStart = useRef(false);
  const active = useRef(null);
  const refInterval = useRef(null);
  const [saveTimes, setSaveTimes] = useState([]);
  // const getSaveTime=useRef(null);

  const startTimer = () => {
    // const interval =setInterval(()=>{
    //   setTime(prevTime =>prevTime +1)
    // },1000)
    if (!isStart.current) {
      isStart.current = true;
      refInterval.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    active.current.disabled = true;
  };
  const stopTimer = () => {
    if (isStart.current) {
      isStart.current = false;
      clearInterval(refInterval.current);
      setSaveTimes((prevTime) => [...prevTime, time]);
      active.current.disabled = false;
    }
  };
  const resetTimer = () => {
    clearInterval(refInterval.current);
    setTime(ini);
    setSaveTimes([]);
    isStart.current = false;
    active.current.disabled = false;
  };
  const getSaveTime = (index) => {
    const selectedTime = saveTimes[index];
    setTime(selectedTime);
    isStart.current = false;
    active.current.disabled = false;
    clearInterval(refInterval.current);
  };

  return {
    time,
    saveTimes,
    startTimer,
    stopTimer,
    resetTimer,
    getSaveTime,
    active,
  };
};
export default useTimer;
