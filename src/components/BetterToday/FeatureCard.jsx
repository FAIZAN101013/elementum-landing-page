import underline from "../../assets/shapes/underline.svg";
import ArrowReadmore from "../../assets/icons/ArrowReadmore.svg";

const FeatureCard = ({
  title,
  description,
  image,
  reverse = false,
  underlineClass = "",
  imageShape,
  contentClass = "",
}) => {
  return (
    <div className={`feature-row ${reverse ? "second-row" : ""}`}>
      {!reverse && (
        <div className={`feature-content ${contentClass}`}>
          <img
            src={underline}
            alt=""
            className={`better-title-underline ${underlineClass}`}
          />

          <h2 className="feature-title">
            {title}
          </h2>

          <p className="feature-description">
            {description}
          </p>

          <a href="/" className="read-more">
  <span>Read more</span>

  <img
    src={ArrowReadmore}
    alt=""
    className="read-more-arrow"
  />
</a>
        </div>
      )}

      <div className="feature-image-wrapper">
        {imageShape}

        <img
          src={image}
          alt=""
          className="feature-image"
        />
      </div>

      {reverse && (
        <div className={`feature-content ${contentClass}`}>
          <img
            src={underline}
            alt=""
            className={`better-title-underline ${underlineClass}`}
          />

          <h2 className="feature-title">
            {title}
          </h2>

          <p className="feature-description">
            {description}
          </p>

          <a href="/" className="read-more">
  <span>Read more</span>

  <img
    src={ArrowReadmore}
    alt=""
    className="read-more-arrow"
  />
</a>
        </div>
      )}
    </div>
  );
};

export default FeatureCard;