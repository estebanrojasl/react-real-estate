import menu from "../assets/burger_bar.png";
import logo from "../assets/logo.png";

function Header() {
  return (
    <div className="header-div">
      <nav className="">
        <img className="menu" src={menu} alt="" />
        <img className="logo" src={logo} alt="" />
      </nav>
      <input
        className="input-bar"
        type="text"
        placeholder="  Search estate by id"
      />
    </div>
  );
}

export default Header;
