import React from 'react'
import { Footer, NavBar } from '../components';
import ImageGallery from '../components/ImageGallery';
import Workheader from '../components/Workheader';


const Work = () => (
  <section className='bg-graafika bg-cover bg-no-repeat'>
    <div className='mt-36'>
      <NavBar />
      <Workheader />
      <ImageGallery />
      <Footer />
    </div>
  </section>
);

export default Work