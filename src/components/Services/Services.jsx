import "./Services.css";

import underline from "../../assets/shapes/underline.svg";
import waveLine from "../../assets/shapes/Vector 2517.svg";
import circleImage from "../../assets/service-circle.png";

import ServiceItem from "./ServiceItem";

const services = [
  {
    smallText: (
      <>
        Office of multiple
        <br />
        interest content
      </>
    ),
    title: "Collaborative & partnership",
  },
  {
    smallText: (
      <>
        The hanger US Air force
        <br />
        digital experimental
      </>
    ),
    title: "We talk about our weight",
  },
  {
    smallText: (
      <>
        Delta faucet content,
        <br />
        social, digital
      </>
    ),
    title: "Piloting digital confidence",
    image: circleImage,
  },
];

const Services = () => {
  return (
    <section className="services">

      <img
        src={waveLine}
        alt=""
        className="services-wave"
      />

      <div className="services-heading">

        <img
          src={underline}
          alt=""
          className="services-underline"
        />

        <h2>
          What we{" "}
          <span className="services-highlight">
            can
          </span>
          <br />
          offer you!
        </h2>

      </div>

      <div className="services-list">

        {services.map((service, index) => (
          <ServiceItem
            key={index}
            {...service}
          />
        ))}

      </div>

    </section>
  );
};

export default Services;