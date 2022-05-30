import "./styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer_text">
        <span className="logo">Ningali</span> &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
