import React, { useEffect, useRef, useState } from "react";
import "../Style/ProductVideo.css";

const ProductVideo = () => {
  const videoRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  const checkInView = () => {
    if (videoRef.current) {
      const rect = videoRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
        setIsInView(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkInView);
    checkInView(); // Initial check in case already in view

    return () => {
      window.removeEventListener("scroll", checkInView);
    };
  }, []);

  return (
    <div className="product-video">
      <div
        className={`video-section ${isInView ? "animate" : ""}`}
        ref={videoRef}
      >
        <div className={`video-container ${isInView ? "slide-up" : ""}`}>
          <iframe
            src="https://www.youtube.com/embed/rXjNB5YMCRw?si=mWKElBpsZpCLcfbB"
            title="Product Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/rXjNB5YMCRw?si=mWKElBpsZpCLcfbB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
        </div>
        <h2 className={`video-bottom-heading ${isInView ? "slide-up" : ""}`}>
          Watch our demo video on YouTube.
        </h2>
      </div>
    </div>
  );
};

export default ProductVideo;
