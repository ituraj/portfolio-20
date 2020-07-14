import React, { Component } from "react";
import Icon from "../../assets/icons";
import colors from "../../styles/variables.scss";
import data from "../../data/en.json";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overlay: false,
    };
    this.handleOverlay = this.handleOverlay.bind(this);
  }

  handleOverlay() {
    this.setState({
      overlay: !this.state.overlay,
    });
    document.body.classList.add("overflow-hidden");
  }
  render() {
    return (
      <>
        <nav className="nav-small">
          <span>{data.nav.name}</span>
          {this.state.overlay === true ? (
            <button className="close-menu" onClick={this.handleOverlay}>
              <Icon
                name="UnderscoreSm"
                fill={colors.secondary}
                className="nav-bar"
              />
              <Icon
                name="UnderscoreSm"
                fill={colors.secondary}
                className="nav-bar"
              />
            </button>
          ) : (
            <button className="burger-menu" onClick={this.handleOverlay}>
              <Icon
                name="UnderscoreSm"
                fill={colors.secondary}
                className="nav-bar"
              />
              <Icon
                name="UnderscoreSm"
                fill={colors.secondary}
                className="nav-bar"
              />
              <Icon
                name="UnderscoreSm"
                fill={colors.secondary}
                className="nav-bar"
              />
            </button>
          )}
          <div
            id="overlay"
            className={this.state.overlay === false ? "hidden" : "visible"}
          >
            <ul className="nav-items">
              <li>
                <a href="#home" onClick={this.handleOverlay}>
                  {data.nav.home}
                </a>
              </li>
              <li>
                <a href="#about" onClick={this.handleOverlay}>
                  {data.nav.about}
                </a>
              </li>
              <li>
                <a href="#skills" onClick={this.handleOverlay}>
                  {data.nav.skills}
                </a>
              </li>
              <li>
                <a href="#projects" onClick={this.handleOverlay}>
                  {data.nav.projects}
                </a>
              </li>
              <li>
                <a href="#contact" onClick={this.handleOverlay}>
                  {data.nav.contact}
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <nav className="nav-large">
          <ul className="nav-items">
            <li>
              <a href="#home">{data.nav.home}</a>
            </li>
            <li>
              <a href="#about">{data.nav.about}</a>
            </li>
            <li>
              <a href="#skills">{data.nav.skills}</a>
            </li>
            <li>
              <a href="#projects">{data.nav.projects}</a>
            </li>
            <li>
              <a href="#contact">{data.nav.contact}</a>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default Nav;
