import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef" />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word" />
      <h1 className='headtext__cormorant'>What we belive in</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'>
            Welcome to Zest, the experience where I have the pleasure to be a chef.
          </p>
        </div>
        <p className='p__opensans'>
          At Zest, we aim to offer you a diverse and delicious menu that showcases the beauty and variety of plant-based food. We also want to provide you with a colorful and lively dining environment, where you can enjoy a friendly and professional service.
        </p>
      </div>

      <div className='app__chef-sign'>
        <p>Kevin Lou</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt="signature" />
      </div>

    </div>
  </div>
);

export default Chef;
