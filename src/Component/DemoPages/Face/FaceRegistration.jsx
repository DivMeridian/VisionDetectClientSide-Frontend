import React, { useState, useEffect, useRef } from 'react';
import retry from '../../../Assest/retry.png';
import profilephoto from '../../../Assest/profilePicture03.jpg';
import 'animate.css';
import axios from 'axios'; // Import Axios
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import '../../../Style/LiveTesting.css';
import firstimage from '../../../Assest/firstscreen.png';

function FaceRegistration() {

  const [isStreaming, setIsStreaming] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null); // State for captured image
  const [isLoading, setLoading] = useState(false);
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const canvasRef = useRef(null);
  const formRef = useRef(null); // Add this at the top inside your component
  const navigate = useNavigate();
  const [showOverlay, setShowOverlay] = useState(true);


  // Handle removing the intro image on click
  const handleRemoveIntroImage = () => {
    setShowIntroImage(false);
  };



  // const handleDialCodeChange = (value) => {
  //   setDialCode(value);
  // };
  // Automatically start the webcam when the component loads
  useEffect(() => {
    const startWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        streamRef.current = stream;
        videoRef.current.srcObject = stream;
        setIsStreaming(true);
      } catch (error) {
        console.error('Error accessing webcam: ', error);
      }
    };

    startWebcam();

    return () => {
      if (streamRef.current) {
        const tracks = streamRef.current.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  // Capture the image from the video feed
  const captureImage = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const video = videoRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Optionally, you can get the captured image as a data URL or do something else with it
    const capturedImage = canvas.toDataURL('image/png');
    setCapturedImage(capturedImage);
    console.log("image is captured");
  };

  const retryCapture = () => {
    setCapturedImage(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    if (!capturedImage) {
      console.log("Please upload or capture a profile photo")
      toast.error('Please upload or capture a profile photo.');
      return; // Stop form submission
    }

    const backendURI = "https://visiondetectclientside-backend-d8ezgkaregg4ascv.centralindia-01.azurewebsites.net";
    // const backendUrl = `${import.meta.env.VITE_BACKEND}/register`;
    const formData = new FormData();


    // Append text fields
    formData.append('name', e.target.name.value);
    formData.append('gender', e.target.gender.value);
    formData.append('dob', e.target.dob.value);
    formData.append('email', e.target.email.value);
    formData.append('phone', e.target.phone.value);

    // Convert base64 image to Blob
    if (capturedImage) {
      const blob = base64ToBlob(capturedImage, 'image/png');
      formData.append('image', blob, 'captured_image.png');
    }
    setLoading(true); // Show loading animation

    try {
      const response = await axios.post(`${backendURI}/register`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setLoading(false);
      console.log("Registration successful:", response.data);

      if (response.data.success) {
        toast.success(response.data.message);
        setCapturedImage(null);
        navigate('/face-verificationTrial');
        formRef.current.reset();

      } else {
        toast.error(response.data.message);
      }


    }

    catch (error) {
      console.error('Error during registration:', error);
      // alert('Registration failed. Please try again.');
      toast.error(`Error during registration: ${error}`);

    }
  }

  const base64ToBlob = (base64, mimeType) => {
    const byteCharacters = atob(base64.split(',')[1]);
    const byteNumbers = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: mimeType });
  };

  const handleCrossButton = () => navigate('/');


  return (
    <div className='h-screen w-[98vw] flex animate__animated animate__fadeInUpBig'>
      <button className="popup-close cursor-pointer z-100" onClick={handleCrossButton}>
        &times;
      </button>

      

      <div className="w-1/2 h-full bg-black rounded-br-2xl">
        <div className="h-[60%] w-full">
          <video
            ref={videoRef}
            className="w-full h-full object-cover z-0"
            autoPlay
            muted
            playsInline
          ></video>
        </div>
        <div className=" w-full h-[41%] flex justify-center items-center bg-black rounded-2xl relative z-10 mt-[-0.6rem]">
          {isStreaming && (
            <div className='flex flex-col justify-center items-center '>
              <div className='flex flex-col justify-center items-center space-y-3'>
                {showOverlay && (
                  <div>
                    <div
                      onClick={() => setShowOverlay(false)}
                      className="fixed inset-0 bg-black"
                      style={{ opacity: 0.9, zIndex: 50 }}
                    ></div>
                    <div id="continuebutton" className="fixed">
                      <span className='font-semibold'>Step 3:</span> Submit Registration form
                    </div>
                  </div>
                )}



                <div className='flex  gap-5'>
                  {showOverlay && (
                    <div
                      id="CaptureButton"
                      className="fixed "
                    >
                      <span className='font-semibold'>Step 1:</span> Capture & Upload Profile 1
                    </div>
                  )}
                  <button
                    onClick={captureImage}
                    className="px-[3.5rem] z-500000 py-3 bg-white text-sm text-black font-semibold rounded-2xl cursor-pointer"
                  >
                    Capture image
                  </button>
                  <button className='flex flex-col items-center justify-center cursor-pointer' onClick={retryCapture}
                  >
                    <img src={retry} className='h-4 w-4' />
                    <p className='text-[10px] text-white'>Retry</p>
                  </button>
                </div>
                <div>
                  <p className='text-white text-sm'>Or</p>
                </div>
                <div className=''>
                  <input
                    type="file"
                    accept="image/*"
                    id="fileInput"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = () => {
                          setCapturedImage(reader.result);
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                  />
                  <button
                    onClick={() => document.getElementById('fileInput').click()}
                    className="px-12 py-3 text-sm bg-white text-black font-semibold rounded-2xl cursor-pointer"
                  >
                    Upload from your device
                  </button>
                </div>
              </div>
              <span className="text-white font-semibold text-[20px] absolute bottom-0 left-1/2 transform -translate-x-1/2 tracking-wide">VisionDetect.ai</span>
            </div>
          )}
        </div>
        <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
      </div>
      <div className='w-1/2 h-full'>
        <div className='h-full w-full flex flex-col justify-center items-center relative m-auto'>
          {/* <p className='absolute top-5 right-17 text-sm  cursor-pointer underline' onClick={() => navigate('/face-verificationTrial')} >switch to verification?</p> */}
          <div className="h-50 w-50 rounded-full m-3 overflow-hidden">
            <img
              src={capturedImage || profilephoto}
              className="h-full w-full object-cover"
              alt="Profile"
              required
            />
          </div>
          <div className='mt-[-1rem] my-4'>
            <p className="text-2xl font-semibold">Face Registration</p>
          </div>
          <form ref={formRef} className="w-5/6 space-y-4 space-x-3  " onSubmit={handleSubmit}>
            {showOverlay && (
              <div
                id="formenteries"
                className="fixed "
              >
                <span className='font-semibold'>Step 2:</span> Enter Your Details.
              </div>
            )}
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="w-full rounded-full relative z-50000 bg-gray-200 py-2 px-4 text-gray-700 placeholder:text-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
            <div className="flex gap-4">
              {/* <input
                name="gender"
                type="text"
                placeholder="Gender"
                className="w-1/2 rounded-full bg-gray-200 py-2 px-4 text-gray-700 placeholder:text-sm placeholder:px-4 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              /> */}
              <div className="relative w-1/2">
                <select
                  name="gender"
                  className="w-full appearance-none rounded-full bg-gray-200 text-sm py-2 px-4  text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  required
                >
                  <option value="" disabled selected>Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>

                {/* Custom Dropdown Icon on the Left */}
                <svg
                  className="absolute left-[15rem] top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>


              <input
                name="dob"
                type="date"
                placeholder="DD/MM/YYYY"
                className="w-1/2 rounded-full bg-gray-200 py-2 px-4 text-gray-500 placeholder:text-md  placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              />
            </div>

            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-full bg-gray-200 py-2 px-4 text-gray-500 placeholder:text-md  placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />

            <div className="flex space-x-1">
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                className="flex-1 rounded-full bg-gray-200 py-2 px-4 placeholder:text-md  text-gray-500 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              />
            </div>

            <div className='flex justify-center items-center mt-4'>
              <button
                type="submit"
                className="z-5000 px-[4rem] py-4 text-sm bg-black text-white font-medium rounded-3xl cursor-pointer explore-button2"
              >
                Continue
              </button>
              {showOverlay && (
                <div id="skipbutton" className="fixed">
                  <span className='font-semibold'>Step 4:</span> Already Registered? Proceed to Face Verification
                </div>

              )}
              <p
                className={`text-md z-50 font-semibold cursor-pointer px-4 underline hover:scale-105 hover:font-semibold transition-all duration-200 ease-in-out ${showOverlay ? 'text-white' : 'text-black'
                  }`}
                onClick={() => navigate('/face-verificationTrial')}
              >
                Skip
              </p>

            </div>
          </form>
          <span className="text-black font-semibold text-[20px] mt-1 absolute bottom-0 left-1/2 transform -translate-x-1/2 tracking-wide ">VisionDetect.ai</span>
          {isLoading && (
            <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-90 z-50">
              <dotlottie-player
                src="https://lottie.host/90cd6ac4-247c-49be-aec4-a747636330cd/98GcJUMUqS.lottie   "
                background="transparent"
                border="2px solid black"
                speed="1"
                loop
                autoplay
                style={{ width: '40%', height: '40%' }}
              ></dotlottie-player>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FaceRegistration;
