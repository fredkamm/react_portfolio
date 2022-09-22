import React from 'react';
import '../../styles/resume.css'

export default function Blog() {
  return (
    <div>
      <h1>Resume</h1>
      <h4>Click to view my <a href='https://docs.google.com/document/d/1cAlCPvA9sBlhrL2ygxDsZ28cbNDNHaPsCl9CnQm82sM/edit?mode=html'>Resume</a></h4>
      <ul>
        <h3>Education</h3>
        <li>
          <h4>University of Pennsylvania  <span>- Certification - Full-Stack Web Developer</span></h4>
          <p className='dates'>July 22' - October 22'</p>
        </li>
        <li>
          <h4>Bucks County Community College  <span>- Certification - Web Design</span></h4>
          <p className='dates'>July 20' - May 22'</p>
        </li>
        <li>
          <h4>East Stroudsburg University  <span>- B.S. - Business Management</span></h4>
          <p className='dates'>July 20' - May 22'</p>
        </li>
      </ul>
      <ul>
        <h3>Skills</h3>
        <li>HTML/CSS</li>
        <li>Javascript</li>
        <li>Bootstrap</li>
        <li>React</li>
        <li>Web APIs</li>
        <li>React</li>
      </ul>
    </div>
  );
}
