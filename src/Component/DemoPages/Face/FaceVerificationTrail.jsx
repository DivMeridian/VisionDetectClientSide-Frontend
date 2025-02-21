import React, { useState, useRef, useCallback } from 'react';
import Webcam from 'react-webcam';
import retry from '../../../Assest/retry.png';
import { toast } from 'react-toastify';
import axios from 'axios'; // Import Axios
import { useNavigate } from 'react-router-dom';



function FaceVerificationTrail() {
  const webcamRef = useRef(null);
  const [isStreaming, setIsStreaming] = useState(true);
  const [capturedImage, setCapturedImage] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const navigate = useNavigate()

  const captureImage = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setCapturedImage(imageSrc);
      setIsStreaming(false); // Stop streaming after capturing
    }
  }, [webcamRef]);

  const retryCapture = () => {
    setCapturedImage(null);
    setIsStreaming(true);
  };

  const verifyImage = async () => {
    if (!capturedImage) {
      toast.error('Please upload or capture a profile photo.');
      return; // Stop form submission
    }

    const backendUrl = `${import.meta.env.VITE_BACKEND}/verify`;
    const formData = new FormData();

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
      console.log('Verification successful:', response.data);
      
      const { message, matched_users , success } = response.data;
      if (matched_users && success && matched_users.length > 0) {
      
        toast.success(
          `${message}`
        );
        setCapturedImage(null);
        navigate('/VerificationResult', { state: { verificationResult: response.data } });

      } else {
        // No matched users found
        toast.info('Verification completed, but no matching users were found.');
      }
     

    }
    catch (error) {
      console.error('Error during registration:', error);
      toast.error(`Verification failed: ${error.response?.data?.message || error.message}`);
    }
  };

  const base64ToBlob = (base64, mimeType) => {
    const byteCharacters = atob(base64.split(',')[1]);
    const byteNumbers = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: mimeType });
  };

  const handleCrossButton = () => navigate('/face-registrationTrial');


  return (
    <div className="relative h-screen w-screen bg-black">
      <button className="popup-close cursor-pointer z-100" onClick={handleCrossButton}>
        &times;
      </button>
      {isStreaming ? (
        <div className="absolute top-[40%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] w-72 h-72 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <Webcam
            ref={webcamRef}
            audio={false}
            screenshotFormat="image/jpeg"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="absolute top-[40%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] w-72 h-72 rounded-full overflow-hidden border-4 border-white shadow-lg">

          <img
            src={capturedImage}
            alt="Captured"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

      )}

      <div className='absolute h-50 bottom-0 left-0 w-full p-4  bg-opacity-50 flex flex-col justify-center items-center animate__animated animate__fadeInUpBig'>
        <div className='flex flex-col justify-center items-center space-y-2'>
          {isStreaming ? (
            <>
              <div className='flex gap-5'>
                <button
                  onClick={captureImage}
                  className="px-[3.5rem] py-3 bg-white text-sm text-black font-semibold rounded-2xl cursor-pointer"
                >
                  Capture image
                </button>
                <button
                  className='flex flex-col items-center justify-center cursor-pointer'
                  onClick={retryCapture}
                >
                  <img src={retry} className='h-4 w-4' />
                  <p className='text-[10px] text-white'>Retry</p>
                </button>
              </div>
              <p className='text-white text-sm'>Or</p>
              <div>
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
                        setIsStreaming(false);
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
            </>
          ) : (
            <div className='flex gap-4 justify-center animate__animated animate__fadeInUp '>
              <button
                onClick={verifyImage}
                className="px-8 py-3 bg-white text-sm text-black font-semibold rounded-2xl cursor-pointer"
              >
                Verify Profile
              </button>
              <button
                className='flex flex-col items-center justify-center cursor-pointer mt-2'
                onClick={retryCapture}
              >
                <img src={retry} className='h-4 w-4' />
                <p className='text-[10px] text-white'>Retry</p>
              </button>
            </div>
          )}
        </div>
        <span className="text-white font-semibold text-[20px] mt-4">VisionDetect.ai</span>
      </div>
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
  );
}

export default FaceVerificationTrail;
