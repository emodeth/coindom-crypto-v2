import "./mobileNavbar.scss";

function MobileNavbar({ isOpen, setIsOpen }) {
  return (
    <div
      className={
        isOpen ? "mobile-navbar mobile-navbar--active" : "mobile-navbar"
      }
    >
      <i
        onClick={() => setIsOpen(false)}
        className="fa-solid fa-xmark mobile-navbar__close"
      ></i>

      <ul className="mobile-navbar__nav">
        <li
          onClick={() => setIsOpen(false)}
          className="mobile-navbar__nav-item"
        >
          <a href="#home">Home</a>
        </li>
        <li
          onClick={() => setIsOpen(false)}
          className="mobile-navbar__nav-item"
        >
          <a href="#market">Market</a>
        </li>
        <li
          onClick={() => setIsOpen(false)}
          className="mobile-navbar__nav-item"
        >
          <a href="#choose">Choose Us</a>
        </li>
        <li
          onClick={() => setIsOpen(false)}
          className="mobile-navbar__nav-item"
        >
          <a href="#join">Join</a>
        </li>
      </ul>
    </div>
  );
}

export default MobileNavbar;
