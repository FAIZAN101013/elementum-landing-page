import "./SectionTitle.css";

const SectionTitle = ({
  children,
  underline,
  underlineClass = "",
  className = "",
  wrapperClassName = "",
  as: Component = "h2",
}) => {
  return (
    <div className={["section-title-wrapper", wrapperClassName].filter(Boolean).join(" ")}>
      {underline && (
        <img
          src={underline}
          alt=""
          className={["section-title-underline", underlineClass].filter(Boolean).join(" ")}
        />
      )}

      <Component className={["section-title", className].filter(Boolean).join(" ")}>
        {children}
      </Component>
    </div>
  );
};

export default SectionTitle;
