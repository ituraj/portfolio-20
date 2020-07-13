import React from "react";
import aboutImage from "../../assets/images/about.png";
import Icon from "../../assets/icons";
import colors from "../../styles/variables.scss";

const About = () => {
  return (
    <section className="section" id="about">
      <figure className="portfolio-figure">
        <img src={aboutImage} alt="alt" />
      </figure>
      <article className="portfolio-article">
        <h2>About</h2>
        <Icon name="UnderscoreLg" fill={colors.secondary} />
        <p>
          My name is Izabela Turaj and I would like to become front end
          developer in the future. Currently looking for an opportunity to join
          a team of developers and gain more practical skills.
        </p>
      </article>
    </section>
  );
};

export default About;
