const Footer = () => {
  return (
    <div className="footer">
      {/* <img src="logob.png" alt="" /> */}

      <div className="contact-icons">
        <a href="https://github.com/tapiwanashechakurungama">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/tapiwanashechakurungama">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://twitter.com/tapiwanashechakurungama">
          <i className="fa-brands fa-twitter"></i>
        </a>
      </div>
      <p>Copyright © {new Date().getFullYear()} Tapiwanashe</p>
    </div>
  );
};

export default Footer;
