interface Props {
  degValue: number;
  handleDeg: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Nav = ({ handleDeg, degValue }: Props) => {
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
    </nav>
  );
};

export default Nav;
