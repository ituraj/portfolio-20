import React from "react";
import Skill from "../Skill/Skill";

import data from "../../data/en.json";
const Skills = () => {
  return (
    <section className="skills" id="skills">
      {data.skills.map((skill) => (
        <Skill skill={skill} />
      ))}
    </section>
  );
};

export default Skills;
