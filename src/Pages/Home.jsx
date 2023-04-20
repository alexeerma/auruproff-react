import React from 'react'
import { NavBar, Hero, MyCarousel, Solutions, Contact, Footer } from '../components';
import {LogoS1, LogoS2, LogoS3, LogoS4, LogoS5 , LogoS6, LogoS7, LogoS8, LogoS9, LogoS10, LogoS11, LogoS12} from '../assets';

const logos = [LogoS1, LogoS2, LogoS3, LogoS4, LogoS5, LogoS6, LogoS7, LogoS8, LogoS9, LogoS10, LogoS11, LogoS12];

const Home = () => (
  <div>
    <div className='mt-36'>
      <NavBar />
      <h1>Home</h1>
      <Hero />
    </div>
    <div className="container mx-12 py-9">
    <MyCarousel logos={logos} />
    </div>
    <div>
    <Solutions />
    <Contact />
    </div>
    <Footer />
  </div>
);

export default Home;