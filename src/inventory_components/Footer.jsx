const Footer = () => (
  <footer className="footer-inner">
    <p>© {new Date().getFullYear()} Stockwell. Simple stock, better organized.</p>
    <p className="footer-note"><span aria-hidden="true" /> Your inventory is saved on this device</p>
  </footer>
);

export default Footer;
