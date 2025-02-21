import React, { useRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Style/FaceVerification.css";
import assistance from "../../Assest/assistance.webp";
import { FiArrowLeft } from "react-icons/fi";
import Popup from '../Popup.jsx'; // Import the Popup component
import { FaHome } from "react-icons/fa";


const WeaponDetection = () => {

  let weaponsvideo = "https://visiondetect.blob.core.windows.net/visiondetectclientsidedata/Videos/weaponsvideo.mp4"

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
        <video className="hero-video" autoPlay loop muted src={weaponsvideo} />
      </div>

      {/* Content Section */}
      <div className="content-section">
        <div className="content-left">
          <h1>Weapon Detection</h1>
        </div>
        <div className="content-right">
          <button className="action-btn" onClick={togglePopup}>Request a demo</button>
        </div>
      </div>

      {/* Solutions List */}
      <div className="solutions-list">
        {/* <ul>
          <li>
            <Link to="/mobile-detection">
              <button className="solution-btn">Mobile Phone Detection</button>
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
            { path: "/mobile-detection", label: "Mobile Phone Detection" },
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
          <strong>What is Weapon Detection?</strong>
          <br></br>
          <br></br>
          Weapon detection involves the use of image or video analysis technologies to identify the presence of weapons such as guns, knives, or sharp objects in real-time. This system ensures the safety and security of public spaces, secured areas, and high-risk environments by identifying potential threats proactively.      </p>
      </div>

      {/* Why is Exam Face Registration & Verification important  */}
      <div
        className={`importance-section ${isInViewImportance ? 'animate__animated animate__fadeInUp' : ''}`}
        ref={importanceRef}
        style={{ opacity: isInViewImportance ? 1 : 0, transition: 'opacity 0.5s' }}
      >
        <h2>
          <span className="blue-text"> Why is</span> Weapon Detection <span className="blue-text">important</span> for you?
        </h2>
        <ul>
          <li>
            <strong>1. Enhancing Public Safety:  </strong>
            Helps reduce violence in public areas such as airports, schools, malls, and public transport stations.
          </li>
          <li>
            <strong>2. Improving Security in Sensitive Locations: </strong>
            Critical for environments like correctional facilities, where concealed weapons pose significant risks.
          </li>
          <li>
            <strong>3. Supporting Crowd Control: </strong>
            Ensures safety at large events or protests by enabling quick responses to potential threats.
          </li>
          <li>
            <strong>4. Customizable Detection: </strong>
            Adapts to identify unconventional weapons like improvised tools, self-defense items, or repurposed objects (e.g., pens, wrenches).
          </li>
          <li>
            <strong>5. Proactive Alerts: </strong>
            Sends real-time notifications to security personnel with visuals and timestamps for timely intervention.
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
              <strong>1. Real-Time Analysis: </strong>
              <li> Leverages AI-powered image or video processing to detect weapons in live feeds from cameras. </li>
            </p>
          </div>
          <div className="step">
            <img src={assistance} alt="Voice assistance" />
            <p>
              <strong>2. Custom Training: </strong>
              <li> Models are trained on diverse datasets to recognize a wide range of weapon types, including unconventional or environment-specific tools. </li>
            </p>
          </div>
          <div className="step">
            <img src={assistance} alt="Voice assistance" />
            <p>
              <strong>3. Integration with Alert Systems: </strong>
              <li> Generates immediate alerts for security teams, complete with detailed visuals and timestamps, enabling rapid action. </li>
            </p>
          </div>
        </div>

        <div className="how-it-works-steps">
          <div className="step">
            <img src={assistance} alt="Voice assistance" />
            <p>
              <strong>4. Continuous Improvement: </strong>
              <li> The system can evolve with new data to improve detection accuracy and expand its scope. </li>
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
            <strong>1. Public Spaces: </strong> Airports, train stations, shopping malls, and schools.
          </li>
          <li>
            <strong>2. High-Security Environments: </strong> Correctional facilities, government buildings, and military bases.
          </li>
          <li>
            <strong>3. Crowded Locations: </strong> Concerts, protests, sports arenas, and other large events.
          </li>
          <li>
            <strong>4. Industrial Sites: </strong> Factories and construction zones where tools could be repurposed as weapons.
          </li>
          <li>
            <strong>5. Customized Applications: </strong> Tailored setups for unique environments requiring specific types of weapon detection.
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

export default WeaponDetection;
