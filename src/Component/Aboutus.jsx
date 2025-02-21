import React, { useState, useEffect, useRef } from "react";
import "../Style/Aboutus.css"; // Import the CSS file
import Popup from "./Popup"; // Import the Popup component
import "../Style/Popup.css";

const Aboutus = () => {
  // States for typing animation
  let laptop="https://visiondetect.blob.core.windows.net/visiondetectclientsidedata/Videos/laptop.mp4"
  const [cameraText, setCameraText] = useState("");
  const [remainingText, setRemainingText] = useState("");
  const [cameraDone, setCameraDone] = useState(false); // Indicates that "Cameras" is fully typed

  // Define the two parts of the heading text
  const part1 = "Cameras";
  const part2 = " Smart AI-Powered Guardians";

  const [isInView, setIsInView] = useState(false); // When section is in view
  const [animationClass, setAnimationClass] = useState(""); // Container animation class
  const [isVideoPaused, setIsVideoPaused] = useState(false); // Video pause state
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  // Function to scroll to the section "Why-VisionDetect"
  const scrollToSection = () => {
    const section = document.getElementById("Why-VisionDetect");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const togglePopup = () => {
    setIsPopupVisible((prev) => !prev);
  };

  // Observer to trigger the container animation when it comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setAnimationClass("animate__animated animate__fadeInUp show-content");
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  // Typing animation for the heading text
  useEffect(() => {
    if (isInView) {
      let index1 = 0;
      const typingInterval1 = setInterval(() => {
        setCameraText(part1.slice(0, index1 + 1));
        index1++;
        if (index1 === part1.length) {
          clearInterval(typingInterval1);
          setCameraDone(true);

          setTimeout(() => {
            let index2 = 0;
            const typingInterval2 = setInterval(() => {
              setRemainingText(part2.slice(0, index2 + 1));
              index2++;
              if (index2 === part2.length) {
                clearInterval(typingInterval2);
              }
            }, 100);
          }, 500);
        }
      }, 100);

      return () => clearInterval(typingInterval1);
    }
  }, [isInView]);

  // Observer to start/stop the video based on intersection
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        if (video) {
          if (entry.isIntersecting) {
            if (video.paused) video.play();
          } else {
            if (!video.paused) video.pause();
          }
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current.parentNode);
    }

    return () => {
      if (videoRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  // Pause video at 3 seconds and prevent restarting
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video && video.currentTime >= 3) {
      video.pause();
      video.currentTime = 4;
      setIsVideoPaused(true);
    }
  };

  return (
    <div
      ref={sectionRef}
      className={`aboutus-container ${animationClass} ${isVideoPaused ? "paused-margin" : ""
        }`}
    >
      {/* Section 1: Heading and Description */}
      <div className="aboutus-heading-section">
        <h1 className="aboutus-heading">
          <span
            id="camtext"
            className={`aboutus-typing ${cameraDone ? "animate-strike" : ""}`}
          >
            {cameraText}
          </span>
          <span className="aboutus-typing">{remainingText}</span>
        </h1>
        <p className="aboutus-description">
          Transform ordinary surveillance into intelligent monitoring with AI-powered
          recognition, detection, and automation—enhancing security and efficiency effortlessly.
        </p>
      </div>

      {/* Section 2: Video and Buttons */}
      <div className="aboutus-video-section">
        <video
          ref={videoRef}
          className="aboutus-video"
          src={laptop}
          loop={false}
          muted
          onTimeUpdate={handleTimeUpdate}
        ></video>
        <div className="aboutus-buttons">
          <button className="aboutus-button" onClick={scrollToSection}>
            Why VisionDetect?
          </button>
          <button className="aboutus-button" onClick={togglePopup}>
            Request a demo
          </button>
        </div>
      </div>
      <div
        ref={sectionRef}
        className={`aboutus-container ${animationClass} ${isVideoPaused ? "paused-margin" : ""
          } ${isPopupVisible ? "no-overflow" : ""}`}
      >
        {/* ... content ... */}
        {isPopupVisible && <Popup togglePopup={togglePopup} />}
      </div>
    </div>
  );
};

export default Aboutus;
