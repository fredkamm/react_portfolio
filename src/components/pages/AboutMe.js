import React from 'react';
import ProPic from '../../img/profilepicture.png'
import '../../styles/about.css'

export default function About() {
  return (
    <div className='about'>
      <h1>About Me</h1>
      <img className='profilePic' src={ProPic} alt="profile_picture"/>
      <h2>Hi my name is Fred Kamm</h2>
      <p>
        I am a certifed Full-Stack Web Developer located in Bucks County, PA. I have a serious passion in creating front end applications for ui effects, animations, and creating dynamic user experience. My priorities consist of creating applications with fast load times with lag free interactions. My layouts are mobile responive with an easy to use UX/UI.
      </p>
      <h2>I love making web pages come to life </h2>
    </div>
  );
}
