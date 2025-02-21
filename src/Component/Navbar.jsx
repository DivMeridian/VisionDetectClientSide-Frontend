import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Style/Navbar.css"; // Import the CSS file for styling
import dropdwnimg from "../Assest/dropdwnimg.png";
import ContactUs from "./ContactUs";

const Navbar = () => {
  const [showProducts, setShowProducts] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const handleMouseEnter = (type) => {
    if (type === "products") setShowProducts(true);
    if (type === "solutions") setShowSolutions(true);
  };

  const handleMouseLeave = (type) => {
    if (type === "products") setShowProducts(false);
    if (type === "solutions") setShowSolutions(false);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
          <a href="/" className="btn-shine">
            <span className="btn-shine-text">VisionDetect.ai</span>
            <span className="btn-shine-overlay">VisionDetect.ai</span>
          </a>
        </div>

        <div className="navbar-center">
          <ul className="navbar-links ">
            <div
              className="relative inline-block"
              // Apply both events to the wrapper
              onMouseEnter={() => setShowProducts(true)}
              onMouseLeave={() => setShowProducts(false)}
            >
              <li><button className="product-btn">Products</button></li>
              {showProducts && (
                <div className="absolute flex justify-center border-1 border-[#999999] w-[700px] top-full left-0 mt-[-0rem] text-[#133AFF] bg-white shadow-lg rounded-3xl z-10 animate__animated animate__fadeInDown">
                  {/* Left Section for Links */}
                  <div className="p-4 flex-1">
                    <ul className="space-y-4 mt-4">
                      <li className="hover:scale-105 transition-all duration-200 ease-in-out">
                        <Link
                          to="/face-verification"
                          className="colorBlue font-semibold"
                        >
                          Face Verification & Registration
                        </Link>
                      </li>
                      <li className="hover:scale-105 transition-all duration-200 ease-in-out">
                        <Link
                          to="/anomaly-detection"
                          className="colorBlue font-semibold"
                        >
                          Anomaly Detection
                        </Link>
                      </li>
                      <li className="hover:scale-105 transition-all duration-200 ease-in-out">
                        <Link
                          to="/anpr"
                          className="colorBlue font-semibold"
                        >
                          Automatic Number Plate Detection
                        </Link>
                      </li>
                    </ul>

                  </div>
                  {/* Right Section for Image */}
                  <div className="p-4 flex items-center justify-center">
                    <img
                      src={dropdwnimg}
                      alt="Product Visual"
                      className="w-76 h-auto"  // Increased width for a larger image
                    />
                  </div>
                </div>
              )}

            </div>
            <div
              className="relative inline-block"
              onMouseEnter={() => setShowSolutions(true)}
              onMouseLeave={() => setShowSolutions(false)}
            >
              <li>
                <button className="product-btn">Solutions</button>
              </li>
              {showSolutions && (
                <div className="absolute flex border border-[#999999] w-[700px] top-full left-[-10rem] bg-white shadow-lg rounded-3xl z-10 animate__animated animate__fadeInDown">
                  {/* Left Section for Solutions Links */}
                  <div className="p-4 flex-1">
                    <div>
                      <ul className="space-y-2">
                        {/* First Heading */}
                        <li className="text-[#133AFF] font-semibold space-y-1 hover:underline">
                          <Link to="/face-verification">
                            Face Verification & Registration
                          </Link>
                        </li>
                        <ul className=" space-y-2">
                          <li className="hover:underline">
                            <Link to="/exam-verification" className="text-black">
                              Exam Face Registration & Verification
                            </Link>
                          </li>
                          <li className="hover:underline">
                            <Link to="/face-kyc" className="text-black">
                              Face KYC
                            </Link>
                          </li>
                          <li className="hover:underline">
                            <Link to="/apartment-verification" className="text-black">
                              Apartment Entry Verification
                            </Link>
                          </li>
                          <li className="hover:underline">
                            <Link to="/face-ticketing" className="text-black">
                              Face Based Ticketing
                            </Link>
                          </li>
                        </ul>
                        {/* Second Heading */}
                        <li className="text-[#133AFF] font-semibold space-y-1 hover:underline">
                          <Link to="/anomaly-detection">Anomaly Detection</Link>
                        </li>
                        <ul className=" space-y-2">
                          <li className="hover:underline">
                            <Link to="/weapon-detection" className="text-black">
                              Weapon Detection
                            </Link>
                          </li>
                          <li className="hover:underline">
                            <Link to="/mobile-detection" className="text-black">
                              Mobile Phone Detection
                            </Link>
                          </li>
                          <li className="hover:underline">
                            <Link to="/mask-detection" className="text-black">
                              Mask Detection
                            </Link>
                          </li>
                          <li className="hover:underline">
                            <Link to="/helmet-detection" className="text-black">
                              Helmet Detection
                            </Link>
                          </li>
                        </ul>
                        {/* Third Heading */}
                        <li className="text-[#133AFF] font-semibold space-y-1 hover:underline">
                          <Link to="/anpr">
                            Automatic Number Plate Detection
                          </Link>
                        </li>
                        <ul className=" space-y-2">
                          <li className="hover:underline">
                            <Link to="/vehicle-authentication" className="text-black">
                              Automated Vehicle Authentication
                            </Link>
                          </li>
                          <li className="hover:underline">
                            <Link to="/automated-management" className="text-black">
                              Automated Billing & Slot Management
                            </Link>
                          </li>
                        </ul>
                      </ul>
                    </div>
                  </div>
                
                  <div className="p-4">
                    <ul className="space-y-2">
                      <li className="text-[#133AFF] font-semibold space-y-1 hover:underline">
                        Industry Solutions
                      </li>
                      <ul className=" space-y-2">
                        <li className="hover:underline">
                          <Link to="/education-industry" className="text-black">
                            Education Industry
                          </Link>
                        </li>
                        <li className="hover:underline">
                          <Link to="/manufacturing-industry" className="text-black">
                            Manufacturing Industry
                          </Link>
                        </li>
                        <li className="hover:underline">
                          <Link to="/services-industry" className="text-black">
                            Service Industry
                          </Link>
                        </li>
                        <li className="hover:underline">
                          <Link to="/trading-industry" className="text-black">
                            Trading & Distribution Industry
                          </Link>
                        </li>
                        <li className="hover:underline">
                          <Link to="/realestate-industry" className="text-black">
                            Contracting & Real-Estate Industry
                          </Link>
                        </li>
                      </ul>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <li><a href="/UseCases">Use Cases</a></li>
            <li>
              <Link to="/technical-corner">Tech Info </Link>
              {/* <Link to="">View Pricing </Link> */}
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <button className="explore-button" onClick={toggleForm} >Contact Us</button>
        </div>
      </nav>

      {/* Contact Info Below Navbar */}
      <div className="contact-info">
        <p>
          For 24/7 customised guidance and support, call us at +91 124 4429900 or email us at info@onmeridian.com.  Meridian Solutions is always here to help
        </p>
      </div>
      {showForm && (
        <ContactUs onClose={toggleForm} />
      )}

    </div>
  );
};

export default Navbar;
