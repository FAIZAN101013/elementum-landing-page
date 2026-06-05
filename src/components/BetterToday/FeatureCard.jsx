import underline from "../../assets/shapes/underline.svg";
import ArrowReadmore from "../../assets/icons/ArrowReadmore.svg";

import SectionTitle from "../SectionTitle/SectionTitle";

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
          <SectionTitle
            as="h2"
            underline={underline}
            underlineClass={`better-title-underline ${underlineClass}`.trim()}
            className="feature-title"
          >
            {title}
          </SectionTitle>

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
          <SectionTitle
            as="h2"
            underline={underline}
            underlineClass={`better-title-underline ${underlineClass}`.trim()}
            className="feature-title"
          >
            {title}
          </SectionTitle>

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