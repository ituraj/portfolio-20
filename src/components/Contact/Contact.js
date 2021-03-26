import React from "react";
import Icon from "../../assets/icons";
import { colors } from "../../styles/colors";
import resume from "../../assets/documents/resume.pdf";
import data from "../../data/en.json";
import Img from "gatsby-image";

const Contact = ({ imgSrc }) => {
  return (
    <section className="section contact" id="contact">
      <figure style={{ width: "100%" }} className="portfolio-figure">
        <Img fluid={imgSrc} />
      </figure>
      <article className="portfolio-article">
        <h2>{data.contact.title}</h2>
        <Icon name="UnderscoreLg" fill={colors.secondary} />
        <p>{data.contact.description}</p>
        <section className="links">
          <a
            href="https://github.com/ituraj"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-link"
          >
            {data.contact.github}
          </a>
          <a
            href="https://www.linkedin.com/in/izabela-turaj/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-link"
          >
            {data.contact.linkedin}
          </a>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-link"
          >
            {data.contact.resume}
          </a>
        </section>
      </article>
    </section>
  );
};

export default Contact;

// import React from "react";
// import Img from "gatsby-image";
// import { StaticQuery, graphql } from "gatsby";

// const Contact = () => {
//   return (
//     <StaticQuery
//       query={query}
//       render={(data) => (
//         <>
//           <Img fluid={data.bgImg.childImageSharp.fluid} />
//         </>
//       )}
//     />
//   );
// };

// const query = graphql`
//   query {
//     bgImg: file(relativePath: { eq: "contact.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 1240) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `;

// export default Contact;
