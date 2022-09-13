interface State {
  color: string;
  color2: string;
  degValue: number;
  interval: boolean;
  procentColor1: number;
  procentColor2: number;
}

type Action =
  | { type: "START_INTERVAL" | "NEW_COLOR" }
  | {
      type: "DEG_CHANGER" | "PROCENT_COLOR1" | "PROCENT_COLOR2";
      payload: number;
    }
  | {
      type: "RESET";
      payload: State;
    };

export const reducer = (state: State, action: Action) => {
  const rgbArray = [1, 2, 3, 4, 5, 6];

  const [r, g, b, r2, g2, b2] = rgbArray.map(
    (rgb) => (rgb = Math.floor(Math.random() * 256))
  );

  switch (action.type) {
    case "NEW_COLOR":
      return {
        ...state,
        color: `${r}, ${b}, ${g}`,
        color2: `${r2}, ${b2}, ${g2}`,
      };

    case "DEG_CHANGER":
      return {
        ...state,
        degValue: action.payload,
      };

    case "START_INTERVAL":
      return {
        ...state,
        interval: !state.interval,
      };

    case "PROCENT_COLOR1":
      return {
        ...state,
        procentColor1: action.payload,
      };

    case "PROCENT_COLOR2":
      return {
        ...state,
        procentColor2: action.payload,
      };

    case "RESET":
      return {
        ...action.payload,
      };

    default:
      return state;
  }
};
