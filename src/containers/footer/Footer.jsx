import React from 'react';
import './footer.css';

import logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='pg11__footer section__padding'>
      <div className='pg11_footer-heading'>
        <h1 className='gradient__text'>  Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h1>
      </div>  
      <div className='pg11_footer-btn'>
          <p>Why do we use it</p>
      </div>
      <div className='pg11_footer-links'>
        <div className='pg11_footer-links_logo'>
          <img src={logo} alt="logo"/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className='pg11_footer-links_div'>
            <h4>Links</h4>
            <p>About</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
        </div>
        <div className='pg11_footer-links_div'>
            <h4>Company</h4>
            <p>Terms & Conditions</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
        </div>
        <div className='pg11_footer-links_div'>
            <h4>Get in touch</h4>
            <p>Adress</p>
            <p>Map</p>
            <p>012345678</p>
            <p>info@samplemail.com</p> 
        </div>
      </div>

      <div className='pg11_footer-copyright'>
          <p>© 2022 PG11. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer