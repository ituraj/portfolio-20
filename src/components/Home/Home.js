import React from "react";
import aboutImage from "../../assets/images/about.png";
import Icon from "../../assets/icons";
import colors from "../../styles/variables.scss";

const About = () => {
  return (
    <section className="section" id="home">
      <article className="portfolio-article">
        <h1>Izabela Turaj</h1>
        <Icon name="UnderscoreLg" fill={colors.secondary} />
        <p>
          Frontend developer, minimalistic design enthusiast and hopeless
          wanderer.
        </p>
      </article>
      <figure className="portfolio-figure">
        <img src={aboutImage} alt="alt" />
      </figure>
    </section>
  );
};

export default About;
