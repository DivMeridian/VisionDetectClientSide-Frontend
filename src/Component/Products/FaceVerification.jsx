import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../Style/FaceVerification.css";
import assistance from "../../Assest/assistance.webp";
import { FiArrowLeft } from "react-icons/fi";
import { FaHome } from "react-icons/fa";


const FaceVerification = () => {

  let facereg = "https://visiondetect.blob.core.windows.net/visiondetectclientsidedata/Videos/facereg2.mp4";


  const navigate = useNavigate();
  const [animatePage, setAnimatePage] = useState(false);
  const [isInViewImportance, setIsInViewImportance] = useState(false);
  const [isInViewHowItWorks, setIsInViewHowItWorks] = useState(false);
  const [isInViewApplications, setIsInViewApplications] = useState(false);

  const importanceRef = useRef(null);
  const howItWorksRef = useRef(null);
  const applicationsRef = useRef(null);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 200); // Small delay before starting animation
  }, []);

  useEffect(() => {
    setAnimatePage(true); // Trigger animation after page loads

    // Check if the sections are in view
    const handleScroll = () => {
      if (importanceRef.current) {
        const rect = importanceRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsInViewImportance(true);
        }
      }
      if (howItWorksRef.current) {
        const rect = howItWorksRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsInViewHowItWorks(true);
        }
      }
      if (applicationsRef.current) {
        const rect = applicationsRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsInViewApplications(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check if it's already in view

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBack = () => {
    console.log("Navigating to home page..."); // Debugging log
    navigate("/"); // Navigate to the home page
  };

  return (
    <div className={`face-verification ${animatePage ? "page-animate" : ""}`}>
      {/* Hero Section */}
      <div className="hero-section">
        {/* <div className="back-arrow" onClick={handleBack}>
          &#8592;
        </div> */}
        <div className="absolute  w-10 h-10 m-2 flex items-center justify-center bg-black rounded-full cursor-pointer z-100" onClick={() => window.history.back()}>
          <FiArrowLeft className="text-white h-5 w-5 cursor-pointer" />
        </div>
        <div className="absolute w-10 h-10 m-2 flex items-center justify-center left-[3rem] bg-black rounded-full cursor-pointer z-100" onClick={() => navigate('/')}>
          <FaHome className="text-white h-5 w-5 cursor-pointer" />
        </div>
        <video className="hero-video" autoPlay loop muted src={facereg} />
      </div>

      {/* Content Section */}
      <div className="content-section">
        <div className="content-left">
          <h1>Face Verification & Registration</h1>
        </div>
        <div className="content-right">
          <button className="action-btn">Request a demo</button>
        </div>
      </div>

      {/* Solutions List */}
      <div className="solutions-list">

        <ul>
          {[
            { path: "/exam-verification", label: "Exam Face Registration & Verification" },
            { path: "/face-kyc", label: "Face KYC (Know Your Customer)" },
            { path: "/apartment-verification", label: "Apartment Entry Verification" },
            { path: "/face-ticketing", label: "Face Based Ticketing" }
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
          Face-based registration and verification is a cutting-edge system that uses facial recognition technology to authenticate individuals securely and efficiently. It captures and stores a person’s facial data as a unique identifier, enabling quick and accurate verification during critical processes.
        </p>
      </div>

      {/* Why is Face Registration & Verification Important */}
      <div
        className={`importance-section ${isInViewImportance ? 'animate__animated animate__fadeInUp' : ''}`}
        ref={importanceRef}
        style={{ opacity: isInViewImportance ? 1 : 0, transition: 'opacity 0.5s' }}
      >
        <h2>
          <span className="blue-text">Why is</span> Face Registration & Verification{" "}
          <span className="blue-text">important</span> for you?
        </h2>
        <ul>
          <li>
            <strong>1. Enhanced Security:</strong> Prevents impersonation and fraud by verifying identity through biometrics.
          </li>
          <li>
            <strong>2. Speed & Efficiency:</strong> Streamlines authentication, saving time compared to manual checks.
          </li>
          <li>
            <strong>3. Accuracy:</strong> Delivers up to 99.9% precision, ensuring reliable verification.
          </li>
          <li>
            <strong>4. Versatility:</strong> Applicable for physical and remote scenarios, including exams, banking, e-commerce, and more.
          </li>
        </ul>
      </div>

      {/* How it Works */}
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
              <strong>1. Registration:</strong> Captures and securely stores the individual's facial data.
            </p>
          </div>
          <div className="step">
            <img src={assistance} alt="Voice assistance" />
            <p>
              <strong>2. Verification:</strong> Matches real-time facial images with stored data, providing results in seconds.
            </p>
          </div>
          <div className="step">
            <img src={assistance} alt="Voice assistance" />
            <p>
              <strong>3. Integration:</strong> Adaptable for in-person and remote environments.
            </p>
          </div>
        </div>
      </div>

      {/* Applications */}
      <div
        className={`applications-section ${isInViewApplications ? 'animate__animated animate__fadeInUp' : ''}`}
        ref={applicationsRef}
        style={{ opacity: isInViewApplications ? 1 : 0, transition: 'opacity 0.5s' }}
      >
        <h2>
          <span className="blue-text">Applications</span>
        </h2>
        <ul className="applications-list">
          <li>
            <strong>Education:</strong> Exam centers and online proctoring.
          </li>
          <li>
            <strong>Banking:</strong> Remote KYC and account authentication.
          </li>
          <li>
            <strong>Government:</strong> Identity verification for public services.
          </li>
          <li>
            <strong>E-commerce:</strong> Secure onboarding for buyers and sellers.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FaceVerification;
