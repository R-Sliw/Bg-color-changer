interface State {
  color: string;
  color2: string;
  degValue: number;
  interval: boolean;
}

type Action =
  | { type: "START_INTERVAL" | "NEW_COLOR" }
  | {
      type: "DEG_CHANGER";
      payload: number;
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
        interval: !state.interval,
      };

    default:
      return state;
  }
  // const GET_REDUCER = {
  //   NEW_COLOR: {
  //     ...state,
  //     color: `rgb(${r}, ${b}, ${g})`,
  //     color2: `rgb(${r2}, ${b2}, ${g2})`,
  //   },
  //   DEG_CHANGER: {
  //     ...state,
  //     degValue: (action as ActionDeg).payload,
  //   },
  //   START_INTERVAL: {
  //     ...state,
  //     startInterval: !state.startInterval,
  //   },
  // };

  // return GET_REDUCER[action.type] || state;
};
