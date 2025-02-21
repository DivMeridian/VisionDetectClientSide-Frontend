import React, { useState, useEffect, useRef } from "react";
import "../../Style/EducationIndustry.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Popup from '../Popup.jsx'; // Import the Popup component


const Technicalcorner = () => {

    let crowd= "https://visiondetect.blob.core.windows.net/visiondetectclientsidedata/Videos/crowd.mp4"

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
        <div className={`education-container ${animatePage ? "page-animate" : ""}`}>
            <div className="education-header">
                <FaArrowLeft className="back-icon" onClick={backButton} />
                {/* <h1><bold>Technical corner</bold></h1> */}
                <h1>Technical corner</h1>
                <button className="request-btn" onClick={togglePopup}>Request Demo</button>
            </div>

            {/* <div ref={(el) => sectionsRef.current[0] = el} className="animated-section">
                <h1>Product Overview and Documentation</h1>
            </div> */}

            <h1>Product Overview and Documentation</h1>


            {/* <div className="education-image">
                <img src={technicalcorner} alt="Manufacturing Industry" />
            </div> */}

<div className="videobox">
  <video autoPlay loop muted playsInline className="video-background12">
    <source src={crowd} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>



            <div className="education-content">
                {/* Section One */}
                <div ref={(el) => sectionsRef.current[0] = el} className="animated-section">
                    {/* <h1>Product Overview and Documentation</h1> */}
                    <h4>Azure-Powered Face Recognition System</h4>
                    <p>Welcome to the developer hub for our Visiondetect.ai platform. Our platform leverages high-performance, GPU-enabled Azure virtual machines and cutting-edge data security features to deliver reliable, scalable, and secure face recognition solutions.</p>
                </div>

                {/* Section Two */}
                <div ref={(el) => sectionsRef.current[1] = el} className="animated-section">
                    <h1>Product Features</h1>
                    <ul>
                        <li><strong>AI-Powered Recognition:</strong> Our system utilizes the latest AI algorithms for accurate and efficient face recognition, anomaly detection, and video stream processing.</li>
                        <li><strong>Highly Secure Data Storage:</strong> All data, including face images and metadata, are stored securely in Azure's highly secure Data Lakes with SAS (Shared Access Signatures) enabled for restricted access control.</li>
                        <li><strong>Real-Time Video Stream Ingestion:</strong> We support real-time CCTV and camera integrations via secure IP protocols like RTSP (Real-Time Streaming Protocol), allowing seamless video feed ingestion and processing.</li>
                        <li><strong>Docker Containerized:</strong> Our system is fully containerized using Docker, enabling efficient deployment, resource management, and scalability. This ensures that your application can scale effortlessly with minimal overhead, allowing for efficient usage of resources and simplified deployment across environments.</li>
                    </ul>
                </div>

                {/* Section Three */}
                <div ref={(el) => sectionsRef.current[2] = el} className="animated-section">
                    <h1>System Architecture</h1>
                    <p>Our system is built on a robust and scalable architecture that integrates various components to ensure fast, secure, and reliable face recognition. Here's an overview of the key elements:</p>
                </div>

                {/* Section Four */}
                <div ref={(el) => sectionsRef.current[3] = el} className="animated-section">
                    <h1>Core Components</h1>
                    <ul>
                        <li><strong>Azure GPU-Enabled Virtual Machines:</strong> The high-performance virtual machines (VMs) on Azure handle intensive computations for face recognition, anomaly detection, and video processing.</li>
                        <li><strong>Azure Data Lake:</strong> All sensitive data, including face images and metadata, are stored in Azure Data Lakes, ensuring 100% high-level security with encryption and access control policies.</li>
                        <li><strong>RTSP-Based CCTV Integration:</strong> Video streams from security cameras and CCTV systems are ingested via secure RTSP protocol, ensuring live feed processing with low latency.</li>
                        <li><strong>Docker Containers:</strong> The application is containerized using Docker, providing a lightweight and efficient runtime environment. This allows for easy deployment, scaling, and management of the system across different environments, ensuring consistent performance and resource optimization.</li>
                    </ul>
                </div>

                {/* Section Five */}
                <div ref={(el) => sectionsRef.current[4] = el} className="animated-section">
                    <h1>Security and Compliance</h1>
                    <p>Our platform prioritizes data security and compliance with industry standards. We ensure that all data is encrypted both in transit and at rest. The integration of SAS-enabled Azure Blob Storage further restricts data access to authorized users only, ensuring compliance with stringent security policies.</p>
                </div>


                {/* Section Six */}
                <div ref={(el) => sectionsRef.current[5] = el} className="animated-section">
                    <h1>Key Security Features</h1>
                    <ul>
                        <li><strong>SAS (Shared Access Signature) for Blob Storage:</strong> Provides secure, time-limited access to specific resources.</li>
                        <li><strong>Encryption at Rest:</strong> All stored data is encrypted, ensuring data confidentiality.</li>
                        <li><strong>Real-Time Video Stream Encryption:</strong> Video streams are encrypted during transmission to protect sensitive visual data.</li>
                    </ul>
                    <p>To ensure optimal performance, we recommend using high-quality IP cameras that support RTSP streaming. Here are our recommended specifications:</p>
                </div>


                {/* Section Seven */}
                <div ref={(el) => sectionsRef.current[6] = el} className="animated-section">
                    <h1>Camera Recommendations</h1>
                    <ul>
                        <li><strong>Resolution:</strong> 1080p or higher for accurate face recognition.</li>
                        <li><strong>Frame Rate:</strong> 30 FPS or higher to ensure smooth video streaming.</li>
                        <li><strong>Compression:</strong> H.264 or H.265 for efficient bandwidth usage.</li>
                    </ul>
                </div>


                {/* Section Eight */}
                <div ref={(el) => sectionsRef.current[7] = el} className="animated-section">
                    <h1>Minimum & Recommended Hardware Requirements</h1>
                    <ul>
                        <li><strong>Minimum GPU Requirements:</strong> Standard_NC4as_T4_v3 or equivalent for real-time face recognition.</li>
                        <li><strong>Recommended GPU:</strong> Standard_NC8as_T4_v3 for larger-scale deployments.</li>
                    </ul>
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

export default Technicalcorner;
