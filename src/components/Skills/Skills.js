import React from "react";
import Skill from "../Skill/Skill";
import Icon from "../../assets/icons";
import { colors } from "../../styles/colors";
import data from "../../data/en.json";

const Skills = () => {
  return (
    <section className="section" id="skills">
      <h2>{data.skills.title}</h2>
      <Icon name="UnderscoreLg" fill={colors.secondary} />
      <div className="skills">
        {data.skills.items.map((skill) => (
          <Skill skill={skill} key={`skill-${skill}`} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
