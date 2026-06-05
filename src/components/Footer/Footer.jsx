import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-divider" />

      <div className="footer-grid">

        <div>
          <h4>Company</h4>

          <a href="/">Home</a>
          <a href="/">Studio</a>
          <a href="/">Service</a>
          <a href="/">Blog</a>
        </div>

        <div>
          <h4>Terms & Policies</h4>

          <a href="/">Privacy Policy</a>
          <a href="/">Terms & Conditions</a>
          <a href="/">Explore</a>
          <a href="/">Accessibility</a>
        </div>

        <div>
          <h4>Follow Us</h4>

          <a href="/">Instagram</a>
          <a href="/">LinkedIn</a>
          <a href="/">Youtube</a>
          <a href="/">Twitter</a>
        </div>

        <div>
          <h4>Contact</h4>

          <p>1498v Fulton St, STE</p>
          <p>2D Chicago, IL 63867.</p>
          <p>(123) 456 789000</p>
          <p>info@elementum.com</p>
        </div>

      </div>

      <p className="footer-copy">
        ©2023 Elementum. All rights reserved
      </p>

    </footer>
  );
};

export default Footer;