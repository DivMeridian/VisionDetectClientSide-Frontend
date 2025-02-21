import React, { useState, useEffect, useRef } from "react"; // Fixed import
import "../../Style/FaceVerification.css";
import { Link, useNavigate } from "react-router-dom";
import assistance from "../../Assest/assistance.webp";
import { FiArrowLeft } from "react-icons/fi";
import Popup from '../Popup.jsx'; // Import the Popup component
import { FaHome } from "react-icons/fa";


const AutomatedManagement = () => {

    let anprdetection= "https://visiondetect.blob.core.windows.net/visiondetectclientsidedata/Videos/anprdetection2.mp4"

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
                          <FiArrowLeft className="text-white h-5 w-5 cursor-pointer"/>
                        </div>
                            <div className="absolute w-10 h-10 m-2 flex items-center justify-center left-[3rem] bg-black rounded-full cursor-pointer z-100" onClick={() =>navigate('/') }>
                                  <FaHome className="text-white h-5 w-5 cursor-pointer"/>
                                </div>
                <video className="hero-video" autoPlay loop muted src={anprdetection} />
            </div>

            {/* Content Section */}
            <div className="content-section">
                <div className="content-left">
                    <h1>Automated Billing & Slot Management</h1>
                </div>
                <div className="content-right">
                    <button className="action-btn" onClick={togglePopup}>Request a demo</button>
                </div>
            </div>

            {/* Solutions List */}
            <div className="solutions-list">
                

                <ul>
                        {[
                          { path: "/vehicle-authentication", label: "Automated Vehicle Authentication" },
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
                    ANPR-based systems automate parking billing and slot management in commercial spaces like shopping malls, office complexes, and entertainment venues by calculating parking durations and processing payments.
                </p>
            </div>

            {/* Why is ANPR important? */}
            <div
                className={`importance-section ${isInViewImportance ? 'animate__animated animate__fadeInUp' : ''}`}
                ref={importanceRef}
                style={{ opacity: isInViewImportance ? 1 : 0, transition: 'opacity 0.5s' }}
            >
                <h2>
                    <span className="blue-text"> Why is</span> ANPR <span className="blue-text">important</span> for you?
                </h2>
                <ul>
                    <li>
                        1. Eliminates manual ticketing, reducing errors and improving customer experience.  </li>
                    <li>
                        2. Enhances security by integrating with payment systems, minimizing human intervention. </li>
                    <li>
                        3. Speeds up the parking process, especially during peak hours.  </li>
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
                            <strong>1. ANPR cameras capture license plates at parking lot entry points and log the entry time. </strong>
                        </p>
                    </div>
                    <div className="step">
                        <img src={assistance} alt="Voice assistance" />
                        <p>
                            <strong>2. Upon exit, the system calculates the parking duration and processes payment via integrated payment methods (credit cards, mobile apps). </strong>
                        </p>
                    </div>
                </div>
            </div>

            {/* When To use It */}
            <div
                className={`importance-section ${isInViewUseIt ? 'animate__animated animate__fadeInUp' : ''}`}
                ref={useitRef}
                style={{ opacity: isInViewUseIt ? 1 : 0, transition: 'opacity 0.5s' }}
            >
                <h2>
                    <span className="blue-text"> When </span> to <span className="blue-text"> use it? </span>
                </h2>
                <span id="helmet-pargrph">
                    Operates during business hours or events, ensuring accurate billing and parking slot management at all times.
                </span>
            </div>

            {/* Applications */}
            <div
                className={`importance-section ${isInViewApplication ? 'animate__animated animate__fadeInUp' : ''}`}
                ref={applicationRef}
                style={{ opacity: isInViewApplication ? 1 : 0, transition: 'opacity 0.5s' }}
            >
                <h2>
                    <span className="blue-text">Applications</span>
                </h2>
                <ul>
                    <li>
                        1. Vehicle entry and exit points in parking areas.
                    </li>
                    <li>
                        2. Along parking lanes to monitor space availability.
                    </li>
                    <li>
                        3. Integrated with payment kiosks or online apps.
                    </li>
                    <li>
                        4. Supports online booking for pre-reserving parking spaces.
                    </li>
                    <li>
                        5. Provides real-time parking slot availability to reduce search time.
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

export default AutomatedManagement;
