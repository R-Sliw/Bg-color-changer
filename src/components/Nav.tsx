import { useGlobalContext } from "../logic/context";

interface Props {
  degValue: number;
  handleDeg: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleColorProcent: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleColorProcent2: (e: React.ChangeEvent<HTMLInputElement>) => void;
  procentColor1: number;
  procentColor2: number;
}

const Nav = () => {
  const {
    degValue,
    handleDeg,
    handleColorProcent,
    procentColor1,
    handleColorProcent2,
    procentColor2,
  } = useGlobalContext() as Props;

  return (
    <nav className="nav">
      <label htmlFor="deg" className="nav_text">
        deg changer
        <input
          type="range"
          name="deg"
          id="deg"
          min="0"
          max="360"
          value={degValue}
          onChange={(e) => handleDeg(e)}
          className="nav_input"
        />{" "}
        {degValue}
      </label>
      <label htmlFor="procentColor1" className="nav_text">
        first color
        <input
          type="range"
          name="procentColor1"
          id="procentColor1"
          min="0"
          max="100"
          value={procentColor1}
          onChange={(e) => handleColorProcent(e)}
          className="nav_input"
        />{" "}
        {procentColor1}
      </label>
      <label htmlFor="procentColor2" className="nav_text">
        second color
        <input
          type="range"
          name="procentColor2"
          id="procentColor2"
          min="0"
          max="100"
          value={procentColor2}
          onChange={(e) => handleColorProcent2(e)}
          className="nav_input"
        />{" "}
        {procentColor2}
      </label>
    </nav>
  );
};

export default Nav;
