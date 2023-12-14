import React from 'react';
import { images } from '../../constants';

import './Header.css';
import { SubHeading } from '../../components';

const Header = ({ title }) => (
  <div className='app__header app__wrapper app__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title={title} />
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>Zest is a vegan fine dining restaurant that serves dishes with fresh and flavorful ingredients from different cuisines. The restaurant has a vibrant and colorful decor, and a lively and energetic atmosphere. Zest aims to offer a memorable and satisfying dining experience for vegans and non-vegans alike.</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
