import React, { useState, useEffect, useRef } from "react";
import "../../Style/EducationIndustry.css";
import { FaArrowLeft } from "react-icons/fa";
import realestate from "../../Assest/realestate.webp";
import { useNavigate } from "react-router-dom";
import Popup from '../Popup.jsx'; // Import the Popup component



const RealEstateIndustry = () => {
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
                <h1><bold>Real-Estate Industry</bold></h1>
                <button className="request-btn" onClick={togglePopup}>Request Demo</button>
            </div>
            <h1>Revolutionizing Real Estate & Contracting with VisionDetect.ai</h1>


            <div className="education-image">
                <img src={realestate} alt="Real-Estate Industry" />
            </div>

            <div className="education-content">
                {/* Section One */}
                <div ref={(el) => sectionsRef.current[0] = el} className="animated-section">
                    {/* <h1>Revolutionizing Real Estate & Contracting with VisionDetect.ai</h1> */}
                    <p>The construction and real estate industries are embracing digital transformation to address long-standing challenges in project management, safety, and security. VisionDetect.ai, powered by advanced artificial intelligence and computer vision technologies, is redefining how construction projects are managed and secured, offering unparalleled value to stakeholders.</p>
                </div>

                {/* Section Two */}
                <div ref={(el) => sectionsRef.current[1] = el} className="animated-section">
                    <h1>1. Enhancing Safety Compliance on Construction Sites</h1>
                    <p>Worker safety is paramount in construction, where risks of accidents and injuries are prevalent. VisionDetect.ai offers real-time monitoring of construction sites, ensuring that workers comply with safety protocols and wear required protective gear such as helmets, gloves, and high-visibility vests. By automatically detecting and flagging violations, the system helps to:</p>
                    <ul>
                        <li>Reduce workplace injuries and fatalities.</li>
                        <li>Improve compliance with safety regulations.</li>
                        <li>Foster a culture of safety among workers.</li>
                    </ul>
                </div>

                {/* Section Three */}
                <div ref={(el) => sectionsRef.current[2] = el} className="animated-section">
                    <h1>2. Advanced Access Control and Vehicle Monitoring</h1>
                    <p>Securing construction sites against unauthorized access is critical. VisionDetect.ai integrates state-of-the-art facial recognition and Automatic Number Plate Recognition (ANPR) technologies to monitor and control entry points.</p>
                    <ul>
                        <li><strong>Facial Verification :</strong> Ensures that only authorized personnel can enter restricted areas, preventing unauthorized access and safeguarding sensitive assets.</li>
                        <li><strong>Vehicle Tracking :</strong> ANPR enables tracking of construction vehicles, ensuring that only approved vehicles are allowed on-site. This prevents theft, misuse, and unauthorized parking, streamlining operations.</li>
                    </ul>
                </div>

                {/* Section Four */}
                <div ref={(el) => sectionsRef.current[3] = el} className="animated-section">
                    <h1>3. Real-Time Anomaly Detection</h1>
                    <p>Beyond safety and access control, VisionDetect.ai offers robust anomaly detection features to identify potential risks or unusual activities on-site. The system can detect:</p>
                    <ul>
                        <li><strong>Safety Anomalies:</strong> Absence of safety gear or unsafe practices like working at heights without harnesses.</li>
                        <li><strong>Operational Anomalies:</strong> Equipment misuse, overcrowding, or unauthorized material handling.</li>
                        <li><strong>Security Anomalies:</strong> Suspicious activities such as loitering or attempts to breach secured areas.
                            When anomalies are detected, real-time alerts are sent to site managers, enabling prompt intervention and minimizing potential damages or delays.
                        </li>
                    </ul>
                </div>

                {/* Section Five */}
                <div ref={(el) => sectionsRef.current[4] = el} className="animated-section">
                    <h1>4. Preventing Theft and Asset Mismanagement</h1>
                    <p>Theft and unauthorized usage of materials or equipment are common concerns in construction. By combining face verification, ANPR, and real-time monitoring, VisionDetect.ai helps prevent asset mismanagement and theft. The system provides a clear audit trail of who accessed the site and when, ensuring accountability.</p>
                </div>


                {/* Section Six */}
                <div ref={(el) => sectionsRef.current[5] = el} className="animated-section">
                    <h1>5. Improving Operational Efficiency</h1>
                    <p>VisionDetect.ai streamlines operations by automating routine monitoring tasks and generating actionable insights from captured data. Construction managers can leverage these insights to:</p>
                    <ul>
                        <li>Optimize workforce deployment.</li>
                        <li>Identify bottlenecks and delays.</li>
                        <li>Ensure better resource utilization and waste management.</li>
                    </ul>
                </div>


                {/* Section Seven */}
                <div ref={(el) => sectionsRef.current[6] = el} className="animated-section">
                    <h1>6. Integration with Smart Alert Systems</h1>
                    <p>VisionDetect.ai is equipped with real-time alert capabilities to notify managers of any incidents, violations, or unauthorized activities immediately. Alerts can be customized to reach relevant stakeholders via mobile notifications, email, or integrated dashboards, enabling swift and effective responses.</p>
                </div>


                {/* Section Eight */}
                <div ref={(el) => sectionsRef.current[7] = el} className="animated-section">
                    <h1>7. Future-Ready Technology for Construction</h1>
                    <p>The platform seamlessly integrates with other advanced technologies, such as drones, IoT sensors, and Building Information Modeling (BIM) systems, offering a holistic approach to site management. Whether it’s tracking project progress, ensuring environmental compliance, or managing logistics, VisionDetect.ai empowers real estate and contracting firms to embrace smart construction practices.</p>
                </div>


                {/* Section Nine */}
                <div ref={(el) => sectionsRef.current[8] = el} className="animated-section">
                    <h1>Key Benefits of VisionDetect.ai in Real Estate and Contracting</h1>
                    <ul>
                        <li><strong>Cost Savings:</strong> Reduces losses from theft, injuries, and accidents</li>
                        <li><strong>Regulatory Compliance:</strong> Ensures adherence to safety and labor regulations.</li>
                        <li><strong>Enhanced Security:</strong> Prevents unauthorized access and asset mismanagement.</li>
                        <li><strong>Data-Driven Decision Making:</strong> Provides insights to optimize project timelines and budgets.</li>
                        <li><strong>Sustainability:</strong> Promotes efficient resource utilization and waste reduction.</li>
                    </ul>
                </div>

                {/* Section Ten */}
                <div ref={(el) => sectionsRef.current[9] = el} className="animated-section">
                    <h1>VisionDetect.ai: Building the Future of Construction </h1>
                    <p>In an era where efficiency, safety, and security are non-negotiable, VisionDetect.ai offers a game-changing solution for the real estate and contracting sectors. By empowering managers with AI-powered tools, the platform ensures that construction projects are not only completed on time and within budget but also adhere to the highest standards of safety and security.</p>
                    <p>Embrace the future of construction management with VisionDetect.ai—because every project deserves to be smarter, safer, and more secure</p>
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

export default RealEstateIndustry;
