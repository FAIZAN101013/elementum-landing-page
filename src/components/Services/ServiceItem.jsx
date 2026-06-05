import arrowSvg from "../../assets/icons/ArrowRight.svg";

const ServiceItem = ({
  smallText,
  title,
  image,
}) => {
  return (
    <div className="service-row">

      <div className="service-small">
        {smallText}
      </div>

      <div className="service-title-wrapper">

        <div className="service-title">
          {title}
        </div>

        {image && (
          <img
            src={image}
            alt=""
            className="service-circle"
          />
        )}

      </div>

      <div className="service-arrow">
        <img
          src={arrowSvg}
          alt=""
          className="service-arrow-icon"
        />
      </div>

    </div>
  );
};

export default ServiceItem;