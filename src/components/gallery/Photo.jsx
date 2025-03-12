import React, { useState, useEffect, useRef } from "react";
import { Fancybox } from "@fancyapps/ui";
import '@fancyapps/ui/dist/fancybox.css';
import "./photo.css";
import "./photosPage.css";

const Photo = ({ imageUrl, displayName }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const imgRef = useRef(null);

  const handleImageLoad = (e) => {
    setIsLoaded(true);
  };

  // eslint-disable-next-line no-unused-vars
  function getBluredImageUrl(imgUrl) {
    const cloudinaryBaseUrl = "http://res.cloudinary.com/drvolex/image/upload/";
    const imgPath = imgUrl.replace(cloudinaryBaseUrl, "");
    return `${cloudinaryBaseUrl}e_blur:100,w_300,h_300,c_fill/${imgPath}`;
  }

  useEffect(() => {
    Fancybox.bind('[data-fancybox="gallery"]', {
      Image: {
        preload: 3, // Preload 3 images for smoother transitions
      },
      "start.fancybox": (event, fancybox) => {
        console.log("Fancybox 4: start event fired");
        const current = fancybox.current;

        // Set opacity transition for smooth fade-in
        if (current && current.$image) {
          const img = current?.$image; // The img element
          img.style.transition = "opacity 0.5s ease";
          img.style.opacity = 0;
          // Once the image is loaded, transition to the full-quality image
          img.onload = () => {
            img.style.opacity = 1;
          };
        }
      },
      "done.fancybox": (event, fancybox) => {
        console.log("Fancybox 4: done event fired");
      },
    });

    return () => {
      Fancybox.destroy(); // Clean up Fancybox
    };
  }, []);

  return (
    <div className="item">
      <a data-fancybox="gallery" href={imageUrl}>
      <img
          src={imageUrl}
          alt={displayName}
          className={`gallery-image image-full ${isLoaded ? "visible" : ""}`}
          onLoad={handleImageLoad}
          loading="lazy"
        />
      </a>
    </div>
  );
};

export default Photo;
