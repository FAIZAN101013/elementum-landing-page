import "./Newsletter.css";

import waveLine from "../../assets/shapes/wavearrow.svg";
import purpleShape from "../../assets/shapes/Ellipsenew.svg";

const Newsletter = () => {
  return (
    <section className="newsletter">

      <img
  src={waveLine}
  alt=""
  className="newsletter-wave wave-1"
/>

<img
  src={waveLine}
  alt=""
  className="newsletter-wave wave-2"
/>

      <img
        src={purpleShape}
        alt=""
        className="newsletter-shape"
      />

      <div className="newsletter-content">

        <h2 className="newsletter-title">
          Subscribe to
          <br />
          our newsletter
        </h2>

        <p className="newsletter-description">
          To make your stay special and even more memorable
        </p>

        <button className="newsletter-btn">
          Subscribe Now
        </button>

      </div>

    </section>
  );
};

export default Newsletter;