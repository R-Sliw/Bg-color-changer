interface State {
  color: string;
  color2: string;
  degValue: number;
  startInterval: boolean;
}

type Action =
  | { type: "NEW_COLOR" }
  | { type: "DEG_CHANGER"; payload: number }
  | { type: "START_INTERVAL" };

export const reducer = (state: State, action: Action) => {
  const rgbArray = [1, 2, 3, 4, 5, 6];

  const [r, g, b, r2, g2, b2] = rgbArray.map(
    (rgb) => (rgb = Math.floor(Math.random() * 256))
  );

  switch (action.type) {
    case "NEW_COLOR":
      return {
        ...state,
        color: `rgb(${r}, ${b}, ${g})`,
        color2: `rgb(${r2}, ${b2}, ${g2})`,
      };

    case "DEG_CHANGER":
      return {
        ...state,
        degValue: action.payload,
      };

    case "START_INTERVAL":
      return {
        ...state,
        startInterval: !state.startInterval,
      };

    default:
      return state;
  }
};
