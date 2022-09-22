import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// import AnimeList from '../../img/AnimeList.png'
import AnimeBlog from '../../img/AnimeBlog.png'
import WeatherDash from '../../img/Weather.png'
import NoteTaker from '../../img/NoteTaker.png'
import Password from '../../img/PasswordGen.png'
import Scheduler from '../../img/scheduler.png'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/portfolio.css'

export default function Home() {

  const cardInfo = [
    {
      image: '../../img/AnimeList.png' ,
      title: 'Anime List',
      text: 'HTML | Bulma | JS | APIs',
      link: 'https://fredkamm.github.io/Anime-List/'
    },
    {
      image: { AnimeBlog },
      title: 'Anime Blog',
      text: 'Bulma | mySQL ',
      link: 'https://whispering-wildwood-37950.herokuapp.com/'
    },
    {
      image: { WeatherDash },
      title: 'Weather Dashboard',
      text: 'HTML | CSS | JS | APIs',
      link: 'https://fredkamm.github.io/weather-dashboard/'
    },
    {
      image: { NoteTaker },
      title: 'Note Taker',
      text: 'Test',
      link: 'https://limitless-beyond-83497.herokuapp.com/'
    },
    {
      image: { Password },
      title: 'Password Generator',
      text: 'HTML | CSS | JS',
      link: 'https://fredkamm.github.io/password-generator/'
    },
    {
      image: { Scheduler },
      title: 'Work Day Scheduler',
      text: 'Test',
      link: 'https://fredkammhttps://fredkamm.github.io/work-scheduler/.github.io/Anime-List/'
    }
  ];

  const renderCard = (card, index) => {
    return (
      <div className='box'>
        <Card style={{ width: '18rem' }} key={index} className='box'>
          <Card.Img variant="top" src={require('../../img/AnimeList.png')} />
          <Card.Body className='cardBody'>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>
              Tools used: {card.text}
            </Card.Text>
            <a href={card.link}>
              <Button variant="primary">View project</Button>
            </a>
          </Card.Body>
        </Card>
      </div>
    );
  }

  return <div className='grid'>
    {cardInfo.map(renderCard)}
  </div>
}
