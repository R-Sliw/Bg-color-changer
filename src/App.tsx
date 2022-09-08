import { useEffect, useReducer, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import { reducer } from "./reducer";

const initialState = {
  color: "rgb(0,0,0)",
  // color2: "rgb(255, 255, 255)",
  //degValue: 180,
  //startInterval: true,
};

const App = () => {
  const [color2, setColor2] = useState("rgb(255,255,255)");
  const [degValue, setDegValue] = useState(180);
  const [startInterval, setStartInterval] = useState(true);
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeColor = () => {
    const r = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const r2 = Math.floor(Math.random() * 256);
    const b2 = Math.floor(Math.random() * 256);
    const g2 = Math.floor(Math.random() * 256);

    setColor2(`rgb(${r2}, ${b2}, ${g2})`);
    dispatch({ type: "NEW_COLOR" });
  };

  useEffect(() => {
    if (startInterval) {
      const newColor = setInterval(() => changeColor(), 4000);

      return () => {
        clearInterval(newColor);
      };
    }
  }, [state.color, startInterval]);

  return (
    <main className="App">
      <Nav setDegValue={setDegValue} degValue={degValue} />
      <div
        className="App_container"
        style={{
          background: `linear-gradient(${degValue}deg, ${state.color} 0%, ${color2} 100%)`,
        }}
      >
        <div className="App_info">
          linear-gradient({degValue}deg,{state.color}0%,{color2} 100%)
        </div>
        <button type="button" className="App_btn-changer" onClick={changeColor}>
          Change color
        </button>
        <button
          type="button"
          className={`App_btn ${startInterval ? "stop" : "start"}`}
          onClick={() => setStartInterval(!startInterval)}
        >
          {startInterval ? "stop" : "start"} color changing
        </button>
      </div>
    </main>
  );
};

export default App;
