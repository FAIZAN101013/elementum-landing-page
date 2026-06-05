import "./BetterToday.css";

import FeatureCard from "./FeatureCard";

import betterTodayImg from "../../assets/images/better-today.png";
import progressImg from "../../assets/images/image 348.png";

import waveLine from "../../assets/shapes/Vector 2517.svg";

const BetterToday = () => {
  return (
    <section className="features">

      <img
        src={waveLine}
        alt=""
        className="feature-wave"
      />

      {/* Row 1 */}
      <FeatureCard
        title={
          <>
            Tomorrow should
            <br />
            be better than{" "}
            <span className="today-highlight">
              today
            </span>
          </>
        }
        description="We are a team of strategists, designers communicators, researchers. Together, we believe that progress only happens when you refuse to play things safe."
        image={betterTodayImg}
        imageShape={<div className="red-square" />}
      />

      {/* Row 2 */}
      <FeatureCard
        reverse
        contentClass="progress-content"
        underlineClass="progress-underline"
        title={
          <>
            <span className="today-highlight">
              See
            </span>{" "}
            how we can
            <br />
            help you progress
          </>
        }
        description="We add a layer of fearless insights and action that allows change makers to accelerate their progress in areas such as brand, design, digital, comms and social research."
        image={progressImg}
        imageShape={
          <>
            <div className="triangle-top"></div>
            <div className="triangle-bottom"></div>
          </>
        }
      />

    </section>
  );
};

export default BetterToday;