import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./componentes/Nav";

const App = () => {
  const [color, setColor] = useState("rgb(0,0,0)");
  const [color2, setColor2] = useState("rgb(255,255,255)");
  const [degValue, setDegValue] = useState(180);

  const changeColor = () => {
    const r = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const r2 = Math.floor(Math.random() * 256);
    const b2 = Math.floor(Math.random() * 256);
    const g2 = Math.floor(Math.random() * 256);

    setColor(`rgb(${r}, ${b}, ${g})`);
    setColor2(`rgb(${r2}, ${b2}, ${g2})`);
  };

  useEffect(() => {
    const newColor = setInterval(() => changeColor(), 10000);

    return () => {
      clearInterval(newColor);
    };
  }, [color]);

  return (
    <main className="App">
      <Nav setDegValue={setDegValue} degValue={degValue} />
      <div
        className="App_container"
        style={{
          background: `linear-gradient(${degValue}deg, ${color} 0%, ${color2} 100%)`,
        }}
      >
        <div className="App_text_color">
          linear-gradient({degValue}deg,{color}0%,{color2} 100%)
        </div>
        <button type="button" className="App_button" onClick={changeColor}>
          Change color
        </button>
      </div>
    </main>
  );
};

export default App;
