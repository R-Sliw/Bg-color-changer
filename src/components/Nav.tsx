interface Props {
  degValue: number;
  setDegValue: React.Dispatch<React.SetStateAction<number>>;
}

const Nav = ({ setDegValue, degValue }: Props) => {
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
          onChange={(e) => setDegValue(parseInt(e.target.value))}
          className="nav_input"
        />{" "}
        {degValue}
      </label>
    </nav>
  );
};

export default Nav;
