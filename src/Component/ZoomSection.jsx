import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../Style/ZoomSectionout.css";
import "../Style/Popup.css";
import Verification from "../Assest/Verification.webp";
import anpr from "../Assest/anpr.webp";
import anomaly from "../Assest/anomaly.webp";
import Popup from "./Popup"; // Import the Popup component

const ZoomSection = () => {
  let alldetections="https://visiondetect.blob.core.windows.net/visiondetectclientsidedata/Videos/alldetections.mp4";
  let anprdetection="https://visiondetect.blob.core.windows.net/visiondetectclientsidedata/Videos/anprdetection2.mp4";
  let anomalydetection="https://visiondetect.blob.core.windows.net/visiondetectclientsidedata/Videos/anomalydetection2.mp4";
  const [isZoomOut, setIsZoomOut] = useState(false);
  const [isDemoButtonVisible, setIsDemoButtonVisible] = useState(false);
  const [isDemoButtonAnimating, setIsDemoButtonAnimating] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [videoSrc, setVideoSrc] = useState(alldetections);
  const [isBorderApplied, setIsBorderApplied] = useState(false);
  const sectionRefs = useRef([]);
  const navbarRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = navbarRef.current.offsetHeight;
      const scrollY = window.scrollY;
      if (scrollY > navbarHeight && !isZoomOut) {
        setIsZoomOut(true);
        setTimeout(() => {
          setIsDemoButtonVisible(true);
          setIsDemoButtonAnimating(true);
        }, 2000);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isZoomOut]);

  // Apply border after zoom-out animation completes
  useEffect(() => {
    if (isZoomOut) {
      setTimeout(() => {
        setIsBorderApplied(true);
      }, 500);
    }
  }, [isZoomOut]);

  const togglePopup = () => {
    setIsPopupVisible((prev) => !prev);
  };

  const changeVideo = (newVideoSrc) => {
    setVideoSrc(newVideoSrc);
  };

  return (
    <div>
      {/* Navbar */}
      <div ref={navbarRef}></div>

      {/* First Section */}
      <div
        ref={(el) => (sectionRefs.current[0] = el)}
        className={`whole-section first-section ${isZoomOut ? "zoom-out" : "zoom-in"}`}
      >
        <div className="Video-changer">
          <div className="image-container">
            <img
              src={Verification}
              alt="Face Verification and registration"
              className="image"
              onClick={() => changeVideo(alldetections)}
              style={{ cursor: "pointer" }}
            />
            <button className="video-btn" onClick={() => changeVideo(alldetections)}>
              Face Verification <br /> & Recognition
            </button>
          </div>
          <div className="image-container">
            <img
              src={anomaly}
              alt="Weapon detection"
              className="image"
              onClick={() => changeVideo(anomalydetection)}
              style={{ cursor: "pointer" }}
            />
            <button className="video-btn" onClick={() => changeVideo(anomalydetection)}>
              Anomaly <br /> Detection
            </button>
          </div>
          <div className="image-container">
            <img
              src={anpr}
              alt="ANPR Detection"
              className="image"
              onClick={() => changeVideo(anprdetection)}
              style={{ cursor: "pointer" }}
            />
            <button className="video-btn" onClick={() => changeVideo(anprdetection)}>
              ANPR <br /> Detection
            </button>
          </div>
        </div>
      </div>

      {/* Gradient Button Section */}
      {isZoomOut && (
        <button className="gradient-btn fade-in heartbeat" onClick={togglePopup}>
          Test the <span className="blue-text">accuracy</span> of the solutions{" "}
          <span className="blue-text">live</span> in just a click
        </button>
      )}

      {/* Second Section (Video with Border) */}
      <div
        ref={(el) => (sectionRefs.current[1] = el)}
        className={`whole-section zoom-section ${isZoomOut ? "zoom-out" : "zoom-in"}`}
      >
        <video
          className={`zoom-video ${isBorderApplied ? "bordered-video" : ""}`}
          src={videoSrc}
          autoPlay
          loop
          muted
        />
        {isDemoButtonVisible && (
          <button
            className={`request-demo-btn ${isDemoButtonAnimating ? "fade-in" : ""}`}
            onClick={togglePopup}
          >
            Request a Demo
          </button>
        )}
      </div>

      {/* Third Section */}
      <div
        ref={(el) => (sectionRefs.current[2] = el)}
        className={`whole-section videobottom-heading ${isZoomOut ? "zoom-out" : "zoom-in"}`}
      >
        <h4>
          Put your Cameras to work with our latest{" "}
          <Link to="/technical-corner" style={{ color: "blue", textDecoration: "underline" }}>
            AI technology.
          </Link>
        </h4>
        <button className="videobottom-btn" onClick={togglePopup}> Try Now </button>
      </div>

      {/* Render Popup Code */}
      {isPopupVisible && (
        <Popup
          togglePopup={togglePopup}
        />
      )}
    </div>
  );
};

export default ZoomSection;
