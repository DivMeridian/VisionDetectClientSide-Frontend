import React, { useRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Style/FaceVerification.css";
import assistance from "../../Assest/assistance.webp";
import { FiArrowLeft } from "react-icons/fi";
import Popup from '../Popup.jsx'; // Import the Popup component
import { FaHome } from "react-icons/fa";



const HelmetDetection = () => {

    let helmets=  "https://visiondetect.blob.core.windows.net/visiondetectclientsidedata/Videos/helmetDetection.mp4"

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
                <video className="hero-video2" autoPlay loop muted src={helmets} />
            </div>

            {/* Content Section */}
            <div className="content-section">
                <div className="content-left">
                    <h1>Helmet Detection</h1>
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
                        <Link to="/mobile-detection">
                            <button className="solution-btn">Mobile Phone Detection</button>
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
                        { path: "/mobile-detection", label: "Mobile Phone Detection" },
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
                    <strong> What is Helmet Detection? </strong>
                    <br></br>
                    <br></br>
                    Helmet detection is a safety compliance system that uses computer vision to identify whether individuals are wearing helmets, which are critical protective gear in hazardous environments. The system can also be expanded to detect other types of safety gear such as high-visibility vests, goggles, steel-toe boots, and safety gloves.
                </p>
            </div>

            <div
                className={`importance-section ${isInViewImportance ? 'animate__animated animate__fadeInUp' : ''}`}
                ref={importanceRef}
                style={{ opacity: isInViewImportance ? 1 : 0, transition: 'opacity 0.5s' }}
            >
                <h2>
                    <span className="blue-text"> Why is</span> Helmet Detection <span className="blue-text">important</span> for you?
                </h2>
                <span id="helmet-pargrph">
                    Helmet detection ensures safety compliance, reducing the risk of injuries in environments where head protection is essential.
                </span>
                <ul>
                    {/* <strong>It helps in:</strong> */}
                    <strong>
                        <li>
                            1. Preventing injuries by ensuring workers wear the proper safety gear.
                        </li>
                        <li>
                            2. Enhancing security by detecting safety lapses in real-time.
                        </li>
                        <li>
                            3. Improving operational efficiency by automating safety checks.
                        </li>
                        <li>
                            4. Increasing compliance with safety regulations and industry standards.
                        </li>
                    </strong>
                </ul>
            </div>

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
                    <div className="step" id="wrk">
                        <img src={assistance} alt="Voice assistance" />
                        <span id="helmet-pargrph">
                            The system uses advanced computer vision technologies like Azure Computer Vision to detect the presence of helmets or other protective gear. It analyzes live camera feeds, real-time images, or videos to identify whether individuals are wearing the required safety equipment. The system can be customized to detect a variety of safety items based on industry needs.
                        </span>
                        <ul id="list">
                            <li>
                                <strong>1. Data Collection: </strong>
                                Camera systems or CCTV feeds capture live footage.
                            </li>
                            <li>
                                <strong>1. Processing: </strong>
                                The video or image feed is processed through machine learning models to identify helmets or other safety gear.
                            </li>
                            <li>
                                <strong>1. Notification/Action: </strong>
                                The system can trigger alerts or notifications when a safety violation is detected (e.g., a worker is not wearing a helmet).
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

            <div
                className={`importance-section ${isInViewUseIt ? 'animate__animated animate__fadeInUp' : ''}`}
                ref={useitRef}
                style={{ opacity: isInViewUseIt ? 1 : 0, transition: 'opacity 0.5s' }}
            >
                <h2>
                    <span className="blue-text"> When </span> to <span className="blue-text"> use it? </span>
                </h2>
                <span id="helmet-pargrph">
                    Helmet detection is used in real-time situations where safety compliance is crucial, such as during:
                </span>
                <ul>
                    <li>
                        <strong>1. Shift starts: </strong>
                        When workers begin their work and are required to have safety gear on.
                    </li>
                    <li>
                        <strong>2.  Ongoing monitoring: </strong>
                        For continuous oversight of personnel in hazardous environments.
                    </li>
                    <li>
                        <strong>3. Safety audits: </strong>
                        During random or scheduled safety checks.
                    </li>
                    <li>
                        <strong>4. Incident prevention: </strong>
                        Whenever an unsafe condition is detected, such as someone without a helmet.
                    </li>
                </ul>
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
                    Helmet detection systems can be implemented in various industries and environments, including:
                </span>
                <ul>
                    <li>
                        <strong>1. Construction & Manufacturing: </strong> Detecting helmet usage in construction sites, factories, and warehouses.
                    </li>
                    <li>
                        <strong>2.  Sports or Cycling: </strong> Ensuring participants are wearing helmets during cycling, motorcycling, or other sports events.
                    </li>
                    <li>
                        <strong>3. Mining & Underground Operations: </strong> Ensuring that workers in high-risk mining environments are protected.
                    </li>
                    <li>
                        <strong>4. Custom Environments: </strong> The system can be tailored to monitor safety compliance in any industry requiring personal protective equipment (PPE).
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

export default HelmetDetection;
