import React, { useState } from 'react';
import '../Style/ContactUs.css'; // Add styles for the ContactUs
import profile from "../Assest/profileicon.png"; // Path to your profile icon
import email from "../Assest/email.png"; // Path to your email icon
import company from "../Assest/company.png"; // Path to your company icon
// import close from "../Assest/close.png"; // Path to your close icon (cross)
import { toast } from 'react-toastify';
import axios from 'axios';
import { RxCross2 } from "react-icons/rx";
import note from '../Assest/notebook.png';
 
 
function ContactUs({ onClose }) {
    const [formData, setFormData] = useState({
        name: "",
        contact_info: "",
        company_name: "",
        message: "",
    });
 
    const [isOpen, setIsOpen] = useState(true);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [messageStatus, setMessageStatus] = useState("");
    const [loader, setLoader] = useState(false);
 
    // Update state when input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
 
    // Handle form submission
    const handleSubmit = async (e) => {
        const backendUrl = `${import.meta.env.VITE_BACKEND}/send-contact/`;
        e.preventDefault();
        setLoader(true)
        try {
            const response = await axios.post(backendUrl, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (response.data.message == "Emails sent successfully") {
                setIsSubmitted(true); // Hide form and show success message
                setMessageStatus("Message sent successfully!");
                setFormData({
                    name: "",
                    contact_info: "",
                    company_name: "",
                    message: "",
                });
 
                // Close the form (if applicable)
                // setIsOpen(false);
                // toast.success("Message sent successfully!")
                // onClose();
                setTimeout(() => {
                    setIsSubmitted(false);
                    setFormData({ name: "", contact_info: "", company_name: "", message: "" });
                    onClose(); // Close popup if needed
                }, 5000); // Auto-close after 3 seconds
           
            } else {
                setMessageStatus("Failed to send message.");
                toast.error("Failed to send message")
            }
        } catch (error) {
            console.error("Error sending message:", error);
            toast.error("Error sending message:", error)
            setMessageStatus("An error occurred while sending the message.");
        }
        finally {
            setLoader(false);
        }
    };
 
    return (
        <div className="popup-overlay">
            <div className="popup-form">
                {/* <img src={close} alt="Close" className="close-icon" onClick={onClose} /> */}
                <RxCross2  onClick={onClose} className="close-icon" />
                <h2 className=''>Contact Us</h2>
                {isSubmitted ? (
                    <div className='flex flex-col items-center justify-center mt-[-2rem]'>
                        <dotlottie-player
                                src="https://lottie.host/43a47a3c-19c4-4631-b49d-ffa35fa4ac51/u1WnjdIwVI.lottie"
                                background="transparent"
                                border="2px solid black"
                                speed="1"
                                loop
                                autoplay
                                style={{ width: '80%', height: '80%' }}
                            ></dotlottie-player>
                             <p className="success-message text-center text-black text-lg">
                        Message sent successfully! Our team will connect with you soon.
                        </p>
                    </div>
                   
                ) : (
                <form onSubmit={handleSubmit}>
                    <div className="input-field border-1">
                        <img src={profile} alt="Profile Icon" />
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="input-field border-1">
                        <img src={email} alt="Email Icon" />
                        <input
                            type="email"
                            name="contact_info"
                            placeholder="Enter your email address"
                            value={formData.contact_info}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="input-field border-1">
                        <img src={company} alt="Company Icon" />
                        <input
                            type="text"
                            name="company_name"
                            placeholder="Enter your company (optional)"
                            value={formData.company_name}
                            onChange={handleInputChange}
                        />
                    </div>
                    {/* <div className="input-field">
                        <img src={note} alt="Email Icon" />
                            <textarea
                                name="message"
                                placeholder="Enter your message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                className='w-full rounded-lg border-0 focus:outline-none focus:ring-0 px-4 pt-2 py-1'
                            />
                    </div> */}
                    <div className="input-field flex items-center border-1 rounded-3xl p-2 w-full">
                        <img src={note} alt="Email Icon" className="w-5 h-5 mr-2 mt-[-1.3rem]" />
                        <textarea
                            name="message"
                            placeholder="Enter your message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            className="w-full rounded-3xl border-0 focus:outline-none focus:ring-0 px-2 py-1 resize-none leading-[-7rem] placeholder:text-gray-400"
                        />
                    </div>
 
                    {/* <button type="submit" className="submit-btn">Connect</button> */}
                    <button type="submit" className="submit-btn" disabled={loader}>
    {loader ? "Sending..." : "Connect"}
</button>
                </form>
                )}
                {/* {messageStatus && <p className="status-message">{messageStatus}</p>} */}
            </div>
        </div>
    );
}
 
export default ContactUs;
 
 
 
 