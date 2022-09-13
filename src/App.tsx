import "./App.css";
import { BottomNav } from "./components/BottomNav";
import Nav from "./components/Nav";
import { useGlobalContext } from "./logic/context";

interface LogicContext {
  changeColor: () => void;
  color: string;
  color2: string;
  handleDeg: (e: React.ChangeEvent<HTMLInputElement>) => void;
  degValue: number;
  interval: boolean;
  startInterval: () => void;
  procentColor1: number;
  procentColor2: number;
  handleReset: () => void;
}

const App = () => {
  const {
    changeColor,
    color,
    color2,
    degValue,
    startInterval,
    interval,
    procentColor1,
    procentColor2,
    handleReset,
  } = useGlobalContext() as LogicContext;

  return (
    <main className="App">
      <Nav />
      <div
        className="App_container"
        style={{
          background: `linear-gradient(${degValue}deg, rgb(${color})${procentColor1}%, rgb(${color2}) ${procentColor2}%)`,
        }}
      >
        <div className="App_info">
          linear-gradient({degValue}deg,rgb({color}){procentColor1}%,rgb(
          {color2}) {procentColor2}%)
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
        <button type="button" className="App_btn-changer" onClick={handleReset}>
          restart
        </button>
      </div>
      <BottomNav />
    </main>
  );
};

export default App;
