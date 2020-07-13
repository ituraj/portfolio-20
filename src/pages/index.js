import React from "react";

import Home from "../components/Home/Home";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO />
    <Home />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </Layout>
);

export default IndexPage;
