import React from "react";
import { Link } from "gatsby";
import NavLang from "../NavLang/NavLang";

const Nav = () => {
  return (
    <nav className="portfolio-nav">
      <ul>
        <li>
          <Link to="#about">Home</Link>
        </li>
        <li>
          <Link to="#about">About</Link>
        </li>
        <li>
          <Link to="#skills">Skills</Link>
        </li>
        <li>
          <Link to="#projects">Projects</Link>
        </li>
        <li>
          <Link to="#contact">Contact</Link>
        </li>
      </ul>
      <NavLang />
    </nav>
  );
};

export default Nav;
