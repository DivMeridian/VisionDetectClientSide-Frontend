import React, { useRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Style/FaceVerification.css";
import assistance from "../../Assest/assistance.webp";
import { FiArrowLeft } from "react-icons/fi";
import Popup from '../Popup.jsx'; 
import { FaHome } from "react-icons/fa";


const FaceKYC = () => {

  let facereg="https://visiondetect.blob.core.windows.net/visiondetectclientsidedata/Videos/facereg2.mp4";

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
        <div className="absolute w-10 h-10 m-2 flex items-center justify-center left-[3rem] bg-black rounded-full cursor-pointer z-100" onClick={() => navigate('/')}>
          <FaHome className="text-white h-5 w-5 cursor-pointer" />
        </div>
        <video className="hero-video" autoPlay loop muted src={facereg} />
      </div>

      {/* Content Section */}
      <div className="content-section">
        <div className="content-left">
          <h1>Face KYC (Know Your Customer)</h1>
        </div>
        <div className="content-right">
          <button className="action-btn" onClick={togglePopup}>Request a demo</button>
        </div>
      </div>

      {/* Solutions List */}
      <div className="solutions-list">
       
        <ul>
          {[
            { path: "/exam-verification", label: "Exam Face Registration & Verification" },
            { path: "/apartment-verification", label: "Apartment Entry Verification" },
            { path: "/face-ticketing", label: "Face Based Ticketing" },
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
          <strong>What is Face KYC?</strong>
          <br></br>
          <br></br>
          Face KYC is a process that enables businesses to verify customer identities remotely through video-based facial recognition technology. It ensures regulatory compliance, enhances security, and prevents fraud in industries such as banking, insurance, e-commerce, and telecommunications. Video KYC enables businesses to verify customer identities remotely using facial recognition technology. It is widely adopted in industries such as banking, insurance, e-commerce, and telecommunications, where regulatory compliance and fraud prevention are crucial.
        </p>
      </div>

      {/* Why is Exam Face Registration & Verification important  */}
      <div
        className={`importance-section ${isInViewImportance ? 'animate__animated animate__fadeInUp' : ''}`}
        ref={importanceRef}
        style={{ opacity: isInViewImportance ? 1 : 0, transition: 'opacity 0.5s' }}
      >
        <h2>
          <span className="blue-text"> Why is</span> Face KYC so  <span className="blue-text">important</span> for you?
        </h2>
        <ul>
          <li>
            <strong>1. Speed and Convenience: </strong>
            Eliminates the need for physical branch visits, enabling customers to complete KYC from home within minutes.
          </li>
          <li>
            <strong>2. Enhanced Security:</strong>
            Biometric verification confirms that the person presenting their ID is the actual individual being verified, reducing identity theft and forgery risks.
          </li>
          <li>
            <strong>3. Regulatory Compliance:</strong>
            Meets stringent KYC requirements mandated by many countries, offering auditable digital records for future reference
          </li>
          <li>
            <strong>4. Cost Savings:</strong>
            Reduces expenses by removing the need for physical infrastructure, couriering documents, or conducting field verifications.
          </li>
          <li>
            <strong>5.  Improved Customer Experience:</strong>
            A seamless, user-friendly process enhances customer satisfaction and loyalty
          </li>
          <li>
            <strong>6.  Fraud Detection:</strong>
            AI-powered anomaly detection identifies fake IDs and pre-recorded videos, strengthening security.
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
              <strong>1. Identity Capture:</strong>
              <li>Customers upload their photo ID and initiate a live video session for facial recognition.</li>
            </p>
          </div>
          <div className="step">
            <img src={assistance} alt="Voice assistance" />
            <p>
              <strong>2. Biometric Verification: </strong>
              <li>AI-powered algorithms compare the customer’s live video feed with the ID to verify authenticity.                            </li>
            </p>
          </div>
          <div className="step">
            <img src={assistance} alt="Voice assistance" />
            <p>
              <strong>3. Document Validation:</strong>
              <li>The system cross-checks uploaded documents against databases to confirm legitimacy.</li>
            </p>
          </div>
        </div>

        <div className="how-it-works-steps">
          <div className="step">
            <img src={assistance} alt="Voice assistance" />
            <p>
              <strong>4. Fraud Prevention:</strong>
              <li>AI detects pre-recorded videos, fake IDs, and other anomalies.</li>
            </p>
          </div>
          <div className="step">
            <img src={assistance} alt="Voice assistance" />
            <p>
              <strong>5. Auditable Records:</strong>
              <li>The entire session is securely recorded for compliance and future reference</li>
            </p>
          </div>
        </div>
      </div>

      {/* Applications */}
      <div
        className={`applications-section ${isInViewApplication ? 'animate__animated animate__fadeInUp' : ''}`}
        ref={applicationRef}
        style={{ opacity: isInViewApplication ? 1 : 0, transition: 'opacity 0.5s' }}
      >
        <h2>
          <span className="blue-text">Where</span> can it be <span className="blue-text"> used?</span>
        </h2>
        <ul className="applications-list" id="face">
          <li>
            <strong>New Customer Onboarding:</strong> When businesses need to verify customer identities for account opening, loan applications, or e-commerce registrations.
          </li>
          <li>
            <strong>Regulatory Compliance:</strong> To meet legal requirements in industries where stringent KYC processes are mandated.
          </li>
          <li>
            <strong>Fraud Prevention:</strong> For transactions involving large sums or high-risk scenarios, where identity verification is critical.
          </li>
        </ul>
      </div>

      <div
        className={`importance-section ${isInViewUseIt ? 'animate__animated animate__fadeInUp' : ''}`}
        ref={useitRef}
        style={{ opacity: isInViewUseIt ? 1 : 0, transition: 'opacity 0.5s' }}
      >
        <h2>
          <span className="blue-text"> Where</span> is it <span className="blue-text">applicable?</span>
        </h2>
        <ul>
          <li>
            <strong>1. Banking and Financial Services:</strong> Account opening, loan approvals, and investment registrations.
          </li>
          <li>
            <strong>2. Insurance:</strong> Verification during policy issuance or claims processing.
          </li>
          <li>
            <strong>3. E-commerce:</strong> Identity verification for sellers or buyers to ensure secure transactions.
          </li>
          <li>
            <strong>4. Telecommunications::</strong> SIM card issuance and customer identity verification.
          </li>
          <li>
            <strong>5. Government Services:</strong> Remote identity verification for public services or subsidy programs.
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

export default FaceKYC;
