import { formatTime } from "./formatTime";
import useTimer from "./useTimer";

function App() {
  const {
    time,
    saveTimes,
    startTimer,
    stopTimer,
    resetTimer,
    getSaveTime,
    active,
  } = useTimer(0);
  return (
    <div className="App container">
      <h1>Coder Timer</h1>
      <div className="timer__wrapper">
        <div className="timer__display">
          <p>{formatTime(time)}</p>
        </div>
        <div className="button__wrapper">
          <button className="button" onClick={stopTimer}>
            Stop
          </button>
          <button className="button" ref={active} onClick={startTimer}>
            Start
          </button>
          <button className="button" onClick={resetTimer}>
            Reset
          </button>
        </div>
        <div>
          {saveTimes.map((saveTime, index) => (
            <button
              key={index}
              className="button"
              onClick={() => getSaveTime(index)}
            >
              {formatTime(saveTime)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
