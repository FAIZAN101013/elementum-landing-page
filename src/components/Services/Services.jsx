import "./Services.css";

import underline from "../../assets/shapes/underline.svg";
import waveLine from "../../assets/shapes/Vector 2517.svg";
import circleImage from "../../assets/service-circle.png";

import SectionTitle from "../SectionTitle/SectionTitle";
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

      <SectionTitle
        as="h2"
        wrapperClassName="services-heading"
        className="services-title"
        underline={underline}
        underlineClass="services-underline"
      >
        What we{" "}
        <span className="services-highlight">
          can
        </span>
        <br />
        offer you!
      </SectionTitle>

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