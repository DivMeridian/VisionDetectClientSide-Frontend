import React, { useRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Style/FaceVerification.css";
import assistance from "../../Assest/assistance.webp";
import { FiArrowLeft } from "react-icons/fi";
import Popup from '../Popup.jsx';
import { FaHome } from "react-icons/fa";



const MobileDetection = () => {

  let mobilevideo= "https://visiondetect.blob.core.windows.net/visiondetectclientsidedata/Videos/mobilevideo.mp4" 

  const [animatePage, setAnimatePage] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const navigate = useNavigate()


  const togglePopup = () => {
    setIsPopupVisible((prev) => !prev);
  };

  const FaceRegistrationClickFunc = () => {
    navigate("/face-registrationTrial");
  };


  // Refs for sections
  const solutionRef = useRef(null);
  const importanceRef = useRef(null);
  const worksRef = useRef(null);
  const applicationRef = useRef(null);
  const useitRef = useRef(null);


  const [isInViewSolution, setIsInViewSolution] = useState(false);
  const [isInViewImportance, setIsInViewImportance] = useState(false);
  const [isInViewWorks, setIsInViewWorks] = useState(false);
  const [isInViewApplication, setIsInViewApplications] = useState(false);
  const [isInViewUseIt, setIsInViewUseIt] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 200); // Small delay before starting animation
  }, []);

  useEffect(() => {
    setAnimatePage(true); // Trigger animation after page loads

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === solutionRef.current) {
            setIsInViewSolution(true);
          } else if (entry.target === importanceRef.current) {
            setIsInViewImportance(true);
          } else if (entry.target === worksRef.current) {
            setIsInViewWorks(true);
          }
          else if (entry.target === applicationRef.current) {
            setIsInViewApplications(true);
          }
          else if (entry.target === useitRef.current) {
            setIsInViewUseIt(true);
          }
        }
      });
    }, { threshold: 0.2 }); // Trigger when 20% of the section is visible

    if (solutionRef.current) observer.observe(solutionRef.current);
    if (importanceRef.current) observer.observe(importanceRef.current);
    if (worksRef.current) observer.observe(worksRef.current);
    if (applicationRef.current) observer.observe(applicationRef.current);
    if (useitRef.current) observer.observe(useitRef.current);

    return () => {
      if (solutionRef.current) observer.unobserve(solutionRef.current);
      if (importanceRef.current) observer.unobserve(importanceRef.current);
      if (worksRef.current) observer.unobserve(worksRef.current);
      if (applicationRef.current) observer.unobserve(applicationRef.current);
      if (useitRef.current) observer.unobserve(useitRef.current);
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
            <div className="absolute w-10 h-10 m-2 flex items-center justify-center left-[3rem] bg-black rounded-full cursor-pointer z-100" onClick={() =>navigate('/') }>
                  <FaHome className="text-white h-5 w-5 cursor-pointer"/>
                </div>
        <video className="hero-video" autoPlay loop muted src={mobilevideo} />
      </div>

      {/* Content Section */}
      <div className="content-section">
        <div className="content-left">
          <h1>Mobile Phone Detection</h1>
        </div>
        <div className="content-right">
          <button className="action-btn" onClick={togglePopup}>Request a demo</button>
        </div>
      </div>

      {/* Solutions List */}
      <div className="solutions-list">
        {/* <ul>
          <li>
            <Link to="/weapon-detection">
              <button className="solution-btn">
                Weapon Detection
              </button>
            </Link>
          </li>
          <li>
            <Link to="/mask-detection">
              <button className="solution-btn">Mask Detection</button>
            </Link>
          </li>
          <li>
            <Link to="/helmet-detection">
              <button className="solution-btn">Helmet Detection</button>
            </Link>
          </li>
        </ul> */}
        <ul>
          {[
            { path: "/weapon-detection", label: "Weapon Detection" },
            { path: "/mask-detection", label: "Mask Detection" },
            { path: "/helmet-detection", label: "Helmet Detection" },
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
      <div
        className={`solution-paragraph ${isInViewSolution ? 'animate__animated animate__fadeInUp' : ''}`}
        ref={solutionRef}
        style={{ opacity: isInViewSolution ? 1 : 0, transition: 'opacity 0.5s' }}
      >
        <p>
          <strong> What is Mobile Phone Detection? </strong>
          <br></br>
          <br></br>
          The goal is to detect the usage of mobile phones and other electronic devices (such as laptops, tablets, smartwatches, and gaming consoles) in restricted or high-security areas. This system aims to prevent information leaks, workplace distractions, or enhance safety in environments where such devices could cause harm or compromise security.
        </p>
      </div>

      {/* Why is Exam Face Registration & Verification important  */}
      <div
        className={`importance-section ${isInViewImportance ? 'animate__animated animate__fadeInUp' : ''}`}
        ref={importanceRef}
        style={{ opacity: isInViewImportance ? 1 : 0, transition: 'opacity 0.5s' }}
      >
        <h2>
          <span className="blue-text"> Why is</span> Phone Detection <span className="blue-text">important</span> for you?
        </h2>
        <ul>
          <li>
            <strong>1.  Prevent Information Leaks: </strong>
            In sensitive areas like government buildings, data centers, or research labs, mobile phones could be used to capture unauthorized pictures or transmit sensitive information, leading to security breaches.
          </li>
          <li>
            <strong>2. Workplace Safety: </strong>
            In environments like factories or warehouses, mobile phones can distract workers, leading to potential accidents or mistakes while operating machinery.
          </li>
          <li>
            <strong>3. High-Security Environments: </strong>
            Areas like military installations, nuclear plants, and airports require strict control over electronic devices to avoid surveillance, hacking, or espionage.
          </li>
          <li>
            <strong>4. Customizable Device Detection: </strong>
            Expanding the system to detect other unauthorized devices such as laptops or wearables can help enforce stricter policies across diverse environments.
          </li>
        </ul>
      </div>

      {/* How it Works */}
      <div
        className={`how-it-works ${isInViewWorks ? 'animate__animated animate__fadeInUp' : ''}`}
        ref={worksRef}
        style={{ opacity: isInViewWorks ? 1 : 0, transition: 'opacity 0.5s' }}
        id="works"
      >
        <h2>
          <span className="blue-text">How</span> it <span className="blue-text">Works?</span>
        </h2>
        <div className="how-it-works-steps">
          <div className="step">
            <img src={assistance} alt="Voice assistance" />
            <p>
              <strong>1. Machine Learning Models: </strong>
              <li> Train a machine learning model using computer vision techniques to recognize mobile phones and other electronic devices through CCTV footage or live camera feeds. </li>
            </p>
          </div>
          <div className="step">
            <img src={assistance} alt="Voice assistance" />
            <p>
              <strong>2. Multi-Device Detection: </strong>
              <li> Customize the model to detect a variety of devices, including mobile phones, tablets, laptops, and wearables, by analyzing specific features or patterns associated with these devices. </li>
            </p>
          </div>
          <div className="step">
            <img src={assistance} alt="Voice assistance" />
            <p>
              <strong>3. Integration with Security Systems: </strong>
              <li> The detection system can be integrated with the facility's security systems to trigger alerts, disable certain areas, or notify personnel when unauthorized devices are detected. </li>
            </p>
          </div>
        </div>

        <div className="how-it-works-steps">
          <div className="step">
            <img src={assistance} alt="Voice assistance" />
            <p>
              <strong>4. Real-Time Monitoring: </strong>
              <li> Use real-time object detection and image recognition technologies to continuously monitor restricted zones for the presence of mobile phones or other unauthorized devices. </li>
            </p>
          </div>
        </div>
      </div>

      {/* Applications */}
      <div
        className={`importance-section ${isInViewUseIt ? 'animate__animated animate__fadeInUp' : ''}`}
        ref={useitRef}
        style={{ opacity: isInViewUseIt ? 1 : 0, transition: 'opacity 0.5s' }}
      >
        <h2>
          <span className="blue-text">Applications</span>
        </h2>
        <ul>
          <li>
            <strong>1. Airports and Security Checkpoints: </strong> Airports where mobile phones might be used for unauthorized photography or video recording.
          </li>
          <li>
            <strong>2. Nuclear Plants or Research Labs: </strong> Facilities where any unauthorized device could pose a security risk or interfere with research.
          </li>
          <li>
            <strong>3. Data Centers and Military Installations: </strong> High-security areas where mobile phones or other personal devices could be used to leak critical information.
          </li>
          <li>
            <strong>4. Factories and Warehouses: </strong> Workplaces where mobile phones could distract workers, causing accidents or errors while operating machinery or handling dangerous tools.
          </li>
        </ul>
      </div>
      {isPopupVisible && (
        <Popup
          togglePopup={togglePopup}
          FaceRegistrationClickFunc={FaceRegistrationClickFunc}
        />
      )}
    </div>
  );
};

export default MobileDetection;
