import "./navbar.scss";

function Navbar() {
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
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-discord"></i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
