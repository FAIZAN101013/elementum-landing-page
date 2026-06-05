import "./Testimonials.css";

import underline from "../../assets/shapes/underline.svg";

import SectionTitle from "../SectionTitle/SectionTitle";

import {
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  person5,
  person8,
} from "../../assets/images";

const people = [
  { image: p1, className: "p1" },
  { image: p2, className: "p2" },
  { image: p3, className: "p3" },
  { image: p4, className: "p4" },
  { image: p5, className: "p5" },
  { image: p6, className: "p6" },
  { image: person5, className: "p7" },
  { image: person8, className: "p8" },
];

const Testimonials = () => {
  return (
    <section className="testimonials">

      <SectionTitle
        as="h2"
        wrapperClassName="testimonials-heading"
        underline={underline}
        underlineClass="testimonials-underline"
        className="testimonials-title"
      >
        <span className="testimonials-highlight">
          What
        </span>{" "}
        our customer
        <br />
        says About Us
      </SectionTitle>

      {people.map((person, index) => (
        <img
          key={index}
          src={person.image}
          alt=""
          className={`testimonial-person ${person.className}`}
        />
      ))}

      <div className="testimonial-card">

        <span className="quote-mark quote-start">“</span>

        <p className="testimonial-text">
          Elementum delivered the site within the timeline
          as they requested. In the end, the client found a
          50% increase in traffic within days since its
          launch. They also had an impressive ability to
          use technologies that the company hasn't used,
          which have also proved to be easy to use and
          reliable.
        </p>

        <span className="quote-mark quote-end">”</span>

      </div>

    </section>
  );
};

export default Testimonials;