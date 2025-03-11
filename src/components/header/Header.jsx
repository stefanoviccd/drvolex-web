import React from "react";
import { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
//import { Carousel} from 'react-responsive-carousel';
import Carousel from "react-responsive-carousel/lib/js/components/Carousel/index";

function Header() {
  let [transition, setTransition] = useState("width-carousel");

  return (
    <div className="company_brand">
      <Carousel
        showIndicators={false}
        stopOnHover={false}
        showArrows={true}
        showThumbs={false}
        infiniteLoop
        useKeyboardArrows
        autoPlay
        interval={4000}
        transitionTime={3000}
      >
        <div>
          <img
            className="header-img"
            src="https://res.cloudinary.com/drvolex/image/upload/v1741632485/photo_sajt_crop_aoa9wp.jpg"
          />
          <div className="header-img-text">
            {" "}
            <b className="name">DRVOLEX</b>
            <p className="subtitle">Gradimo poverenje.</p>
          </div>
        </div>

        <div className="">
          <img
            className="header-img"
            src="https://res.cloudinary.com/drvolex/image/upload/v1741632486/photo_sajt4_crop_odtytr.jpg"
          />
        </div>

        <div>
          <img
            className="header-img"
            src="https://res.cloudinary.com/drvolex/image/upload/v1741632486/photo_sajt6_crop_a3vrx0.jpg"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Header;
