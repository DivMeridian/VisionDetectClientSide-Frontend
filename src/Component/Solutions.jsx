import React, { useState, useEffect, useRef } from "react";
import '../Style/Solutions.css'; // Importing the CSS file for styling
import 'animate.css'; /* Make sure this is included if you are using animate.css */
import Popup from './Popup.jsx'; // Import the Popup component

 
const Solutions = () => {
  let hospitalmask ="https://visiondetect.blob.core.windows.net/visiondetectclientsidedata/Videos/hospitalmask.mp4";
  let anprdetection= "https://visiondetect.blob.core.windows.net/visiondetectclientsidedata/Videos/anprdetection2.mp4";
  let facereg= "https://visiondetect.blob.core.windows.net/visiondetectclientsidedata/Videos/facereg2.mp4"
  const [popupContent, setPopupContent] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isAnimationCompleted, setIsAnimationCompleted] = useState(false);
    const [isPopupVisible, setIsPopupVisible] = useState(false);
      
      
          const togglePopup = () => {
              setIsPopupVisible((prev) => !prev);
          };
      
          const FaceRegistrationClickFunc = () => {
              navigate("/face-registrationTrial");
          };
  
  const sectionRefs = useRef([]);
  const boxRefs = useRef([]);
 
  const handleClick = (content) => {
    setPopupContent(content);
    setIsPopupOpen(true); // Show the popup and hide the solution section
  };
 
  const handleClosePopup = () => {
    setPopupContent(null);
    setIsPopupOpen(false); // Hide the popup and show the solution section
  };
 
  // Observer logic for triggering animation when the section comes into view
  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    const options = {
      threshold: 0.5, // Trigger when 50% of the section is visible
    };
 
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__fadeInUp'); // Trigger the animation class
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    }, options);
 
    sections.forEach((section) => {
      observer.observe(section);
    });
 
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
 
  return (
    <section className="solution-section">
      {/* Only show the solution section when the popup is closed */}
      {!isPopupOpen && (
        <>
          {/* Section 1 */}
          <div
            ref={(el) => (sectionRefs.current[0] = el)}
            className="section"
          >
            <h2 className="section-heading">Solution</h2>
 
            <div className="section-boxes">
              {/* Box 1 */}
              <div
                ref={(el) => (boxRefs.current[0] = el)}
                className={`box ${isAnimationCompleted[0] ? "static-visible" : "visible"}`}
                // onClick={() =>
                //   handleClick({
                //     heading: "Face Verification & Recognition",
                //     text: "Face-based registration and verification is a cutting-edge system that uses facial recognition technology to authenticate individuals securely and efficiently. It captures and stores a person’s facial data as a unique identifier, enabling quick and accurate verification during critical processes.",
                //     video: facereg,
                //   })
                // }
              >
                <div className="video-box">
                  <video src={facereg} autoPlay loop muted></video>
                </div>
                <h3 className="video-heading">Face Verification & Recognition</h3>
                <p className="bio-text">Face-based registration and verification is a cutting-edge system that uses facial recognition technology to authenticate individuals securely and efficiently. It captures and stores a person’s facial data as a unique identifier, enabling quick and accurate verification during critical processes.</p>
                <button className="try-now-btn heartbeat" id="try-btn" onClick={togglePopup}>Try Now</button>
              </div>
            </div>
          </div>
 
          {/* Section 2 */}
          <div
            ref={(el) => (sectionRefs.current[1] = el)}
            className="section"
          >
            <div className="section-boxes">
              {/* Box 2 */}
              <div
                ref={(el) => (boxRefs.current[1] = el)}
                className={`box ${isAnimationCompleted[1] ? "static-visible" : "visible"}`}
                // onClick={() =>
                //   handleClick({
                //     heading: "Anomaly Detection",
                //     text: "Anomaly detection refers to the process of identifying unusual patterns, behaviors, or objects that deviate from the norm within a dataset, environment, or system. Leveraging advanced machine learning and AI techniques, this technology plays a critical role in ensuring safety, security, and operational efficiency <br/> across various domains.",
                //     video: anomalydetection,
                //   })
                // }
              >
                <div className="video-box">
                  <video src={hospitalmask} autoPlay loop muted></video>
                </div>
                <h3 className="video-heading">Anomaly Detection</h3>
                <p className="bio-text">Anomaly detection refers to the process of identifying unusual patterns, behaviors, or objects that deviate from the norm within a dataset, environment, or system. Leveraging advanced machine learning and AI techniques, this technology plays a critical role in ensuring safety, security, and operational efficiency across various domains.</p>
                <button className="try-now-btn heartbeat " onClick={togglePopup}>Try Now</button>
              </div>
 
              {/* Box 3 */}
              <div
                ref={(el) => (boxRefs.current[2] = el)}
                className={`box ${isAnimationCompleted[2] ? "static-visible" : "visible"}`}
                // onClick={() =>
                //   handleClick({
                //     heading: "Automatic Number Plate Recognition",
                //     text: "Automated Number Plate Recognition (ANPR) technology is transforming how organizations manage vehicle access and security. By leveraging advanced optical character recognition (OCR) and AI-powered algorithms, ANPR systems capture, analyze, and authenticate vehicle license plates in real time, providing a seamless and secure entry experience.",
                //     video: anprdetection,
                //   })
                // }
              >
                <div className="video-box">
                  <video src={anprdetection} autoPlay loop muted></video>
                </div>
                <h3 className="video-heading">Automatic Number Plate Recognition</h3>
                <p className="bio-text">Automated Number Plate Recognition (ANPR) technology is transforming how organizations manage vehicle access and security. By leveraging advanced optical character recognition (OCR) and AI-powered algorithms, ANPR systems capture, analyze, and authenticate vehicle license plates in real time, providing a seamless and secure entry experience.</p>
                <button className="try-now-btn heartbeat" onClick={togglePopup}>Try Now</button>
              </div>
            </div>
          </div>
        </>
      )}
 
      {/* Popup-like Content */}
      {/* {isPopupOpen && popupContent && (
        <div className={`popup-section ${isPopupOpen ? 'popup-open' : ''}`}>
          <h2 className="section-heading">Solution</h2>
          <div className="popup-content">
            <div className="popup-video">
              <video src={popupContent.video} controls autoPlay loop muted></video>
            </div>
            <div className="popup-text">
              <div className="text-columns">
                <h3 className="popup-heading">{popupContent.heading}</h3>
                <p className="popup-bio">{popupContent.text}</p>
              </div>
              <button className="popup-try-btn" onClick={togglePopup}>Try Now</button>
            </div>
          </div>
          <button className="popup-close-btn" onClick={handleClosePopup}>
            ×
          </button>
        </div>
      )} */}
       {isPopupVisible && (
                <Popup
                    togglePopup={togglePopup}
                    FaceRegistrationClickFunc={FaceRegistrationClickFunc}
                />
            )}
    </section>
  );
};
 
export default Solutions;
 
 
 