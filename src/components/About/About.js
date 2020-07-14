import React from "react";
import Icon from "../../assets/icons";
import data from "../../data/en.json";
import Img from "gatsby-image";
import { colors } from "../../styles/colors";

const About = ({ imgSrc }) => {
  return (
    <section className="section about" id="about">
      <figure style={{ width: "100%" }} className="portfolio-figure">
        <Img fluid={imgSrc} />
      </figure>
      <article className="portfolio-article">
        <h2>{data.about.title}</h2>
        <Icon name="UnderscoreLg" fill={colors.secondary} />
        <p>{data.about.description}</p>
      </article>
    </section>
  );
};

export default About;
