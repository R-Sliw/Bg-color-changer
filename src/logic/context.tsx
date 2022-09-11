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
  color: "rgb(255, 255, 255)",
  color2: "rgb(0,0,0)",
  degValue: 180,
  interval: true,
};

const AppContext = createContext({});

const AppProvider = ({ children }: ContextProviderProps) => {
  const [{ color, color2, degValue, interval }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const changeColor = () => {
    dispatch({ type: "NEW_COLOR" });
  };

  const handleDeg = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "DEG_CHANGER", payload: parseInt(e.target.value) });
  };

  const startInterval = () => {
    dispatch({ type: "START_INTERVAL" });
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
