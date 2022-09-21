import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer>
      <div>
        <a href='https://github.com/fredkamm' >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href='https://www.linkedin.com/in/fred-kamm-370070244/' >
        <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href='https://docs.google.com/document/d/1cAlCPvA9sBlhrL2ygxDsZ28cbNDNHaPsCl9CnQm82sM/edit?usp=sharing' >
        <FontAwesomeIcon icon={faStackOverflow} />
        </a>
      </div>
      <div>
        © 2022 Copyright:
        <a href="https://github.com/fredkamm/react_portfolio">
          {" "}
          Fred Kamm
        </a>
      </div>

    </footer>
  );
}