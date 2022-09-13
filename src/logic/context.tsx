import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { reducer } from "./reducer";

interface ContextProviderProps {
  children: ReactNode;
}

const initialState = {
  color: "255, 255, 255",
  color2: "0,0,0",
  degValue: 180,
  interval: true,
  procentColor1: 0,
  procentColor2: 100,
};

const AppContext = createContext({});

const AppProvider = ({ children }: ContextProviderProps) => {
  const [
    { color, color2, degValue, interval, procentColor1, procentColor2 },
    dispatch,
  ] = useReducer(reducer, initialState);

  const changeColor = () => {
    dispatch({ type: "NEW_COLOR" });
  };

  const handleDeg = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "DEG_CHANGER", payload: parseInt(e.target.value) });
  };

  const startInterval = () => {
    dispatch({ type: "START_INTERVAL" });
  };

  const handleColorProcent = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "PROCENT_COLOR1", payload: parseInt(e.target.value) });
  };

  const handleColorProcent2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "PROCENT_COLOR2", payload: parseInt(e.target.value) });
  };

  const handleReset = () => {
    dispatch({ type: "RESET", payload: initialState });
  };

  useEffect(() => {
    if (interval) {
      const newColor = setInterval(() => changeColor(), 4000);

      return () => {
        clearInterval(newColor);
      };
    }
  }, [color, startInterval]);

  return (
    <AppContext.Provider
      value={{
        changeColor,
        color,
        color2,
        handleDeg,
        degValue,
        startInterval,
        interval,
        handleColorProcent,
        procentColor1,
        procentColor2,
        handleColorProcent2,
        handleReset,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
