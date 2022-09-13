import { useGlobalContext } from "../logic/context";

interface Props {
  rColor: number;
  handleRColor: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const BottomNav = () => {
  const { rColor, handleRColor } = useGlobalContext() as Props;

  return (
    <div className="bottomNav">
      {" "}
      <label htmlFor="rColor" className="nav_text">
        r color
        <input
          type="range"
          name="rColor"
          id="rColor"
          min="0"
          max="255"
          value={rColor}
          onChange={(e) => handleRColor(e)}
          className="nav_input"
        />{" "}
        {rColor}
      </label>
    </div>
  );
};
