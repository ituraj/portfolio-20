import React from "react";
import Skill from "../Skill/Skill";
import Icon from "../../assets/icons";
import { colors } from "../../styles/colors";
import Img from "gatsby-image";
import data from "../../data/en.json";

const Projects = ({
  gatsbyProjectImage,
  fullstackProjectImage,
  angularProjectImage,
  reactProjectImage,
}) => {
  const { projects } = data;
  return (
    <section className="section" id="projects">
      <div className="portfolio-project">
        <figure style={{ width: "100%" }} className="portfolio-figure">
          <Img fluid={gatsbyProjectImage} />
        </figure>
        <article className="portfolio-article">
          <h2>{projects.gatsbyProject.type}</h2>
          <Icon name="UnderscoreLg" fill={colors.secondary} />
          <p>{projects.gatsbyProject.description}</p>
          <section className="links">
            <a
              href={projects.gatsbyProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link"
            >
              {data.projects.live}
            </a>
            <a
              href={projects.gatsbyProject.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link"
            >
              {data.projects.docs}
            </a>
          </section>
          <Skill skill={projects.gatsbyProject.skillOne} />
          <Skill skill={projects.gatsbyProject.skillTwo} />
        </article>
      </div>
      <div className="portfolio-project reversed">
        <article className="portfolio-article">
          <h2>{projects.fullstackProject.type}</h2>
          <Icon name="UnderscoreLg" fill={colors.secondary} />
          <p>{projects.fullstackProject.description}</p>
          <section className="links">
            <a
              href={projects.fullstackProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link"
            >
              {data.projects.live}
            </a>
            <a
              href={projects.fullstackProject.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link"
            >
              {data.projects.docs}
            </a>
          </section>
          <Skill skill={projects.fullstackProject.skillOne} />
          <Skill skill={projects.fullstackProject.skillTwo} />
        </article>
        <figure style={{ width: "100%" }} className="portfolio-figure">
          <Img fluid={fullstackProjectImage} />
        </figure>
      </div>
      <div className="portfolio-project">
        <figure style={{ width: "100%" }} className="portfolio-figure">
          <Img fluid={angularProjectImage} />
        </figure>
        <article className="portfolio-article">
          <h2>{projects.angularProject.type}</h2>
          <Icon name="UnderscoreLg" fill={colors.secondary} />
          <p>{projects.angularProject.description}</p>
          <section className="links">
            <a
              href={projects.angularProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link"
            >
              {data.projects.live}
            </a>
            <a
              href={projects.angularProject.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link"
            >
              {data.projects.docs}
            </a>
          </section>
          <Skill skill={projects.angularProject.skillOne} />
          <Skill skill={projects.angularProject.skillTwo} />
        </article>
      </div>
      <div className="portfolio-project reversed">
        <article className="portfolio-article">
          <h2>{projects.reactProject.type}</h2>
          <Icon name="UnderscoreLg" fill={colors.secondary} />
          <p>{projects.reactProject.description}</p>
          <section className="links">
            <a
              href={projects.reactProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link"
            >
              {data.projects.live}
            </a>
            <a
              href={projects.reactProject.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link"
            >
              {data.projects.docs}
            </a>
          </section>
          <Skill skill={projects.reactProject.skillOne} />
          <Skill skill={projects.reactProject.skillTwo} />
        </article>
        <figure style={{ width: "100%" }} className="portfolio-figure">
          <Img fluid={reactProjectImage} />
        </figure>
      </div>
    </section>
  );
};

export default Projects;
