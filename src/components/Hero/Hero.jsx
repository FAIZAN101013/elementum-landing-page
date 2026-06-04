import "./Hero.css";

import {
  person1, person2, person3, person4,
  person5, person6, person7, person8,
} from "../../assets/images";

import { ellipse, underline, waveLeft1, waveLeft2 } from "../../assets/shapes";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-stage">

        {/* Decorative left waves */}
        <img src={waveLeft1} alt="" className="shape-left shape-left-red" />
        <img src={waveLeft2} alt="" className="shape-left shape-left-black" />

        {/* Decorative right ellipse */}
        <img src={ellipse} alt="" className="shape-right" />

        {/* SVG underline beneath "thinkers" — positioned absolutely in CSS */}
        <img src={underline} alt="" className="title-underline" />

        {/* Title — absolutely positioned, no wrapper needed */}
        <h1 className="hero-title">
          The <span className="title-word">thinkers</span> and
          <br />
          doers were ch<span className="pink">anging</span>
          <br />
          the <span className="green">status</span> Quo with
        </h1>

        <p className="hero-description">
          We are a team of strategists, designers communicators,
          researchers. Together, we believe that progress only
          happens when you refuse to play things safe.
        </p>

        <div className="people-wrapper">
          <img src={person1} alt="" className="person" />
          <img src={person2} alt="" className="person" />
          <img src={person3} alt="" className="person" />
          <img src={person4} alt="" className="person" />
          <img src={person5} alt="" className="person" />
          <img src={person6} alt="" className="person" />
          <img src={person7} alt="" className="person" />
          <img src={person8} alt="" className="person" />
        </div>

      </div>
    </section>
  );
};

export default Hero;