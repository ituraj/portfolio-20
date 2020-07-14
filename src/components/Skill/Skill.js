import React from "react";
import Icon from "../../assets/icons";
import colors from "../../styles/variables.scss";

const Skill = (props) => {
  return (
    <article className="skill">
      <Icon name="UnderscoreSm" fill={colors.tertiary} />
      <p>{props.skill}</p>
    </article>
  );
};

export default Skill;
