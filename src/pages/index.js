import React from "react";

import Home from "../components/Home/Home";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO />
      <Home imgSrc={data.homeImg.childImageSharp.fluid} />
      <About imgSrc={data.aboutImg.childImageSharp.fluid} />
      <Skills />
      <Projects
        gatsbyProjectImage={data.gatsbyProjectImg.childImageSharp.fluid}
        fullstackProjectImage={data.fullstackProjectImg.childImageSharp.fluid}
        angularProjectImage={data.angularProjectImg.childImageSharp.fluid}
        reactProjectImage={data.reactProjectImg.childImageSharp.fluid}
      />
      <Contact imgSrc={data.contactImg.childImageSharp.fluid} />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    homeImg: file(relativePath: { eq: "home.png" }) {
      childImageSharp {
        fluid(maxWidth: 350) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    aboutImg: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid(maxWidth: 350) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    gatsbyProjectImg: file(relativePath: { eq: "gatsby-project.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 350) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fullstackProjectImg: file(relativePath: { eq: "fullstack-project.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 350) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    angularProjectImg: file(relativePath: { eq: "angular-project.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 350) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    reactProjectImg: file(relativePath: { eq: "react-project.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 350) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    contactImg: file(relativePath: { eq: "contact.png" }) {
      childImageSharp {
        fluid(maxWidth: 350) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
