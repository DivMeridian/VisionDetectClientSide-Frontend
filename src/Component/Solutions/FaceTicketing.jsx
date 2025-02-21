import React, { useRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Style/FaceVerification.css";
import assistance from "../../Assest/assistance.webp";
import { FiArrowLeft } from "react-icons/fi";
import Popup from '../Popup.jsx';
import { FaHome } from "react-icons/fa";


const FaceTicketing = () => {

  let facereg= "https://visiondetect.blob.core.windows.net/visiondetectclientsidedata/Videos/facereg2.mp4"

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
        <video className="hero-video" autoPlay loop muted src={facereg} />
      </div>

      {/* Content Section */}
      <div className="content-section">
        <div className="content-left">
          <h1>Face Based Ticketing</h1>
        </div>
        <div className="content-right">
          <button className="action-btn" onClick={togglePopup}>Request a demo</button>
        </div>
      </div>

      {/* Solutions List */}
      <div className="solutions-list">
        {/* <ul>
          <li>
            <Link to="/exam-verification">
              <button className="solution-btn">
                Exam Face Registration & Verification
              </button>
            </Link>
          </li>
          <li>
            <Link to="/face-kyc">
              <button className="solution-btn">Face KYC (Know Your Customer)</button>
            </Link>
          </li>
          <li>
            <Link to="/apartment-verification">
              <button className="solution-btn">Apartment Entry Verification</button>
            </Link>
          </li>
        </ul> */}
        <ul>
          {[
            { path: "/exam-verification", label: "Exam Face Registration & Verification" },
            { path: "/face-kyc", label: "Face KYC (Know Your Customer)" },
            { path: "/apartment-verification", label: "Apartment Entry Verification" },
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

      {/* Solutions or Content of the Face Ticketing Page */}
      {/* Apartment Entry Verification Section */}
      <div
        className={`solution-paragraph ${isInViewSolution ? 'animate__animated animate__fadeInUp' : ''}`}
        ref={solutionRef}
        style={{ opacity: isInViewSolution ? 1 : 0, transition: 'opacity 0.5s' }}
      >
        <p>
          <strong>What is Face Based Ticketing?</strong>
          <br />
          <br />
          Face-based ticketing is a system that uses facial recognition technology to link a person’s face to their purchased ticket. This eliminates the need for physical or digital tickets, enabling faster, secure, and seamless access to events, venues, or transportation systems. This use case focuses on leveraging face recognition for secure, convenient, and contactless access control in residential buildings. It’s an upgrade from traditional access methods like keys, cards, or PIN codes.
        </p>
      </div>

      {/* Why is Apartment Entry Verification important? */}
      <div
        className={`importance-section ${isInViewImportance ? 'animate__animated animate__fadeInUp' : ''}`}
        ref={importanceRef}
        style={{ opacity: isInViewImportance ? 1 : 0, transition: 'opacity 0.5s' }}
      >
        <h2>
          <span className="blue-text">Why is</span> Face Based Ticketing So <span className="blue-text">important</span> for you?
        </h2>
        <ul>
          <li>
            <strong>1. Faster and Efficient Entry:</strong> Attendees can walk through gates equipped with face recognition cameras, bypassing long queues and reducing wait times.
          </li>
          <li>
            <strong>2. Eliminates Ticket Fraud:</strong> Tying tickets to a person’s face ensures they are non-transferable, preventing unauthorized resales or counterfeit tickets.
          </li>
          <li>
            <strong>3. Enhanced Event Experience:</strong> A smooth and hassle-free entry process improves the overall experience for attendees.
          </li>
          <li>
            <strong>4.  Eco-Friendly Solution:</strong> By eliminating paper tickets, this system promotes sustainable practices and reduces environmental impact.
          </li>
          <li>
            <strong>5. Data-Driven Insights:</strong> The system collects data on attendance patterns, peak entry times, and other metrics, aiding future planning and optimization.
          </li>
          <li>
            <strong>6.  Supports Large-Scale Events:</strong> Highly scalable, it can manage large crowds efficiently, making it suitable for concerts, sports events, and public transportation.
          </li>
          <li>
            <strong>7. Improves Security:</strong> Integrated with databases, the system can identify and flag banned or suspicious individuals to enhance safety.
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
              <strong>1. Face Registration:</strong>
              <li>Attendees register their face along with ticket purchase information.</li>
            </p>
          </div>
          <div className="step">
            <img src={assistance} alt="Voice assistance" />
            <p>
              <strong>2. Face Verification at Entry Points:</strong>
              <li>Cameras at entry gates verify the attendee’s face against the registered database for quick access.</li>
            </p>
          </div>
          <div className="step">
            <img src={assistance} alt="Voice assistance" />
            <p>
              <strong>3. Integration with Databases:</strong>
              <li> Security databases can be linked to flag banned or suspicious individuals. </li>
            </p>
          </div>
        </div>

        <div className="how-it-works-steps">
          <div className="step">
            <img src={assistance} alt="Voice assistance" />
            <p>
              <strong>4. Real-Time Monitoring:</strong>
              <li>The system processes real-time data to ensure seamless entry and collect analytics for operational insights.                             </li>
            </p>
          </div>
        </div>
      </div>

      {/* Usage Scenarios */}
      <div
        className={`applications-section ${isInViewApplication ? 'animate__animated animate__fadeInUp' : ''}`}
        ref={applicationRef}
        style={{ opacity: isInViewApplication ? 1 : 0, transition: 'opacity 0.5s' }}
      >                 <h2>
          <span className="blue-text">When</span> can it be <span className="blue-text">used?</span>
        </h2>
        <ul className="applications-list" id="face">
          <li>
            Ideal for events requiring efficient access management, such as concerts, trade shows, or sports events.                     </li>
          <li>
            Particularly beneficial during peak times or for high-profile events where security and crowd management are critical.                     </li>
          <li>
            Best implemented when sustainability goals, such as reducing paper ticket usage, are prioritized.                     </li>
        </ul>
      </div>

      <div
        className={`importance-section ${isInViewUseIt ? 'animate__animated animate__fadeInUp' : ''}`}
        ref={useitRef}
        style={{ opacity: isInViewUseIt ? 1 : 0, transition: 'opacity 0.5s' }}
      >                 <h2>
          <span className="blue-text">Where</span> is it <span className="blue-text">applicable?</span>
        </h2>
        <ul>
          <li>
            <strong>1. Event Venues:</strong> Concert halls, stadiums, and trade show centers.
          </li>
          <li>
            <strong>2. Public Transportation:</strong> Airports, train stations, and bus terminals for ticketless travel.
          </li>
          <li>
            <strong>3.  Large-Scale Events:</strong> Conferences, exhibitions, and festivals.
          </li>
          <li>
            <strong>5. High-Security Zones:</strong> VIP events or places requiring strict access control.
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

export default FaceTicketing;
