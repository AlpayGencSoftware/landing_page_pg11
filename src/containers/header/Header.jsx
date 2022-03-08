import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className='pg11__header section__padding' id="home">
        <div className='pg11__header-content'>
              <h1 className='gradient__text'>
                 Lorem Ipsum is simply dummy.
              </h1> 
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <div className='pg11__header-content__input'>
                  <input type="email" placeholder="Your Email Address"></input>
                  <button type='button'>Get Saved</button> 
              </div>
              <div className='pg11__header-content__people'>
                <img src={people} alt="people"/>
                <p>Lorem Ipsum is simply dummy text.</p>    
              </div>
              
          </div>
          <div className='pg11__header-image'>
               <img src={ai} />
           </div>  
    </div>
  )
}

export default Header