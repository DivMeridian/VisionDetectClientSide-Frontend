import React, { useState, useEffect, useRef } from "react"; // Fixed import
import "../../Style/FaceVerification.css";
import { Link, useNavigate } from "react-router-dom";
import assistance from "../../Assest/assistance.webp";
import { FiArrowLeft } from "react-icons/fi";
import { FaHome } from "react-icons/fa";

import Popup from '../Popup.jsx'; // Import the Popup component


const VehicleAuthentication = () => {

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
                    <FiArrowLeft className="text-white h-5 w-5 cursor-pointer" />
                </div>
                    <div className="absolute w-10 h-10 m-2 flex items-center justify-center left-[3rem] bg-black rounded-full cursor-pointer z-100" onClick={() =>navigate('/') }>
                          <FaHome className="text-white h-5 w-5 cursor-pointer"/>
                        </div>
                <video className="hero-video" autoPlay loop muted src={anprdetection} />
            </div>

            {/* Content Section */}
            <div className="content-section">
                <div className="content-left">
                    <h1>Automated Vehicle Authentication</h1>
                </div>
                <div className="content-right">
                    <button className="action-btn" onClick={togglePopup}>Request a demo</button>
                </div>
            </div>

            {/* Solutions List */}
            <div className="solutions-list">
                {/* <ul>
                    <li>
                        <Link to="/automated-management">
                            <button className="solution-btn">Automated Billing & Slot Management</button>
                        </Link>
                    </li>
                </ul> */}
                <ul>
                    {[
                        { path: "/automated-management", label: "Automated Billing & Slot Management" },

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
                    Automated Number Plate Recognition (ANPR) technology authenticates vehicles entering a corporate park by reading license plates and verifying them against a pre-registered database of authorized vehicles. This ensures that only employees, contractors, and authorized visitors can access the premises.
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
                        1. Reduces manual verification at security checkpoints, improving entry efficiency.                    </li>
                    <li>
                        2. Prevents unauthorized vehicles from accessing sensitive areas.
                    </li>
                    <li>
                        3. Streamlines parking processes, eliminating the need for physical passes or ID cards.
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
                            <strong>1. High-resolution cameras capture the license plate of each incoming vehicle. </strong>
                        </p>
                    </div>
                    <div className="step">
                        <img src={assistance} alt="Voice assistance" />
                        <p>
                            <strong>2. The system compares the plate number against a centralized database in real-time. </strong>
                        </p>
                    </div>
                    <div className="step">
                        <img src={assistance} alt="Voice assistance" />
                        <p>
                            <strong>3. If a match is found, the gate opens automatically; otherwise, the vehicle is flagged for further inspection. </strong>
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
                    This system runs continuously, providing real-time verification, particularly useful during peak hours or events when traffic volume is high. </span>
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
                <span id="helmet-pargrph">
                    ANPR cameras are strategically installed at corporate park entrances, parking garages, restricted zones, and loading areas.                </span>
                <ul>
                    <li>
                        1. Tracks vehicle entry and exit patterns for auditing.
                    </li>
                    <li>
                        2. Notifies security staff of suspicious vehicles based on preset criteria.
                    </li>
                    <li>
                        3. Data insights can optimize parking management and enhance traffic flow.
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

export default VehicleAuthentication;
