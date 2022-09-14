import { useGlobalContext } from "../logic/context";

interface Props {
  color: {
    r: number;
    g: number;
    b: number;
  };
  handleRColor: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const BottomNav = () => {
  const {
    color: { r, g },
    handleRColor,
  } = useGlobalContext() as Props;

  return (
    <div className="bottomNav">
      <label htmlFor="rColor" className="nav_text">
        r color
        <input
          type="range"
          name="rColor"
          id="rColor"
          min="0"
          max="255"
          value={r}
          onChange={(e) => handleRColor(e)}
          className="nav_input"
        />{" "}
        {r}
      </label>
      <label htmlFor="gColor" className="nav_text">
        g color
        <input
          type="range"
          name="gColor"
          id="gColor"
          min="0"
          max="255"
          value={g}
          onChange={(e) => handleRColor(e)}
          className="nav_input"
        />{" "}
        {g}
      </label>
    </div>
  );
};
