interface State {
  color: string;
}

type Action = { type: "NEW_COLOR" };

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "NEW_COLOR":
      const r = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const r2 = Math.floor(Math.random() * 256);
      const b2 = Math.floor(Math.random() * 256);
      const g2 = Math.floor(Math.random() * 256);

      return {
        ...state,
        color: `rgb(${r}, ${b}, ${g})`,
      };

    default:
      return state;
  }
};
