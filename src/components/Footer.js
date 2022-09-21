import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
  return (
    <footer>
      <div>
        <FontAwesomeIcon icon="fa-brands fa-github" />
        <p>Github</p>
        <FontAwesomeIcon icon="fa-brands fa-linkedin" />
        <p>LinkedIn</p>
        <p>Resume</p>
      </div>
    </footer>
  );
}