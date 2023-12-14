import React from 'react';
import { images } from '../../constants'

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="zest letter" />
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img' />
        <p className='p__opensans'>At Zest, we use fresh and flavorful ingredients to create dishes that are full of zest and spice, inspired by different cultures and traditions. Our chef and team are passionate about vegan cooking and innovation, and they constantly strive to surprise and delight our guests with their creations. Our restaurant has a vibrant and colorful decor, and a lively and energetic atmosphere.</p>
        <button type='button' className='custom__button'>Know more</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt='about_knife' />
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img' />
        <p className='p__opensans'>Zest is a vegan fine dining restaurant that offers diverse and delicious plant-based dishes inspired by different cultures. It has a colorful and lively dining environment and a friendly and professional service. Zest was founded in 2023 by a group of vegan enthusiasts and has won several awards for its quality and creativity. Zest celebrates the taste of life.</p>
        <button type='button' className='custom__button'>Know more</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
