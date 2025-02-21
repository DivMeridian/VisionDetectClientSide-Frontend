import React from 'react';
import Navbar from '../Component/Navbar';
import ZoomSection from "../Component/ZoomSection"
import Aboutus from '../Component/Aboutus';
import Solutions from '../Component/Solutions';
import ProductVideo from "../Component/ProductVideo";
import WhyVisionDetect from '../Component/WhyVisionDetect';
import Brief from '../Component/Brief';
import Footer from '../Component/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <ZoomSection/>
      <Aboutus/>
      <Solutions/>
      <ProductVideo/>
      <WhyVisionDetect/>
      <Brief/>
      <Footer/>
    </>
  );
};

export default Home;
