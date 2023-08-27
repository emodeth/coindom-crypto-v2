import "./footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <ul className="footer__socials">
          <li className="footer__social">
            <i className="fa-brands fa-twitter"></i>
          </li>
          <li className="footer__social">
            <i className="fa-brands fa-discord"></i>
          </li>
          <li className="footer__social">
            <i className="fa-brands fa-facebook"></i>
          </li>
          <li className="footer__social">
            <i className="fa-brands fa-youtube"></i>
          </li>
        </ul>
        <div className="footer__text">
          <p>Privacy</p>
          <p>Terms of Use</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
