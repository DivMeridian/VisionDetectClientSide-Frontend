import React, { useState, useEffect, useRef } from "react";
import "../Style/Brief.css";
import Popup from "./Popup"; // Import the Popup component
import "../Style/Popup.css";

const Brief = () => {
  let briefvd = "https://visiondetect.blob.core.windows.net/visiondetectclientsidedata/Videos/briefvd.mp4"
  const [text, setText] = useState(""); // State for live typing
  const paragraph =
    "“The coming era of artificial intelligence will not be about man versus machine, but rather about how we can work together to build a smarter and safer world.”";
  const [isTyping, setIsTyping] = useState(false); // Start typing effect when in view
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const sectionRefs = {
    firstParagraph: useRef(null),
    videoSection: useRef(null),
    secondParagraph: useRef(null),
    ctaButtons: useRef(null)
  };
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

  const FaceRegistrationClickFunc = () => {
    navigate("/face-registrationTrial");
  };

  // Typing effect logic
  useEffect(() => {
    if (!isTyping) return;

    let index = -1; // Start with -1
    const typingInterval = setInterval(() => {
      index++;
      if (index >= 0 && index < paragraph.length) {
        setText((prev) => prev + paragraph[index]);
      } else if (index >= paragraph.length) {
        clearInterval(typingInterval); // Stop when typing is complete
      }
    }, 50); // Adjust typing speed

    return () => clearInterval(typingInterval);
  }, [isTyping]);

  // Intersection Observer to detect when sections are in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add animation class when section is in view
          entry.target.classList.add("animate-slide-up");
          if (entry.target === sectionRefs.firstParagraph.current) {
            setIsTyping(true); // Start typing only when first paragraph is visible
          }
          observer.unobserve(entry.target); // Stop observing once section is in view
        }
      },
      { threshold: 0.5 }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Intersection Observer for video visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (videoRef.current) {
            videoRef.current.play(); // Play video when in view
          }
          observer.disconnect(); // Only trigger once
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current); // Observe the video element
    }

    return () => observer.disconnect();
  }, []);

  // Stop video at 5 seconds and prevent restarting
  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.currentTime >= 5) {
      videoRef.current.pause();
      videoRef.current.currentTime = 5; // Prevent immediate restart
    }
  };

  // Function to render styled text with blue highlights
  const renderStyledText = () => {
    // Split the paragraph into parts using a regex group
    const parts = text.split(/(man versus machine|work together)/g);
    return parts.map((part, index) => {
      if (part === "man versus machine" || part === "work together") {
        return (
          <span key={index} className="blue-text">
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <>
      <div className="vision-detect-container">
        {/* First Paragraph */}
        <section className="text-section" ref={sectionRefs.firstParagraph}>
          <p>
            VisionDetect.ai transforms traditional surveillance into{" "}
            <span>AI-powered intelligent monitoring</span>. Using advanced
            computer vision, <span id="green-text">deep learning</span>, and edge
            computing, our system enables <span>real-time</span> face
            recognition, anomaly detection, crowd analysis, and automatic number
            plate recognition (ANPR). Designed for{" "}
            <span>security, automation, and operational efficiency</span>,
            VisionDetect.ai minimizes manual intervention by delivering instant
            alerts and precise threat detection, ensuring proactive
            decision-making <span id="green-text">across industries.</span>
          </p>
        </section>

        {/* Video Section */}
        <div className="video-section" ref={sectionRefs.videoSection}>
          <video
            ref={videoRef}
            muted
            loop={false}
            onTimeUpdate={handleTimeUpdate}
            className="video-element"
          >
            <source src={briefvd} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Second Paragraph with Live Typing */}
        <section className="Second-section" ref={sectionRefs.secondParagraph}>
          <p>{renderStyledText()}</p>
          {text === paragraph && (
            <cite>
              – Fei-Fei Li, AI Scientist & Co-Director of Stanford's Human-Centered AI Institute
            </cite>
          )}
        </section>

        {/* Call-to-Action Buttons */}
        <div className="cta-buttons" ref={sectionRefs.ctaButtons}>
          <button className="cta-btn primary" onClick={scrollToSection}>
            Why VisionDetect?
          </button>
          <button className="cta-btn secondary" onClick={togglePopup}>
            Request a demo
          </button>
        </div>
      </div>

      {/* Render Popup Code */}
      {isPopupVisible && (
        <Popup
          togglePopup={togglePopup}
          FaceRegistrationClickFunc={FaceRegistrationClickFunc}
        />
      )}
    </>
  );
};

export default Brief;
