import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div className='Container_Footer'>
     <h2>Designed & Coded by <span>Mohamed sayed</span></h2>
     <div className='Links_Container'>
      <a href="https://github.com/Mohamed1-saYed" target='_blank'><FontAwesomeIcon icon={faGithub} style={{ fontSize: '30px', color: '#eee' }} /></a>
      <a href="https://www.facebook.com/profile.php?id=100071761480205" target='_blank'><FontAwesomeIcon icon={faFacebook} style={{ fontSize: '30px', color: '#eee' }} /></a>
     </div>
    </div>
  )
}
