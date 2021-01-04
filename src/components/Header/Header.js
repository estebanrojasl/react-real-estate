import menu from "../assets/burger_bar.png";
import logo from "../assets/logo.png";
import magnifier from "../assets/magnifier.png";

function Header() {
  return (
    <div className="header-div">
      <nav className="">
        <img className="menu" src={menu} alt="menu" />
        <img className="logo" src={logo} alt="logo" />
      </nav>
      <div>
        <img className="magnifier" src={magnifier} alt="magnifier" />
        <input
          className="input-bar"
          type="text"
          placeholder="Search estate by id"
        />
      </div>
    </div>
  );
}

export default Header;
