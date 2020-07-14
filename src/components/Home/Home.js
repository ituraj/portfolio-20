import React from "react";
import Icon from "../../assets/icons";
import { colors } from "../../styles/colors";
import data from "../../data/en.json";
import Img from "gatsby-image";

const Home = ({ imgSrc }) => {
  return (
    <section className="section home" id="home">
      <article className="portfolio-article">
        <h1>{data.home.title}</h1>
        <Icon name="UnderscoreLg" fill={colors.secondary} />
        <p>{data.home.description}</p>
      </article>
      <figure style={{ width: "100%" }} className="portfolio-figure">
        <Img fluid={imgSrc} />
      </figure>
    </section>
  );
};

export default Home;
