import React from 'react';
import { Feature } from '../../components';
import './whatpg11.css';

const WhatPG11 = () => {
  return (
    <div className='pg11__whatpg11 section__margin' id="whatpg11">
        <div className='pg11__whatpg11-feature'>
        <Feature title="What is Lorem Ipsum?" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
        </div>
        <div className='pg11__whatpg11-heading'>
            <h1 className='gradient__text'>Where does it come from?</h1>
            <p>Contrary to popular belief</p>
        </div>
        <div className='pg11__whatpg11-container'>
        <Feature title="What is Lorem Ipsum?" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
        <Feature title="What is Lorem Ipsum?" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
        <Feature title="What is Lorem Ipsum?" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
        <Feature title="What is Lorem Ipsum?" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
        </div>

    </div>
  )
}

export default WhatPG11