import React, { useState, useEffect, useRef } from "react";
import "../../Style/EducationIndustry.css";
import { FaArrowLeft } from "react-icons/fa";
import servicesindus from "../../Assest/servicesindus.webp";
import { useNavigate } from "react-router-dom";
import Popup from '../Popup.jsx'; // Import the Popup component


const ServicesIndustry = () => {
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
                <h1><bold>Services Industry</bold></h1>
                <button className="request-btn" onClick={togglePopup}>Request Demo</button>
            </div>

            <h1>Enhancing the Service Industry with VisionDetect.ai</h1>


            <div className="education-image serviceImage">
                <img src={servicesindus} alt="Services Industry" />
            </div>

            <div className="education-content">
                {/* Section One */}
                <div ref={(el) => sectionsRef.current[0] = el} className="animated-section">
                    {/* <h1>Enhancing the Service Industry with VisionDetect.ai</h1> */}
                    <h1>Hospitality Sector</h1>
                    <p>VisionDetect.ai elevates operational standards in hotels, restaurants, and resorts by providing intelligent monitoring solutions. Crowd detection ensures seamless management of high-traffic areas like lobbies, event spaces, and dining areas, reducing wait times and improving guest satisfaction. Anomaly detection adds an extra layer of security by identifying unauthorized access or unattended luggage, mitigating potential risks in real-time. Furthermore, actionable analytics offer insights into guest behavior and preferences, enabling personalized services and targeted promotions.</p>
                </div>

                {/* Section Two */}
                <div ref={(el) => sectionsRef.current[1] = el} className="animated-section">
                    <h1>Healthcare Sector </h1>
                    <p>Hospitals and healthcare facilities benefit immensely from VisionDetect.ai's robust monitoring capabilities. The system ensures patient safety by tracking movement and issuing alerts for falls, unauthorized departures, or emergency situations. This is particularly crucial in specialized care units such as dementia care or mental health facilities. Additionally, VisionDetect.ai supports adherence to safety protocols, such as mask compliance and hygiene standards, fostering a secure and regulated environment for patients and staff.</p>
                </div>

                {/* Section Three */}
                <div ref={(el) => sectionsRef.current[2] = el} className="animated-section">
                    <h1>Retail Sector</h1>
                    <p>Retail businesses leverage VisionDetect.ai to optimize operations and enhance customer experience. Crowd detection helps manage foot traffic during peak hours, ensuring efficient service and preventing overcrowding. The platform’s anomaly detection identifies suspicious behaviors, such as theft, allowing timely intervention. With advanced analytics, retailers gain valuable insights into customer movement patterns, aiding in strategic decisions regarding product placement and inventory management.</p>
                </div>

                {/* Section Four */}
                <div ref={(el) => sectionsRef.current[3] = el} className="animated-section">
                    <h1>Event Management and Public Venues</h1>
                    <p>VisionDetect.ai ensures safety and efficiency at large-scale events and public venues. Its crowd management capabilities reduce congestion at entry and exit points, while anomaly detection addresses potential security risks, such as unauthorized access or prohibited items. Event organizers can utilize analytics to understand attendance trends and improve the planning of future events.</p>
                </div>

                {/* Section Five */}
                <div ref={(el) => sectionsRef.current[4] = el} className="animated-section">
                    <h1>Education and Corporate Spaces</h1>
                    <p>Educational institutions and corporate offices use VisionDetect.ai to maintain secure and efficient environments. In schools and universities, the system monitors attendance, enforces safety protocols, and detects unauthorized access. In corporate settings, VisionDetect.ai optimizes space utilization, monitors compliance with workplace policies, and secures restricted areas.</p>
                </div>


                {/* Section Six */}
                <div ref={(el) => sectionsRef.current[5] = el} className="animated-section">
                    <h1>Transportation Hubs</h1>
                    <p>Airports, train stations, and bus terminals utilize VisionDetect.ai to enhance passenger safety and operational efficiency. Crowd detection streamlines the flow of passengers, especially during peak travel periods, while anomaly detection identifies unattended luggage or unauthorized entries. Analytics provide insights into passenger behavior, enabling better resource allocation and service improvement.</p>
                </div>


                {/* Section Seven */}
                <div ref={(el) => sectionsRef.current[6] = el} className="animated-section">
                    <h1>Core Advantages</h1>
                    <ul>
                        <li>Proactive Safety Measures: Real-time alerts for emergencies, unauthorized actions, and anomalies ensure swift responses.</li>
                        <li>Operational Optimization: Data-driven insights enhance resource allocation, reduce bottlenecks, and streamline workflows.</li>
                        <li>Compliance Assurance: Automated monitoring supports adherence to industry safety standards and protocols.</li>
                        <li>Enhanced Customer Experience: Personalized analytics enable tailored services, fostering loyalty and satisfaction.
                            VisionDetect.ai empowers the service industry with advanced AI-driven monitoring, creating a safer, more efficient, and customer-centric environment across multiple sectors.
                        </li>
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

export default ServicesIndustry;
