import React, { useState, useRef, useEffect } from "react";
import "../../Style/FaceVerification.css";
import { Link, useNavigate } from "react-router-dom";
import assistance from "../../Assest/assistance.webp";
import { FiArrowLeft } from "react-icons/fi";
import Popup from '../Popup.jsx'; // Import the Popup component
import { FaHome } from "react-icons/fa";


const ApartmentVerification = () => {

    let gatevideo= "https://visiondetect.blob.core.windows.net/visiondetectclientsidedata/Videos/apartmentvideo.mp4"

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
                <video className="hero-video" autoPlay loop muted src={gatevideo} />
            </div>

            {/* Content Section */}
            <div className="content-section">
                <div className="content-left">
                    <h1>Apartment Entry Verification</h1>
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
                        { path: "/face-kyc", label: "Face KYC (Know Your Customer)" },
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

            {/* Apartment Entry Verification Section */}
            <div
                className={`solution-paragraph ${isInViewSolution ? 'animate__animated animate__fadeInUp' : ''}`}
                ref={solutionRef}
                style={{ opacity: isInViewSolution ? 1 : 0, transition: 'opacity 0.5s' }}
            >                <p>
                    <strong>What is Apartment Entry Verification?</strong>
                    <br />
                    <br />
                    Apartment Entry Verification is a secure, convenient, and contactless access control system for residential buildings that uses facial recognition technology. It replaces traditional access methods like keys, cards, or PIN codes, offering a seamless and modern alternative for managing entry and exit. This use case focuses on leveraging face recognition for secure, convenient, and contactless access control in residential buildings. It’s an upgrade from traditional access methods like keys, cards, or PIN codes.
                </p>
            </div>

            {/* Why is Apartment Entry Verification important? */}
            <div
                className={`importance-section ${isInViewImportance ? 'animate__animated animate__fadeInUp' : ''}`}
                ref={importanceRef}
                style={{ opacity: isInViewImportance ? 1 : 0, transition: 'opacity 0.5s' }}
            >                <h2>
                    <span className="blue-text">Why is</span> Apartment Entry Verification <span className="blue-text">so important</span> for you?
                </h2>
                <ul>
                    <li>
                        <strong>1. Maximum Security:</strong> Ensures only authorized residents and pre-registered visitors gain access, reducing unauthorized entries and enhancing safety.
                    </li>
                    <li>
                        <strong>2. Convenience for Residents:</strong>  Eliminates the need for physical keys or access cards, which can be lost or stolen.
                    </li>
                    <li>
                        <strong>3. Visitor Management:</strong> Simplifies pre-approval of visitors, reducing manual intervention by security personnel.
                    </li>
                    <li>
                        <strong>4. Hygiene:</strong> Provides a touch-free solution, minimizing the risk of surface contamination.
                    </li>
                    <li>
                        <strong>5. Real-Time Monitoring:</strong> Logs and monitors all entries and exits, aiding in emergency responses or investigations.
                    </li>
                    <li>
                        <strong>6. Customization:</strong> Offers granular access control for residents, staff, and visitors based on predefined permissions.
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
                            <strong>1. Initial Registration:</strong>
                            <li>Residents register their information and upload necessary identification documents.</li>
                        </p>
                    </div>
                    <div className="step">
                        <img src={assistance} alt="Voice assistance" />
                        <p>
                            <strong>2. Visitor Pre-registration:</strong>
                            <li>Approve visitors in advance and generate unique access credentials for them.</li>
                        </p>
                    </div>
                    <div className="step">
                        <img src={assistance} alt="Voice assistance" />
                        <p>
                            <strong>3. Real-Time Logs:</strong>
                            <li>Track entry and exit logs in real time for improved security and management.</li>
                        </p>
                    </div>
                </div>

                <div className="how-it-works-steps">
                    <div className="step">
                        <img src={assistance} alt="Voice assistance" />
                        <p>
                            <strong>4. Smart Integration:</strong>
                            <li>Integrates seamlessly with building management systems for enhanced oversight.</li>
                        </p>
                    </div>
                    <div className="step">
                        <img src={assistance} alt="Voice assistance" />
                        <p>
                            <strong>5. Access Levels:</strong>
                            <li>Configurable permissions allow controlled access for residents, staff, and visitors.</li>
                        </p>
                    </div>
                </div>
            </div>

            {/* Usage Scenarios */}
            <div
                className={`applications-section ${isInViewApplication ? 'animate__animated animate__fadeInUp' : ''}`}
                ref={applicationRef}
                style={{ opacity: isInViewApplication ? 1 : 0, transition: 'opacity 0.5s' }}
            >

                <h2>
                    <span className="blue-text">When</span> can it be <span className="blue-text">used?</span>
                </h2>
                <ul className="applications-list" id="face">
                    <li>
                        <strong>During Resident Entry:</strong> Enables instant recognition and access without the need for manual keys or cards.
                    </li>
                    <li>
                        <strong>For Visitor Access:</strong> Simplifies entry for pre-registered visitors or deliveries.
                    </li>
                    <li>
                        <strong>In Emergencies:</strong> Provides real-time data to track movements and ensure resident safety.
                    </li>
                    <li>
                        <strong>Routine Management:</strong> Offers consistent, hassle-free access control for everyday use.
                    </li>
                </ul>
            </div>

            <div
                className={`importance-section ${isInViewUseIt ? 'animate__animated animate__fadeInUp' : ''}`}
                ref={useitRef}
                style={{ opacity: isInViewUseIt ? 1 : 0, transition: 'opacity 0.5s' }}
            >
                <h2>
                    <span className="blue-text">Where</span> is it <span className="blue-text">applicable?</span>
                </h2>
                <ul>
                    <li>
                        <strong>1. Residential Buildings:</strong> Apartments, gated communities, or condominiums.
                    </li>
                    <li>
                        <strong>2. Main Entry Points:</strong> Lobbies, gates, or front doors.
                    </li>
                    <li>
                        <strong>3. Restricted Area:</strong> Gym, pool, or parking spaces with limited access.
                    </li>
                    <li>
                        <strong>4. Security Desk:</strong> For monitoring logs and handling exceptions.
                    </li>
                    <li>
                        <strong>5. Integrated Smart Homes:</strong> Where additional automation features are desired.
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

export default ApartmentVerification;