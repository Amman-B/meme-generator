import "../style.css";
import trollFace from "../images/troll-face.png";

const Header = () => {
  return (
    <>
      <header className="header">
        <img
          src={trollFace}
          className="header--image"
          alt="logo"
        />
        <h2 className="header--title">Meme Maker</h2>
     
      </header>
    </>
  );
};

export default Header;
