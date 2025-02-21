import React, { useState, useEffect, useRef } from "react";
import "../../Style/EducationIndustry.css";
import { FaArrowLeft } from "react-icons/fa";
import tradingindus from "../../Assest/tradingindus.webp";
import { useNavigate } from "react-router-dom";
import Popup from '../Popup.jsx'; // Import the Popup component


const TradingIndustry = () => {
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
                <h1><bold>Trading Industry</bold></h1>
                <button className="request-btn" onClick={togglePopup}>Request Demo</button>
            </div>
            <h1>Enhancing Trading & Distribution with VisionDetect.ai</h1>


            <div className="education-image">
                <img src={tradingindus} alt="Education Industry" />
            </div>

            <div className="education-content">
                {/* Section One */}
                <div ref={(el) => sectionsRef.current[0] = el} className="animated-section">
                    {/* <h1>Enhancing Trading & Distribution with VisionDetect.ai</h1> */}
                    <p>In the fast-paced world of trading and distribution, VisionDetect.ai stands out as a powerful platform designed to address the complexities of logistics and security. With its AI-driven capabilities, it offers businesses an opportunity to streamline operations, protect assets, and optimize the flow of goods. One of its core features, Automated Number Plate Recognition (ANPR), provides seamless vehicle tracking, delivering real-time insights into fleet movements and deliveries. This enables companies to manage large-scale distribution networks with greater efficiency, reducing delays, cutting costs, and ensuring timely delivery of goods.</p>
                </div>

                {/* Section Two */}
                <div ref={(el) => sectionsRef.current[1] = el} className="animated-section">
                <p>Warehouse security is another critical area where VisionDetect.ai excels. Its advanced object detection technology ensures that only authorized personnel have access to restricted areas, preventing unauthorized entries and potential breaches. By maintaining a secure environment, businesses can focus on their operations without the constant worry of theft or interference. The platform also incorporates anomaly detection to identify potential threats, such as tampering with goods or suspicious activities, and alerts security teams instantly, allowing for swift and decisive action to prevent losses. 
                    Beyond security, VisionDetect.ai enhances operational efficiency by improving inventory management and supply chain visibility
                </p>
                </div>

                {/* Section Three */}
                <div ref={(el) => sectionsRef.current[2] = el} className="animated-section">
                    <p>The platform can track stock levels, detect misplaced items, and even predict inventory needs based on historical data. These capabilities help companies avoid overstocking or running out of critical supplies, ensuring a smooth flow of goods from warehouses to retail locations. The platform also provides valuable analytics, enabling businesses to optimize delivery routes, allocate resources effectively, and forecast demand more accurately.</p>
                </div>

                {/* Section Four */}
                <div ref={(el) => sectionsRef.current[3] = el} className="animated-section">
                    <p>The scalability of VisionDetect.ai makes it an ideal partner for growing businesses. Whether expanding operations to new markets or integrating additional warehouses and fleets, the platform adapts to meet evolving needs. It also supports sustainability goals by optimizing delivery routes to reduce fuel consumption and tracking emissions to promote environmental compliance.</p>
                </div>

                {/* Section Five */}
                <div ref={(el) => sectionsRef.current[4] = el} className="animated-section">
                    <p>By combining robust security measures with intelligent monitoring and analytics, VisionDetect.ai offers a holistic solution for trading and distribution companies. It enables businesses to enhance their supply chain operations, protect their assets, and stay competitive in a rapidly evolving market. Through its AI-powered approach, VisionDetect.ai transforms challenges into opportunities, paving the way for a more efficient and secure future.</p>
                </div>


                {/* Section Six */}
                <div ref={(el) => sectionsRef.current[5] = el} className="animated-section">
                    <h1>Key Advantages of VisionDetect.ai for Trading & Distribution</h1>
                    <ul>
                        <li><strong>Seamless Vehicle Tracking:</strong> Automated Number Plate Recognition (ANPR) provides real-time insights into vehicle movements and delivery progress, enabling better management of large-scale distribution networks.</li>
                        <li><strong>Enhanced Warehouse Security:</strong> Object detection technology ensures only authorized personnel access restricted areas, safeguarding assets and reducing unauthorized activity risks.</li>
                        <li><strong>Proactive Anomaly Detection:</strong> Identifies threats such as theft, tampering, or suspicious activities, with instant alerts for swift response by security teams.</li>
                        <li><strong>Improved Inventory Management:</strong> Tracks stock levels, detects misplaced items, and predicts inventory needs, preventing overstocking or stockouts and ensuring operational continuity</li>
                        <li><strong>Optimized Supply Chains:</strong> Provides actionable analytics to enhance routing, allocate resources efficiently, and forecast demand for better planning.</li>
                        <li><strong>Custom Alerts and Reports:</strong>  Enables tailored notifications and comprehensive reporting, keeping stakeholders informed and enabling proactive decision-making.</li>
                        <li><strong>Cost and Time Efficiency:</strong> Reduces delays, minimizes fuel costs, and enhances</li>
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

export default TradingIndustry;
