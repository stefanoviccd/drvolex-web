import React from 'react';
import {useState, useEffect} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
//import { Carousel} from 'react-responsive-carousel';
import Carousel from "react-responsive-carousel/lib/js/components/Carousel/index";


function Header() {
  let [transition, setTransition ] = useState('width-carousel')


  return <div className="company_brand"><Carousel  showIndicators={false} stopOnHover={false} showArrows={true} showThumbs={false} infiniteLoop  useKeyboardArrows autoPlay interval={4000} transitionTime={3000}>
  <div>
      <img className='header-img'src="../header-images/photo_sajt_crop.jpg"/>
      <div className='header-img-text'> <b className="name">DRVOLEX</b><p className="subtitle">Gradimo poverenje.</p></div>
     
  </div>
  
  <div  className=''>
  <img className='header-img'src="../header-images/photo_sajt4_crop.jpg"/>
  
  </div>
  
  <div>
  <img className='header-img'src="../header-images/photo_sajt6_crop.jpg"/>
  </div>


</Carousel>
</div>;
}

export default Header;
