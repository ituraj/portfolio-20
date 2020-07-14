import React from "react";
import Icon from "../../assets/icons";
import { colors } from "../../styles/colors";

const Skill = (props) => {
  return (
    <article className="skill">
      <Icon name="UnderscoreSm" fill={colors.tertiary} />
      <p>{props.skill}</p>
    </article>
  );
};

export default Skill;
