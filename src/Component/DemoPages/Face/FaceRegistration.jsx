import React, { useState, useEffect, useRef } from 'react';
import retry from '../../../Assest/retry.png';
import profilephoto from '../../../Assest/profilePicture03.jpg';
import 'animate.css';
import axios from 'axios'; // Import Axios
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



function FaceRegistration() {

  const [isStreaming, setIsStreaming] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null); // State for captured image
  const [isLoading, setLoading] = useState(false);
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const canvasRef = useRef(null);
  const formRef = useRef(null); // Add this at the top inside your component
  const navigate = useNavigate();


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

  const handleSubmit = async(e)=>{
    e.preventDefault(); // Prevent page reload

    if (!capturedImage) {
      console.log("Please upload or capture a profile photo")
      toast.error('Please upload or capture a profile photo.');
      return; // Stop form submission
    }
  

    const backendUrl = `${import.meta.env.VITE_BACKEND}/register`;
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
      const response = await axios.post(backendUrl, formData, {
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
                <div className='flex  gap-5'>
                  <button
                    onClick={captureImage}
                    className="px-[3.5rem] py-3 bg-white text-sm text-black font-semibold rounded-2xl cursor-pointer"
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
          <div className="h-50 w-50 rounded-full m-3 overflow-hidden">
            <img
              src={capturedImage || profilephoto} 
              className="h-full w-full object-cover"
              alt="Profile"
              required
            />
          </div>
          <form ref={formRef} className="w-5/6 space-y-4 space-x-3 "onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="w-full rounded-full bg-gray-200 py-2 px-4 text-gray-700 placeholder:text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
            <div className="flex gap-4">
              <input
                name="gender"
                type="text"
                placeholder="Gender"
                className="w-1/2 rounded-full bg-gray-200 py-2 px-4 text-gray-700 placeholder:text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              />
              <input
                name="dob"
                type="date"
                placeholder="DD/MM/YYYY"
                className="w-1/2 rounded-full bg-gray-200 py-2 px-4 text-gray-700 placeholder:text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              />
            </div>

            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-full bg-gray-200 py-2 px-4 text-gray-700 placeholder:text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />

            <div className="flex space-x-1">
              {/* <div className="relative">
    <button
      className="w-full rounded-full bg-gray-200 py-3 px-2 text-gray-700 text-left focus:outline-none focus:ring-2 focus:ring-gray-400"
      onClick={() => setShowOptions(!showOptions)}
    >
      {dialCode ? dialCode : 'Select Country'}
    </button>
    {showOptions && (
      <div className="absolute z-10 mt-1 w-full max-h-40 overflow-y-auto bg-white rounded-lg shadow-lg">
        <div
          className="py-1"
          onClick={(e) => {
            handleDialCodeChange(e.target.value);
            setShowOptions(false);
          }}
        >
          <option value="+91">India (+91)</option>
          <option value="+1">United States (+1)</option>
          <option value="+44">United Kingdom (+44)</option>
          <option value="+61">Australia (+61)</option>
          <option value="+81">Japan (+81)</option>
          <option value="+86">China (+86)</option>
          <option value="+49">Germany (+49)</option>
          <option value="+33">France (+33)</option>
          <option value="+39">Italy (+39)</option>
          <option value="+7">Russia (+7)</option>
          <option value="+55">Brazil (+55)</option>
          <option value="+27">South Africa (+27)</option>
          <option value="+82">South Korea (+82)</option>
          <option value="+64">New Zealand (+64)</option>
          <option value="+34">Spain (+34)</option>
          <option value="+31">Netherlands (+31)</option>
          <option value="+47">Norway (+47)</option>
          <option value="+90">Turkey (+90)</option>
          <option value="+52">Mexico (+52)</option>
        </div>
      </div>
    )}
  </div> */}
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                className="flex-1 rounded-full bg-gray-200 py-2 px-4 placeholder:text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              />
            </div>

            <div className='flex justify-center items-center mt-9'>
              <button
                type="submit"
                className="px-[4rem] py-4 text-sm bg-black text-white font-medium rounded-3xl cursor-pointer explore-button2"
              >
                Continue
              </button>
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
