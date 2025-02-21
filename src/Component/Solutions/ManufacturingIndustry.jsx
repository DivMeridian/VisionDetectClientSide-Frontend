import React, { useState, useEffect, useRef } from "react";
import "../../Style/EducationIndustry.css";
import { FaArrowLeft } from "react-icons/fa";
import manucacturing from "../../Assest/manucacturing.webp";
import { useNavigate } from "react-router-dom";
import Popup from '../Popup.jsx'; // Import the Popup component


const ManufacturingIndustry = () => {
    const [animatePage, setAnimatePage] = useState(false);
    const sectionsRef = useRef([]);
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    
    const navigate = useNavigate()
    
    const backButton = () => {
        navigate('/')
    }

    const togglePopup = () => {
        setIsPopupVisible((prev) => !prev);
      };
    
      const FaceRegistrationClickFunc = () => {
        navigate("/face-registrationTrial");
      };


    useEffect(() => {
        setAnimatePage(true);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("slide-up");
                    }
                });
            },
            { threshold: 0.2 }
        );

        sectionsRef.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            sectionsRef.current.forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    return (
        <div className={`education-container ${animatePage ? "page-animate" : ""}`}>
            <div className="education-header">
                <FaArrowLeft className="back-icon" onClick={backButton}/>
                <h1><bold>Manufacturing Industry</bold></h1>
                <button className="request-btn" onClick={togglePopup}>Request Demo</button>
            </div>
                    <h1>Transforming Workplace Safety with VisionDetect.ai in Manufacturing</h1>

            <div className="education-image">
                <img src={manucacturing} alt="Manufacturing Industry" />
            </div>

            <div className="education-content">
                {/* Section One */}
                <div ref={(el) => sectionsRef.current[0] = el} className="animated-section">
                    {/* <h1>Transforming Workplace Safety with VisionDetect.ai in Manufacturing</h1> */}
                    <p>In the manufacturing industry, ensuring workplace safety and operational efficiency is paramount. VisionDetect.ai, an advanced AI-powered platform, revolutionizes safety management by leveraging real-time image and video analytics to proactively identify and mitigate potential risks.</p>
                </div>

                {/* Section Two */}
                <div ref={(el) => sectionsRef.current[1] = el} className="animated-section">
                    <h1>Proactive Hazard Detection</h1>
                    <p>VisionDetect.ai enables manufacturers to adopt a proactive approach to safety, detecting unsafe working conditions and potential hazards before they escalate into incidents. For example:</p>
                    <ul>
                        <li><strong>Safety Gear Compliance:</strong> The system monitors workers for adherence to safety protocols, such as wearing helmets, gloves, high-visibility vests, or goggles. If a violation is detected, supervisors are alerted instantly, allowing for immediate corrective actions and minimizing risks.</li>
                        <li><strong>Access Control in High-Risk Areas:</strong> By monitoring multiple entry and exit points, VisionDetect.ai ensures that only authorized personnel access restricted or high-risk zones, helping prevent accidents and breaches.</li>
                    </ul>
                </div>

                {/* Section Three */}
                <div ref={(el) => sectionsRef.current[2] = el} className="animated-section">
                    <h1>Operational Anomaly Detection</h1>
                    <p>Beyond safety compliance, VisionDetect.ai excels in operational oversight by identifying:</p>
                    <ul>
                        <li><strong>Equipment Malfunctions:</strong> The system detects early signs of equipment wear, malfunctions, or misalignments through video analytics, enabling timely maintenance and reducing costly unplanned downtime.</li>
                        <li><strong>Production Line Irregularities:</strong> Irregularities in assembly line processes are flagged automatically, ensuring quality control and operational continuity.</li>
                    </ul>
                </div>

                {/* Section Four */}
                <div ref={(el) => sectionsRef.current[3] = el} className="animated-section">
                    <h1>Enhanced Site Security and Efficiency</h1>
                    <p>With the ability to monitor multiple points of access and control personnel flow in real-time, VisionDetect.ai significantly improves site security. The system ensures that high-risk areas are well-regulated, reducing the chances of unauthorized entries or safety violations. 
                    AI-Powered Insights for Continuous Improvement
                    </p>
                    <p>VisionDetect.ai generates comprehensive safety and operational reports, providing:</p>
                    <ul>
                        <li><strong>Key Performance Indicators (KPIs):</strong> Metrics such as incident response times, safety compliance rates, and equipment downtime trends.</li>
                        <li><strong>Root Cause Analysis:</strong> Insights into recurring issues, allowing manufacturers to address systemic challenges and improve long-term safety and efficiency.</li>
                    </ul>
                </div>

                {/* Section Five */}
                <div ref={(el) => sectionsRef.current[4] = el} className="animated-section">
                    <h1>Scalability Across Manufacturing Operations</h1>
                    <p>The platform's flexible design allows it to scale seamlessly across multiple manufacturing sites, adapting to diverse operational needs. Features such as customizable alerts, integration with existing safety systems, and multi-language support make VisionDetect.ai suitable for global operations. 
                    Integration with Advanced Technologies
                    </p>
                </div>


                {/* Section Six */}
                <div ref={(el) => sectionsRef.current[5] = el} className="animated-section">
                    <h1>VisionDetect.ai integrates with cutting-edge technologies to enhance its capabilities:</h1>
                    <ul>
                        <li><strong>IoT Devices:</strong> Collaboration with IoT sensors ensures comprehensive monitoring of environmental factors, such as temperature, humidity, and toxic gas levels.</li>
                        <li><strong>Robotic Systems:</strong> The platform can guide robotic inspections of equipment or hazardous areas, minimizing human exposure to risks.</li>
                        <li><strong>Machine Learning Models:</strong> Continuous learning enables the system to evolve with changing manufacturing processes and safety standards.</li>
                    </ul>
                </div>


                {/* Section Seven */}
                <div ref={(el) => sectionsRef.current[6] = el} className="animated-section">
                    <h1>Business Benefits</h1>
                    <ul>
                        <li><strong>Improved Safety Standards:</strong> By proactively identifying hazards, the platform helps create a safer work environment, reducing workplace injuries.</li>
                        <li><strong>Enhanced Productivity:</strong> Efficient monitoring and rapid response to anomalies ensure smooth and uninterrupted operations.</li>
                        <li><strong>Cost Savings:</strong> Preventing accidents, unplanned downtime, and quality control issues leads to measurable financial benefits.</li>
                        <li><strong>Regulatory Compliance:</strong> VisionDetect.ai aids in adhering to industry safety regulations, reducing the risk of fines or legal complications.</li>
                    </ul>
                </div>


                {/* Section Eight */}
                <div ref={(el) => sectionsRef.current[7] = el} className="animated-section">
                    <h1>Future of Manufacturing Safety</h1>
                    <p>As industries embrace Industry 4.0, VisionDetect.ai positions itself as a critical enabler of smart manufacturing. By combining safety compliance with operational oversight, it empowers businesses to protect their workforce, optimize processes, and achieve long-term sustainability.</p>
                </div>
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

export default ManufacturingIndustry;
