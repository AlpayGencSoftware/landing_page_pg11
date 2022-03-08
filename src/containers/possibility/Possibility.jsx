import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='pg11__possibility section__padding' id="possibility">
        <div className='pg11__possibility-image'>
            <img src={possibilityImage}  alt="possibility"/>
        </div>
        <div className='pg11__possibility-content'>
            <h4>Where can I get some?</h4>
            <h1 className='gradient__text'>  There are many variations of passages of Lorem Ipsum available </h1>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            <h4>Where can I get some?</h4>
          </div>
   </div>
  )
}

export default Possibility