import "./Services.css";
import underline from "../../assets/shapes/underline.svg";
import circleImage from "../../assets/service-circle.png";    

const Services = () => {
  return (
    <section className="services">
      <div className="services-heading">
        <img
          src={underline}
          alt=""
          className="services-underline"
        />

        <h2>
          What we <span className="services-highlight">can</span>
          <br />
          offer you!
        </h2>
      </div>

      <div className="services-list">

        <div className="service-row">
          <div className="service-small">
            Office of multiple
            <br />
            interest content
          </div>

          <div className="service-title">
            Collaborative & partnership
          </div>

          <div className="service-arrow">→</div>
        </div>

        <div className="service-row">
          <div className="service-small">
            The hanger US Air force
            <br />
            digital experimental
          </div>

          <div className="service-title">
            We talk about our weight
          </div>

          <div className="service-arrow">→</div>
        </div>

        <div className="service-row">
          <div className="service-small">
            Delta faucet content,
            <br />
            social, digital
          </div>

          <div className="service-title-with-image">
            <div className="service-title">
              Piloting digital confidence
            </div>

            <img
              src={circleImage}
              alt=""
              className="service-circle"
            />
          </div>

          <div className="service-arrow">→</div>
        </div>

      </div>
    </section>
  );
};

export default Services;