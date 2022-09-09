import { useEffect, useReducer, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import { reducer } from "./reducer";

const initialState = {
  color: "rgb(0,0,0)",
  color2: "rgb(255, 255, 255)",
  degValue: 180,
  startInterval: true,
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { color, color2, degValue, startInterval } = state;
  const changeColor = () => {
    dispatch({ type: "NEW_COLOR" });
  };

  const handleDeg = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "DEG_CHANGER", payload: parseInt(e.target.value) });
  };

  useEffect(() => {
    if (startInterval) {
      const newColor = setInterval(() => changeColor(), 4000);

      return () => {
        clearInterval(newColor);
      };
    }
  }, [color, startInterval]);

  return (
    <main className="App">
      <Nav handleDeg={handleDeg} degValue={degValue} />
      <div
        className="App_container"
        style={{
          background: `linear-gradient(${degValue}deg, ${color} 0%, ${color2} 100%)`,
        }}
      >
        <div className="App_info">
          linear-gradient({degValue}deg,{color}0%,{color2} 100%)
        </div>
        <button type="button" className="App_btn-changer" onClick={changeColor}>
          Change color
        </button>
        <button
          type="button"
          className={`App_btn ${startInterval ? "stop" : "start"}`}
          onClick={() => dispatch({ type: "START_INTERVAL" })}
        >
          {startInterval ? "stop" : "start"} color changing
        </button>
      </div>
    </main>
  );
};

export default App;
