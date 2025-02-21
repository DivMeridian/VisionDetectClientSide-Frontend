import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import "../Style/WhyVisionDetect.css";
import Popup from "./Popup"; // Import the Popup component
import Reliable from "../Assest/Reliable.webp";
import Secure from "../Assest/Secure.webp";
import Accurate from "../Assest/Accurate.webp";

const WhyVisionDetect = () => {
  const sectionRef = useRef(null);
  const [countersInView, setCountersInView] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [text, setText] = useState(""); // State for live typing
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const paragraph = "“Why monitor endlessly when AI can do it for you? VisionDetect.ai ensures you to see what matters, exactly when it matters.”";
  const [counters, setCounters] = useState({
    accuracy: 0,
    roi: 0,
    lowerTCO: 0,
    coverage: 0,
    fasterDeployment: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCountersInView(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTyping(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isTyping) return;
  
    let index = 0; // Start from the first character
    const typingAnimation = () => {
      if (index < paragraph.length) {
        // Replace "why", "what", "when" with highlighted versions
        const highlightedText = paragraph
          .slice(0, index + 1) // Take the slice up to the current index
          .replace(/\b(why|what|when)\b/gi, (match) => `<span style="color: blue;">${match}</span>`);
  
        setText(highlightedText); // Update state with the current typing progress
        index++;
      }
    };
  
    const typingInterval = setInterval(typingAnimation, 50); // Adjust typing speed here
    // Cleanup the interval when typing is complete or when component unmounts
    return () => clearInterval(typingInterval);
  }, [isTyping]);    

  useEffect(() => {
    if (countersInView) {
      const targetValues = { accuracy: 99, roi: 18, lowerTCO: 90, coverage: 10, fasterDeployment: 50 };
      const interval = 30;

      const timer = setInterval(() => {
        setCounters((prevCounters) => {
          let updated = { ...prevCounters };
          let allCompleted = true;

          Object.keys(targetValues).forEach((key) => {
            if (prevCounters[key] < targetValues[key]) {
              updated[key] = prevCounters[key] + 1;
              allCompleted = false;
            }
          });

          if (allCompleted) clearInterval(timer);
          return updated;
        });
      }, interval);
    }
  }, [countersInView]);

  const togglePopup = () => {
    setIsPopupVisible((prev) => !prev);
  };

  const FaceRegistrationClickFunc = () => {
    navigate("/face-registrationTrial");
  };

  return (
    <div id="Why-VisionDetect">
      {/* Why VisionDetect.ai Section */}
      <motion.div
        className="vision_detect_section"
        id="why-vision-detect"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h1 className="vision_detect_title">Why VisionDetect.ai?</h1>

        <div className="vision_detect_boxes">
          {[
            { img: Accurate, title: "Accurate" },
            { img: Secure, title: "Secure & Efficient" },
            { img: Reliable, title: "Reliable" }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="vision_detect_box"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img src={item.img} alt={item.title} className="vision_detect_image" />
              <h3 className="vision_detect_box_title">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Counter Section */}
      {/* Counter Section */}
      <motion.div
        className="top_features_section"
        ref={sectionRef}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="top_features_text_section">
          {/* First Row */}
          <div className="top_features_grid first_row">
            {[
              { value: counters.accuracy, text: "Accuracy" },
              { value: counters.roi, text: "ROI" },
              { value: counters.lowerTCO, text: "Lower TCO" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="top_features_step_box"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h1>{item.value}{item.text === "ROI" ? "X" : "%"}</h1>
                <h3 className="top_features_step_title">{item.text}</h3>
              </motion.div>
            ))}
          </div>

          {/* Second Row */}
          <div className="top_features_grid second_row">
            {[
              { value: counters.coverage, text: "Coverage" },
              { value: counters.fasterDeployment, text: "Faster Deployment" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="top_features_step_box"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h1>{item.value}%</h1>
                <h3 className="top_features_step_title">{item.text}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>


      {/* Typing Effect Section */}
      <motion.div className="top_features_third" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <div className="center_text_container">
          <p dangerouslySetInnerHTML={{ __html: text }} />
        </div>
        <div className="gradient_circle"></div>
      </motion.div>

      {/* CEO Section */}
      <motion.div
        className="ceo_section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="ceo_content">
          <h3 className="ceo_name">Shankar Kambam</h3>
          <p className="ceo_title">CEO & MD, Meridian Solutions Private Limited</p>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="request_demo_btn heartbeat" onClick={togglePopup}>
            Request Demo
          </motion.button>
        </div>
      </motion.div>
      {isPopupVisible && (
        <Popup
          togglePopup={togglePopup}
          FaceRegistrationClickFunc={FaceRegistrationClickFunc}
        />
      )}
    </div>
  );
};

export default WhyVisionDetect;
