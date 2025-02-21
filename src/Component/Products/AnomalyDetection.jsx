import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Style/FaceVerification.css";
import assistance from "../../Assest/assistance.webp";
import { FiArrowLeft } from "react-icons/fi";
import { FaHome } from "react-icons/fa";


const AnomalyDetection = () => {
  let anomalydetection = "https://visiondetect.blob.core.windows.net/visiondetectclientsidedata/Videos/anomalydetection2.mp4"
  const [animatePage, setAnimatePage] = useState(false);

  // Refs to track the visibility of each section
  const solutionRef = useRef(null);
  const importanceRef = useRef(null);
  const howItWorksRef = useRef(null);
  const applicationsRef = useRef(null);

  const [isInViewSolution, setIsInViewSolution] = useState(false);
  const [isInViewImportance, setIsInViewImportance] = useState(false);
  const [isInViewHowItWorks, setIsInViewHowItWorks] = useState(false);
  const [isInViewApplications, setIsInViewApplications] = useState(false);

  const [visible, setVisible] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 200); // Small delay before starting animation
  }, []);

  // Function to observe and trigger animations on scroll into view
  const handleScrollAnimation = (entry, observer, setInView) => {
    if (entry.isIntersecting) {
      setInView(true);
      entry.target.classList.add("animate__animated", "animate__fadeInUp");
      observer.unobserve(entry.target); // Stop observing after animation starts
    }
  };

  useEffect(() => {
    setAnimatePage(true); // Trigger animation after page loads

    // Observe the sections to trigger animations
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.target === solutionRef.current) {
          handleScrollAnimation(entry, observer, setIsInViewSolution);
        } else if (entry.target === importanceRef.current) {
          handleScrollAnimation(entry, observer, setIsInViewImportance);
        } else if (entry.target === howItWorksRef.current) {
          handleScrollAnimation(entry, observer, setIsInViewHowItWorks);
        } else if (entry.target === applicationsRef.current) {
          handleScrollAnimation(entry, observer, setIsInViewApplications);
        }
      });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is in view

    observer.observe(solutionRef.current);
    observer.observe(importanceRef.current);
    observer.observe(howItWorksRef.current);
    observer.observe(applicationsRef.current);

    return () => {
      observer.disconnect(); // Clean up observer on unmount
    };
  }, []);

  return (
    <div className={`face-verification ${animatePage ? "page-animate" : ""}`}>
      <div className="hero-section">
        {/* <div className="back-arrow" onClick={() => window.history.back()}>
          &#8592;
        </div> */}
        <div className="absolute  w-10 h-10 m-2 flex items-center justify-center bg-black rounded-full cursor-pointer z-100" onClick={() => window.history.back()}>
          <FiArrowLeft className="text-white h-5 w-5 cursor-pointer" />
        </div>
        <div className="absolute w-10 h-10 m-2 flex items-center justify-center left-[3rem] bg-black rounded-full cursor-pointer z-100" onClick={() => navigate('/')}>
          <FaHome className="text-white h-5 w-5 cursor-pointer" />
        </div>

        <video className="hero-video" autoPlay loop muted src={anomalydetection} />
      </div>

      {/* Content Section */}
      <div className="content-section" ref={solutionRef}>
        <div className="content-left">
          <h1>Anomaly Detection</h1>
        </div>
        <div className="content-right">
          <button className="action-btn">Request a demo</button>
        </div>
      </div>


      {/* Solutions List */}
      <div className="solutions-list">


        <ul>
          {[
            { path: "/weapon-detection", label: "Weapon Detection" },
            { path: "/mobile-detection", label: "Mobile Phone Detection" },
            { path: "/mask-detection", label: "Mask Detection" },
            { path: "/helmet-detection", label: "Helmet Detection" }
          ].map((item, index) => (
            <li
              key={index}
              className={`step_item ${visible ? "visible" : ""}`}
              style={{ transitionDelay: `${index * 0.2}s` }} // Dynamic delay
            >
              <Link to={item.path}>
                <button className="solution-btn">{item.label}</button>
              </Link>
            </li>
          ))}
        </ul>


      </div>

      {/* Paragraph Section */}
      <div className="solution-paragraph">
        <p>
          Anomaly detection refers to the process of identifying unusual patterns, behaviors, or objects that deviate from the norm within a dataset, environment, or system. Leveraging advanced machine learning and AI techniques, this technology plays a critical role in ensuring safety, security, and operational efficiency across various domains.
        </p>
      </div>

      {/* Importance Section */}
      <div
        className={`importance-section ${isInViewImportance ? 'animate__animated animate__fadeInUp' : ''}`}
        ref={importanceRef}
        style={{ opacity: isInViewImportance ? 1 : 0, transition: 'opacity 0.5s' }}
      >
        <h2>
          <span className="blue-text">Why is</span> Anomaly Detection <span className="blue-text">important</span> for you?
        </h2>
        <ul>
          <li>
            <strong>1. Enhancing Security: </strong>
            Identifies threats such as unauthorized access, suspicious activities, or dangerous objects like weapons in public or high-security areas.
          </li>
          <li>
            <strong>2. Improving Operational Efficiency: </strong>
            Detects irregularities in processes, machinery, or systems, reducing downtime and preventing failures.
          </li>
          <li>
            <strong>3. Proactive Decision-Making: </strong>
            Enables early detection of anomalies for rapid response, minimizing potential risks or damage.
          </li>
        </ul>
      </div>

      {/* How it Works Section */}
      <div
        className={`how-it-works ${isInViewHowItWorks ? 'animate__animated animate__fadeInUp' : ''}`}
        ref={howItWorksRef}
        style={{ opacity: isInViewHowItWorks ? 1 : 0, transition: 'opacity 0.5s' }}
      >
        <h2>
          <span className="blue-text">How</span> it <span className="blue-text">Works?</span>
        </h2>
        <div className="how-it-works-steps">
          <div className="step">
            <img src={assistance} alt="Voice assistance" />
            <p>
              <strong>1. Data Collection: </strong>
              Captures input from sensors, cameras, or systems to create a comprehensive dataset.
            </p>
          </div>
          <div className="step">
            <img src={assistance} alt="Voice assistance" />
            <p>
              <strong>2. Machine Learning Models: </strong>
              Uses supervised or unsupervised learning to identify patterns and establish what constitutes “normal” behavior.
            </p>
          </div>
          <div className="step">
            <img src={assistance} alt="Voice assistance" />
            <p>
              <strong>3. Real-Time Monitoring: </strong>
              Continuously analyzes data streams or live feeds to spot deviations as they occur.
            </p>
          </div>
        </div>

        <div className="how-it-works-steps">
          <div className="step">
            <img src={assistance} alt="Voice assistance" />
            <p>
              <strong>4. Alert Generation: </strong>
              Sends notifications or triggers automated responses when anomalies are detected, providing insights for swift action.
            </p>
          </div>
        </div>
      </div>

      {/* Applications Section */}
      <div
        className={`importance-section ${isInViewApplications ? 'animate__animated animate__fadeInUp' : ''}`}
        ref={applicationsRef}
        style={{ opacity: isInViewApplications ? 1 : 0, transition: 'opacity 0.5s' }}
      >
        <h2>
          <span className="blue-text">Applications</span>
        </h2>
        <ul>
          <li>
            <strong>1. Security & Surveillance: </strong> Detects unauthorized devices, weapons, or suspicious behaviors in restricted areas or public spaces.
          </li>
          <li>
            <strong>2. Healthcare: </strong> Identifies irregularities in patient vitals or medical equipment for timely intervention.
          </li>
          <li>
            <strong>3. Finance: </strong> Flags fraudulent transactions or suspicious financial activities to prevent losses.
          </li>
          <li>
            <strong>4. Manufacturing:</strong> Monitors equipment performance to predict failures or identify defects in production lines.
          </li>
          <li>
            <strong>5. Environment Monitoring:</strong> Tracks unusual patterns like weather anomalies, pollution spikes, or wildlife behavior.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AnomalyDetection;
