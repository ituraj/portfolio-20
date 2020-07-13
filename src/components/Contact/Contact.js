import React from "react";
import aboutImage from "../../assets/images/about.png";
import Icon from "../../assets/icons";
import colors from "../../styles/variables.scss";

const Contact = () => {
  return (
    <section className="section" id="contact">
      <figure>
        <img src={aboutImage} alt="alt" />
      </figure>
      <article>
        <h2>Contact</h2>
        <Icon name="UnderscoreLg" fill={colors.secondary} />
        <p>
          Looking for an opportunity to join a team of happy developers and gain
          more practical skills.
        </p>
      </article>
    </section>
  );
};

export default Contact;
