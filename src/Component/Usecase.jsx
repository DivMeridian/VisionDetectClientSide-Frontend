import React, { useState, useEffect, useRef } from "react";
import { FaArrowLeft } from "react-icons/fa";
import '../Style/UseCase.css'
import { useNavigate } from "react-router-dom";
import Popup from './Popup.jsx'

const UseCase = () => {
    
    let croweded="https://visiondetect.blob.core.windows.net/visiondetectclientsidedata/Videos/croweded.mp4"
    let maskdt="https://visiondetect.blob.core.windows.net/visiondetectclientsidedata/Videos/maskdt.mp4"
    let hairnetdt="https://visiondetect.blob.core.windows.net/visiondetectclientsidedata/Videos/hairnetdt.mp4"
    let anprdt="https://visiondetect.blob.core.windows.net/visiondetectclientsidedata/Videos/anprdt.mp4"
    
    const [animatePage, setAnimatePage] = useState(false);
    const sectionsRef = useRef([]);
    const navigate = useNavigate()
    const [isPopupVisible, setIsPopupVisible] = useState(false);


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

    const backButton = () => {
        navigate('/')
    }

    const togglePopup = () => {
        setIsPopupVisible((prev) => !prev);
    };

    const FaceRegistrationClickFunc = () => {
        navigate("/face-registrationTrial");
    };

    return (
        <div className={`usecase-container ${animatePage ? "page-animate" : ""}`}>
            <div className="usecase-header">
                <FaArrowLeft className="back-icon" onClick={backButton} />
                {/* <h1><bold>Technical corner</bold></h1> */}
                {/* <button className="request-btn" onClick={togglePopup}>Request Demo</button> */}
            </div>
            <div className="flex justify-center items-center mt-[-2rem]">
                <h1 id="usecasetext">Our Use Cases</h1>

            </div>
 
            {/* <div ref={(el) => sectionsRef.current[0] = el} className="animated-section">
                <h1>Product Overview and Documentation</h1>
            </div> */}
            {/* <div className="education-image">
                <img src={technicalcorner} alt="Manufacturing Industry" />
            </div> */}
 
            <div className="education-content">
                {/* Section One */}
                <div ref={(el) => sectionsRef.current[0] = el} className="usecase-animated-section">
                    <div className="video-container">
                        <video autoPlay loop muted playsInline className="video-background">
                            <source src={croweded} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="usecase-text">
                        <h1>Thermal-based crowd detection system</h1>
                        <ul>
                            <li><strong>Heat-based crowd density analysis:</strong> Uses thermal imaging to detect and analyze crowd density in real time. </li>
                            <li><strong>Automated congestion alerts:</strong> Identifies overcrowded areas and triggers alerts for better crowd management. </li>
                            <li><strong>Enhanced public safety:</strong> Helps authorities monitor gatherings and enforce social distancing regulations. </li>
                            <li><strong>Integration with security systems:</strong> Can be combined with surveillance cameras for continuous monitoring in high-traffic zones. </li>
                        </ul>
                    </div>
                </div>
 
                {/* Section Two */}
                <div ref={(el) => sectionsRef.current[1] = el} className="usecase-animated-section">
                    <div className="usecase-text">
                        <h1>Mask Detection</h1>
                        <ul>
                            <li><strong>AI-powered face mask detection:</strong> The system identifies individuals wearing masks using bounding boxes and confidence scores. </li>
                            <li><strong>Public safety monitoring:</strong> Helps track mask compliance in crowded areas to enforce health regulations. </li>
                            <li><strong>Automated surveillance:</strong> Can integrate with CCTV systems for real-time analysis and reporting. </li>
                            <li><strong>Pandemic response enforcement:</strong> Useful for ensuring adherence to COVID-19 guidelines in public spaces. </li>
                        </ul>
                    </div>
                    <div className="video-container">
                        <video autoPlay loop muted playsInline className="video-background">
                            <source src={maskdt} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
 
                {/* Section Three */}
                <div ref={(el) => sectionsRef.current[2] = el} className="usecase-animated-section">
                    <div className="video-container">
                        <video autoPlay loop muted playsInline className="video-background">
                            <source src={hairnetdt} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="usecase-text">
                        <h1>Hairnet Detection</h1>
                        <ul>
                            <li><strong>Workplace compliance monitoring:</strong> The system detects employees wearing hairnets to ensure hygiene standards. </li>
                            <li><strong>AI-based object detection:</strong> Bounding boxes with confidence scores identify individuals wearing hairnets. </li>
                            <li><strong>Food safety enforcement:</strong> Helps prevent contamination in food processing or pharmaceutical environments. </li>
                            <li><strong>Automated inspection:</strong> Can be integrated with CCTV for real-time compliance tracking and reporting. </li>
                        </ul>
                    </div>
                </div>
 
                {/* Section Four */}
                <div ref={(el) => sectionsRef.current[3] = el} className="usecase-animated-section">
                    <div className="usecase-text">
                        <h1>ANPR (Automatic Number Plate Recognition)</h1>
                        <ul>
                            <li><strong>Multiple vehicles detected:</strong> The system identifies and processes license plates for both motorcycles and cars. </li>
                            <li><strong>OCR-based number plate extraction :</strong> The plate numbers "DR 1080 DH" (car) and "DB 3093 H" (motorcycle) are accurately detected. </li>
                            <li><strong>Bounding box detection:</strong> Green and red bounding boxes highlight detected vehicles and their plates for enhanced tracking. </li>
                            <li><strong>Real-world application:</strong>  Suitable for traffic monitoring, law enforcement, or parking management with live video feed analysis. </li>
                        </ul>
                    </div>
                    <div className="video-container">
                        <video autoPlay loop muted playsInline className="video-background">
                            <source src={anprdt} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
 
                {/* Section Five */}
                {/* <div ref={(el) => sectionsRef.current[4] = el} className="animated-section">
                    <h1>Security and Compliance</h1>
                    <p>Our platform prioritizes data security and compliance with industry standards. We ensure that all data is encrypted both in transit and at rest. The integration of SAS-enabled Azure Blob Storage further restricts data access to authorized users only, ensuring compliance with stringent security policies.</p>
                </div> */}
 
 
                {/* Section Six */}
                {/* <div ref={(el) => sectionsRef.current[5] = el} className="animated-section">
                    <h1>Key Security Features</h1>
                    <ul>
                        <li><strong>SAS (Shared Access Signature) for Blob Storage:</strong> Provides secure, time-limited access to specific resources.</li>
                        <li><strong>Encryption at Rest:</strong> All stored data is encrypted, ensuring data confidentiality.</li>
                        <li><strong>Real-Time Video Stream Encryption:</strong> Video streams are encrypted during transmission to protect sensitive visual data.</li>
                    </ul>
                    <p>To ensure optimal performance, we recommend using high-quality IP cameras that support RTSP streaming. Here are our recommended specifications:</p>
                </div> */}
 
 
                {/* Section Seven */}
                {/* <div ref={(el) => sectionsRef.current[6] = el} className="animated-section">
                    <h1>Camera Recommendations</h1>
                    <ul>
                        <li><strong>Resolution:</strong> 1080p or higher for accurate face recognition.</li>
                        <li><strong>Frame Rate:</strong> 30 FPS or higher to ensure smooth video streaming.</li>
                        <li><strong>Compression:</strong> H.264 or H.265 for efficient bandwidth usage.</li>
                    </ul>
                </div> */}
 
 
                {/* Section Eight */}
                {/* <div ref={(el) => sectionsRef.current[7] = el} className="animated-section">
                    <h1>Minimum & Recommended Hardware Requirements</h1>
                    <ul>
                        <li><strong>Minimum GPU Requirements:</strong> Standard_NC4as_T4_v3 or equivalent for real-time face recognition.</li>
                        <li><strong>Recommended GPU:</strong> Standard_NC8as_T4_v3 for larger-scale deployments.</li>
                    </ul>
                </div> */}
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

export default UseCase;
