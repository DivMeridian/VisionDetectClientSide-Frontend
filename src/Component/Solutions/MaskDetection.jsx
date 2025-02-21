import React, { useRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Style/FaceVerification.css";
import assistance from "../../Assest/assistance.webp";
import { FiArrowLeft } from "react-icons/fi";
import Popup from '../Popup.jsx'; // Import the Popup component
import { FaHome } from "react-icons/fa";



const MaskDetection = () => {

    let anomalydetection="https://visiondetect.blob.core.windows.net/visiondetectclientsidedata/Videos/anomalydetection2.mp4"

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
                <video className="hero-video" autoPlay loop muted src={anomalydetection} />
            </div>

            {/* Content Section */}
            <div className="content-section">
                <div className="content-left">
                    <h1>Mask Detection</h1>
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
                    <strong> What is Mask Detection? </strong>
                    <br></br>
                    <br></br>
                    Mask detection refers to the use of technology to determine whether individuals are wearing masks. This can extend to the detection of other types of personal protective equipment (PPE) such as gloves, face shields, goggles, and specialized clothing. It is particularly useful in settings where health and safety are paramount.
                </p>
            </div>

            {/* Why is Exam Face Registration & Verification important  */}
            <div
                className={`importance-section ${isInViewImportance ? 'animate__animated animate__fadeInUp' : ''}`}
                ref={importanceRef}
                style={{ opacity: isInViewImportance ? 1 : 0, transition: 'opacity 0.5s' }}
            >
                <h2>
                    <span className="blue-text"> Why is</span> Mask Detection <span className="blue-text">important</span> for you?
                </h2>
                <span id="pargrph">
                    The detection of masks and other PPE is crucial for enforcing health protocols and safety regulations, especially in public or crowded spaces. Mask mandates were widely implemented during the pandemic to curb the spread of infectious diseases, and ensuring compliance with such mandates can help prevent outbreaks in sensitive areas. The system can also adapt to detect various PPE elements, enhancing workplace safety and public health.
                </span>
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
                    <div className="step" id="wrk">
                        <img src={assistance} alt="Voice assistance" />
                        <span id="pargrph">
                            The system typically uses computer vision and machine learning models to analyze images or video feeds and detect the presence of masks or other safety equipment. The detection process can be further refined using AI models trained specifically for identifying masks and PPE in different environments. These models can be integrated with camera systems placed in strategic locations such as entry points, hallways, or assembly areas.
                        </span>
                    </div>
                </div>
            </div>

            <div
                className={`importance-section ${isInViewUseIt ? 'animate__animated animate__fadeInUp' : ''}`}
                ref={useitRef}
                style={{ opacity: isInViewUseIt ? 1 : 0, transition: 'opacity 0.5s' }}
            >                <h2>
                    <span className="blue-text"> When </span> to <span className="blue-text">use it?</span>
                </h2>
                <span id="pargrph">
                    Mask detection can be applied in real-time as individuals move through monitored areas. For example, the system can alert when someone enters a building or space without a mask, or when they fail to wear other required PPE. It can also be used for compliance monitoring during scheduled check-ins, meetings, or workplace activities.
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
                        <strong>1. Healthcare Settings: </strong> Hospitals, clinics, and healthcare facilities can use mask detection to ensure patients, staff, and visitors comply with mask-wearing policies.
                    </li>
                    <li>
                        <strong>2.  Public Spaces: </strong> Airports, malls, restaurants, and retail stores are ideal environments for mask detection, helping enforce safety measures in crowded locations.
                    </li>
                    <li>
                        <strong>3. Workplaces: </strong> In industries such as food production, healthcare, and construction, mask detection can help ensure that workers are adhering to health and safety standards.
                    </li>
                    <li>
                        <strong>4. Adaptable Across Industries: </strong> Mask detection can be easily customized to monitor other forms of PPE based on the specific safety requirements of various environments, such as detecting face shields or gloves in industries where such equipment is mandatory.
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

export default MaskDetection;
