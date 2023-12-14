import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>Firidei 4, Bucharest, Romania</p>
        <p className='p__opensans'>+40766936275</p>
        <p className='p__opensans'>+40766936275</p>
      </div>

      <div className='app__footer-links_logo'>
        <img src={images.logo} alt="logo" />
        <p className='p__opensans'>"Spice it up"</p>
        <img src={images.spoon} alt="spoon" className='spoon_img' style={{ marginTop: 15 }} />
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday - Friday:</p>
        <p className='p__opensans'>17:00 pm - 02:00 am</p>
        <p className='p__opensans'>Saturday - Sunday:</p>
        <p className='p__opensans'>11:00 am - 04:00 am</p>
      </div>
    </div>

    <div className='footer__copyright'>
      <p className='p__opensans'>2023 Zest. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
