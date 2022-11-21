import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const id = useRef("");

  const [auth, setAuth] = useState(false);

  if (counter === 11) {
    setCounter(0);
  }
  const handleStart = () => {
    if (auth) {
      alert("Do you really want to Restart?");
      setAuth(false);
    }
    id.current = setInterval(() => {
      setCounter((counter) => counter + 1);
    }, 500);
  };
  const handleStop = () => {
    if (counter <= 5) {
      setCounter(0);
    } else {
      setAuth(true);
    }
    clearInterval(id.current);
  };
  return (
    <>
      <div className="container">
        <h1 className={counter % 2 === 0 ? "counter" : "counter1"}>
          {counter}
        </h1>
        <button className="butt" onClick={handleStart}>
          {auth ? "Restart" : "Start"}
        </button>
        <button className="butt" onClick={handleStop}>
          Stop
        </button>
      </div>
    </>
  );
}

export default App;
