import React from 'react';
import image from '../../img/image-1.png'
import Figure from 'react-bootstrap/Figure';

export default function Home() {
  return (
    <Figure>
    <Figure.Image
      width={400}
      height={100}
      alt="171x180"
      src={image}
    />
    <Figure.Caption>
      Nulla vitae elit libero, a pharetra augue mollis interdum.
    </Figure.Caption>
  </Figure>
  );
}
