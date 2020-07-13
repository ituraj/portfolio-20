import React from "react";
import Skill from "../Skill/Skill";
import Icon from "../../assets/icons";
import colors from "../../styles/variables.scss";

import data from "../../data/en.json";

const Projects = () => {
  return (
    <section id="projects">
      {data.projects.map(
        ({ type, description, url, repo, skillOne, skillTwo, img, alt }) => (
          <div className="portfolio-project">
            <figure className="portfolio-figure">
              <img src={img} alt={alt} />
            </figure>
            <article className="portfolio-article">
              <h2>{type}</h2>
              <Icon name="UnderscoreLg" fill={colors.secondary} />
              <p>{description}</p>
              <a href={url}>Live</a>
              <a href={repo}>Github</a>
              <Skill skill={skillOne} />
              <Skill skill={skillTwo} />
            </article>
          </div>
        )
      )}
    </section>
  );
};

export default Projects;
