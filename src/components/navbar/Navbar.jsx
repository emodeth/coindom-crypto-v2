import "./navbar.scss";

function Navbar({ isOpen, setIsOpen }) {
  return (
    <nav>
      <div className="navbar">
        <h2 className="navbar__logo">Coindom</h2>
        <ul className="navbar__nav">
          <li className="navbar__nav-item">
            <a href="#home">Home</a>
          </li>
          <li className="navbar__nav-item">
            <a href="#market">Market</a>
          </li>
          <li className="navbar__nav-item">
            <a href="#choose">Choose Us</a>
          </li>
          <li className="navbar__nav-item">
            <a href="#join">Join</a>
          </li>
        </ul>
        <div className="navbar__social">
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-discord"></i>
        </div>
        <i
          onClick={() => setIsOpen(true)}
          className="fa-solid fa-bars navbar__menu"
        ></i>
      </div>
    </nav>
  );
}

export default Navbar;
