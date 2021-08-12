import React from "react";
import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-details">
        <p>Ideen? Anregungen? Lust beizutragen?</p>
        <div className="social-links">
          <a className= 'icon' target="_blank" href="https://github.com/t-mayer">
            <FontAwesomeIcon icon={faGithub} />
          </a>

          <a className= 'icon' target="_blank" href="mailto: mayervalentina92@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    );
  }
}
