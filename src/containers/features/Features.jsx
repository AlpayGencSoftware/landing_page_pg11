import React from 'react';
import './features.css';
import Feature from '../../components/feature/Feature';

const featuresData=[
  {
    title:'Where can I get some?',
    text:'There are many variations of passages of Lorem Ipsum available',
  },
  {
    title:'Where can I get some?',
    text:'There are many variations of passages of Lorem Ipsum available',
  },
  {
    title:'Where can I get some?',
    text:'There are many variations of passages of Lorem Ipsum available',
  },
  {
    title:'Where can I get some?',
    text:'There are many variations of passages of Lorem Ipsum available',
  },
];

const Features=() => {
  return (
    <div className="pg11__features section__padding" id="features">
    <div className="pg11__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="pg11__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
  )
}

export default Features;