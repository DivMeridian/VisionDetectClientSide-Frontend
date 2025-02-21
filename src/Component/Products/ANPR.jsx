import React, { useState, useEffect, useRef } from "react"; // Fixed import
import "../../Style/FaceVerification.css";
import { Link, useNavigate } from "react-router-dom";
import assistance from "../../Assest/assistance.webp";
import { FiArrowLeft } from "react-icons/fi";
import { FaHome } from "react-icons/fa";


const ANPR = () => {

    let anprdetection = "https://visiondetect.blob.core.windows.net/visiondetectclientsidedata/Videos/anprdetection2.mp4"

    const [animatePage, setAnimatePage] = useState(false);
    const navigate = useNavigate()

    // Refs for sections
    const solutionRef = useRef(null);
    const importanceRef = useRef(null);
    const worksRef = useRef(null);
    const applicationRef = useRef(null);

    const [isInViewSolution, setIsInViewSolution] = useState(false);
    const [isInViewImportance, setIsInViewImportance] = useState(false);
    const [isInViewWorks, setIsInViewWorks] = useState(false);
    const [isInViewApplication, setIsInViewApplications] = useState(false);

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
                }
            });
        }, { threshold: 0.2 }); // Trigger when 20% of the section is visible

        if (solutionRef.current) observer.observe(solutionRef.current);
        if (importanceRef.current) observer.observe(importanceRef.current);
        if (worksRef.current) observer.observe(worksRef.current);
        if (applicationRef.current) observer.observe(applicationRef.current);

        return () => {
            if (solutionRef.current) observer.unobserve(solutionRef.current);
            if (importanceRef.current) observer.unobserve(importanceRef.current);
            if (worksRef.current) observer.unobserve(worksRef.current);
            if (applicationRef.current) observer.unobserve(applicationRef.current);
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
                <video className="hero-video" autoPlay loop muted src={anprdetection} />
            </div>

            {/* Content Section */}
            <div className="content-section">
                <div className="content-left">
                    <h1>Automatic Number Plate Recognition (ANPR)</h1>
                </div>
                <div className="content-right">
                    <button className="action-btn">Request a demo</button>
                </div>
            </div>

            {/* Solutions List */}
            <div className="solutions-list">

                <ul>
                    {[
                        { path: "/vehicle-authentication", label: "Automated Vehicle Authentication" },
                        { path: "/automated-management", label: "Automated Billing & Slot Management" }
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
                    Automated Number Plate Recognition (ANPR) technology is transforming how organizations manage vehicle access and security. By leveraging advanced optical character recognition (OCR) and AI-powered algorithms, ANPR systems capture, analyze, and authenticate vehicle license plates in real time, providing a seamless and secure entry experience.
                    In corporate parks, ANPR plays a crucial role in ensuring that only authorized personnel, such as employees, contractors, and pre-registered visitors, gain access to the premises. The system is integrated with a central database of registered vehicle details, enabling instant cross-verification. Upon matching the license plate, access is granted automatically through barriers or gates, eliminating the need for manual intervention or physical passes.
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
                        <strong>1. Enhancing Security: </strong>
                        Identifies threats such as unauthorized access, suspicious activities, or dangerous objects like weapons in public or high-security areas.
                    </li>
                    <li>
                        <strong>2. Improving Operational Efficiency: </strong>
                        Detects irregularities in processes, machinery, or systems, reducing downtime and preventing failures.
                    </li>
                    <li>
                        <strong>3. Proactive Decision-Making: </strong>
                        Enables early detection of anomalies for rapid response, minimizing potential risks or damage.
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
                            <strong>1. Data Collection: </strong>
                            <li> Captures input from sensors, cameras, or systems to create a comprehensive dataset. </li>
                        </p>
                    </div>
                    <div className="step">
                        <img src={assistance} alt="Voice assistance" />
                        <p>
                            <strong>2. Machine Learning Models: </strong>
                            <li> Uses supervised or unsupervised learning to identify patterns and establish what constitutes “normal” behavior. </li>
                        </p>
                    </div>
                    <div className="step">
                        <img src={assistance} alt="Voice assistance" />
                        <p>
                            <strong>3. Real-Time Monitoring: </strong>
                            <li> Continuously analyzes data streams or live feeds to spot deviations as they occur. </li>
                        </p>
                    </div>
                </div>

                <div className="how-it-works-steps">
                    <div className="step">
                        <img src={assistance} alt="Voice assistance" />
                        <p>
                            <strong>4. Alert Generation: </strong>
                            <li> Sends notifications or triggers automated responses when anomalies are detected, providing insights for swift action. </li>
                        </p>
                    </div>
                </div>
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
        </div>
    );
};

export default ANPR;
