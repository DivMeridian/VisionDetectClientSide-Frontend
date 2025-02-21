import React, { useState, useEffect, useRef } from "react";
import "../../Style/EducationIndustry.css";
import { FaArrowLeft } from "react-icons/fa";
import EduIndustry from "../../Assest/EduIndustry.webp";
import { useNavigate } from "react-router-dom";
import Popup from '../Popup.jsx'; // Import the Popup component



const EducationIndustry = () => {
    const [animatePage, setAnimatePage] = useState(false);
    const sectionsRef = useRef([]);
        const [isPopupVisible, setIsPopupVisible] = useState(false);
    
        const navigate = useNavigate()
    
        const backButton = () => {
            navigate('/')
        }

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

    const togglePopup = () => {
        setIsPopupVisible((prev) => !prev);
      };
    
      const FaceRegistrationClickFunc = () => {
        navigate("/face-registrationTrial");
      };


    return (
        <div className={`education-container ${animatePage ? "page-animate" : ""}`}>
            <div className="education-header">
                <FaArrowLeft className="back-icon" onClick={backButton} />
                <h1><bold>Education Industry</bold></h1>
                <button className="request-btn" onClick={togglePopup}>Request Demo</button>
            </div>
            <h1>Transforming Education with VisionDetect.AI: Enhancing Safety, Security, and Efficiency</h1>

            <div className="education-image">
                <img src={EduIndustry} alt="Education Industry" />
            </div>

            <div className="education-content">
                {/* Section One */}
                <div ref={(el) => sectionsRef.current[0] = el} className="animated-section">
                    {/* <h1>Transforming Education with VisionDetect.AI: Enhancing Safety, Security, and Efficiency</h1> */}
                    <p>VisionDetect.ai offers cutting-edge AI-powered solutions tailored to the unique needs of educational institutions. From ensuring student safety to streamlining campus operations, VisionDetect.ai leverages advanced vision technology to create a secure, efficient, and conducive environment for learning.Crowd Detection for Safety and Compliance</p>
                    <br />
                    <p><strong>Managing large groups of students and staff in educational settings is challenging, especially during events or peak hours. VisionDetect.ai's crowd detection system ensures that campuses, school buildings, and event venues remain compliant with fire and safety regulations by:</strong></p>
                    <li>Monitoring real-time occupancy to prevent overcrowding.</li>
                    <li>Alerting administrators to high-density areas that pose safety risks.</li>
                    <li>Streamlining crowd management during emergencies, drills, or large-scale events.</li>
                </div>

                {/* Section Two */}
                <div ref={(el) => sectionsRef.current[1] = el} className="animated-section">
                    <h1>Student Behavior Monitoring</h1>
                    <p>VisionDetect.ai empowers educators to maintain discipline and ensure student well-being with behavior monitoring capabilities:</p>
                    <ul>
                        <li>Detecting unusual or unauthorized activities, such as students leaving premises without permission.</li>
                        <li>Identifying disruptive behaviors in classrooms, allowing timely intervention.</li>
                        <li>Promoting accountability by analyzing patterns in student engagement and activity.</li>
                    </ul>
                </div>

                {/* Section Three */}
                <div ref={(el) => sectionsRef.current[2] = el} className="animated-section">
                    <h1>Access Control to Sensitive Areas</h1>
                    <p>Protecting restricted areas, such as laboratories, exam halls, or administrative offices, is critical. VisionDetect.ai uses face verification and biometric access control to:</p>
                    <ul>
                        <li>Restrict entry to authorized personnel only.</li>
                        <li>Log access attempts for security and audit purposes.</li>
                        <li>Prevent unauthorized access to sensitive data or materials, ensuring academic integrity.</li>
                    </ul>
                </div>

                {/* Section Four */}
                <div ref={(el) => sectionsRef.current[3] = el} className="animated-section">
                    <h1>Ensuring Campus Security with Object and Anomaly Detection</h1>
                    <p>VisionDetect.ai integrates anomaly detection systems to maintain a safe campus environment by:</p>
                    <ul>
                        <li>Identifying potential threats, such as unattended bags, weapons, or other suspicious items.</li>
                        <li>Monitoring entrances for unauthorized items during security checks.</li>
                        <li>Sending real-time alerts to campus security teams, allowing swift responses to potential risks.</li>
                    </ul>
                </div>

                {/* Section Five */}
                <div ref={(el) => sectionsRef.current[4] = el} className="animated-section">
                    <h1>Real-Time Monitoring and Analytics</h1>
                    <p>The platform’s ability to offer real-time insights and analytics helps administrators make data-driven decisions. Some key features include:</p>
                    <ul>
                        <li>Dashboards to track trends in attendance, behavior, and resource utilization.</li>
                        <li>Reports on security incidents to improve protocols and reduce vulnerabilities.</li>
                        <li>Integration with existing security systems for centralized management.</li>
                    </ul>
                </div>


                {/* Section Six */}
                <div ref={(el) => sectionsRef.current[5] = el} className="animated-section">
                    <h1>Promoting Inclusivity and Efficiency</h1>
                    <p>VisionDetect.ai ensures accessibility and fairness by offering:</p>
                    <ul>
                        <li>Multi-language support and adaptable interfaces for diverse educational communities.</li>
                        <li>Enhanced assistance for students with disabilities, such as automatic detection of students in need of help.</li>
                        <li>Efficiency in managing check-ins, attendance, and event registrations through AI-powered systems.</li>
                    </ul>
                </div>


                {/* Section Seven */}
                <div ref={(el) => sectionsRef.current[6] = el} className="animated-section">
                    <h1>Safeguarding Mental and Emotional Well-being</h1>
                    <p>Beyond security, VisionDetect.ai contributes to a supportive educational environment:</p>
                    <ul>
                        <li>Identifying students who may exhibit signs of stress, bullying, or other emotional challenges.</li>
                        <li>Helping counselors and educators provide timely support.</li>
                    </ul>
                </div>
                {/* Section Nine */}
                <div ref={(el) => sectionsRef.current[7] = el} className="animated-section">
                    <h1>Revolutionizing Campus Life</h1>
                    <p>VisionDetect.ai is not just a security tool; it’s a comprehensive solution that enhances operational efficiency and fosters a thriving learning community. By bridging the gap between technology and education, VisionDetect.ai is setting new benchmarks for safety, inclusivity, and innovation in schools, colleges, and universities worldwide.
                        Whether it’s preventing overcrowding, enhancing classroom discipline, or securing sensitive areas, VisionDetect.ai empowers educators, staff, and students to focus on what matters most: education
                    </p>
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

export default EducationIndustry;
