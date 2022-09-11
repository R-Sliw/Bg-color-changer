import { useEffect, useReducer } from "react";
import "./App.css";
import Nav from "./components/Nav";
import { useGlobalContext } from "./logic/context";
import { reducer } from "./logic/reducer";

interface LogicContext {
  changeColor: () => void;
  color: string;
  color2: string;
  handleDeg: (e: React.ChangeEvent<HTMLInputElement>) => void;
  degValue: number;
  interval: boolean;
  startInterval: () => void;
}

const App = () => {
  const { changeColor, color, color2, degValue, startInterval, interval } =
    useGlobalContext() as LogicContext;

  return (
    <main className="App">
      <Nav />
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
          className={`App_btn ${interval ? "stop" : "start"}`}
          onClick={startInterval}
        >
          {interval ? "stop" : "start"} color changing
        </button>
      </div>
    </main>
  );
};

export default App;
