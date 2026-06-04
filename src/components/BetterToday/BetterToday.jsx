import "./BetterToday.css";

import betterTodayImg from "../../assets/images/better-today.png";
import progressImg from "../../assets/images/image 348.png";

import underline from "../../assets/shapes/underline.svg";
import waveLine from "../../assets/shapes/Vector 2517.svg";

const BetterToday = () => {
  return (
    <section className="features">

      <div className="red-glow"></div>

      <img
        src={waveLine}
        alt=""
        className="feature-wave"
      />

      {/* ROW 1 */}
      <div className="feature-row">

        <div className="feature-content">

          <img
            src={underline}
            alt=""
            className="better-title-underline"
          />

          <h2 className="feature-title">
            Tomorrow should
            <br />
            be better than{" "}
            <span className="today-highlight">
              today
            </span>
          </h2>

          <p className="feature-description">
            We are a team of strategists, designers communicators,
            researchers. Together, we believe that progress only
            happens when you refuse to play things safe.
          </p>

          <a href="/" className="read-more">
            Read more
          </a>

        </div>

        <div className="feature-image-wrapper">

          <div className="red-square"></div>

          <img
            src={betterTodayImg}
            alt="Better Today"
            className="feature-image"
          />

        </div>

      </div>

      {/* ROW 2 */}
      <div className="feature-row second-row">

        <div className="feature-image-wrapper">

          <div className="triangle-top"></div>
          <div className="triangle-bottom"></div>

          <img
            src={progressImg}
            alt="Progress"
            className="feature-image"
          />

        </div>

        <div className="feature-content progress-content">

          <img
            src={underline}
            alt=""
            className="better-title-underline progress-underline"
          />

          <h2 className="feature-title">
            <span className="today-highlight">
              See
            </span>{" "}
            how we can
            <br />
            help you progress
          </h2>

          <p className="feature-description">
            We add a layer of fearless insights and action that
            allows change makers to accelerate their progress in
            areas such as brand, design, digital, comms and social
            research.
          </p>

          <a href="/" className="read-more">
            Read more
          </a>

        </div>

      </div>

    </section>
  );
};

export default BetterToday;