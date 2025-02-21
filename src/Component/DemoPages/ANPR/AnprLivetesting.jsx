import React, { useState } from 'react';
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import '../../../Style/LiveTesting.css'


function AnprLivetesting() {
  let v1 = "https://visiondetect.blob.core.windows.net/visiondetectclientsidedata/Videos/ANPR1Live.mp4"
  let v1Result = "https://visiondetect.blob.core.windows.net/visiondetectclientsidedata/Videos/ANPR1LiveTested.mp4";
  let v2 = "https://visiondetect.blob.core.windows.net/visiondetectclientsidedata/Videos/ANPR2Live.mp4";
  let v2Result = "https://visiondetect.blob.core.windows.net/visiondetectclientsidedata/Videos/ANPR2LiveTested.mp4";
  let v3 = "https://visiondetect.blob.core.windows.net/visiondetectclientsidedata/Videos/ANPR3Live.mp4";
  let v3Result = "https://visiondetect.blob.core.windows.net/visiondetectclientsidedata/Videos/ANPR3LiveTested.mp4";



  const navigate = useNavigate();
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showAnalyzedVideo, setShowAnalyzedVideo] = useState(false);
  const [analyzedVideo, setAnalyzedVideo] = useState(null);
  const [showOverlay, setShowOverlay] = useState(true);
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = () => {
    let resultVideo = null;

    if (selectedVideo === v1) {
      resultVideo = v1Result;
    } else if (selectedVideo === v2) {
      resultVideo = v2Result;
    } else if (selectedVideo === v3) {
      resultVideo = v3Result;
    }

    if (resultVideo) {
      setLoading(true); // Show loader
      setShowAnalyzedVideo(true); // Reserve space for analyzed video

      setTimeout(() => {
        setAnalyzedVideo(resultVideo); // Set the analyzed video
        setLoading(false); // Hide loader
      }, 4000);
    }
  };

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="relative">
      {/* Overlay appears on page load; clicking anywhere on it will remove it */}
      {showOverlay && (
        <div>
          <div
            onClick={() => setShowOverlay(false)}
            className="fixed inset-0 bg-black"
            style={{ opacity: 0.8, zIndex: 50 }}
          ></div>
          <div id="submithere" className="fixed">
            <span className='font-semibold'>Step 3:</span> After selecting the desired video to test, click on the submit button to generate results.
          </div>
        </div>
      )}

      <div className="relative">
        {/* Back Button */}
        <FiArrowLeft
          className="back-button z-500000 relative text-2xl top-4 h-12 w-12 p-2 bg-white border-4 border-white text-black rounded-full left-12 cursor-pointer "
          onClick={handleBackClick}
        />
        {showOverlay && (
          <div
            id="backbuttonarrow"
            className="fixed "
          >
            <span className='font-semibold'>Step 1:</span> Click here to go back to the homepage.
          </div>
        )}

        <div className="relative w-full h-[20rem] mx-auto pt-2 space-x-12">
          <div className={`relative w-4/5 h-[20rem] mx-auto ${showAnalyzedVideo ? 'flex gap-x-6' : ''}`}>
            {/* Selected Video */}
            <div className={`${showAnalyzedVideo ? 'w-1/2' : 'w-full'} h-full overflow-hidden bg-cover bg-bottom bg-no-repeat rounded-[30px] transition-all duration-500`}>
              {selectedVideo ? (
                <video
                  key={selectedVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover object-bottom mr-4"
                >
                  <source src={selectedVideo} type="video/mp4" />
                </video>
              ) : (
                <div className="w-full h-full bg-black"></div>
              )}
            </div>

            {/* Analyzed Video / Loader Placeholder */}
            <div className={`${showAnalyzedVideo ? 'w-1/2' : 'hidden'} h-full overflow-hidden bg-cover bg-bottom bg-no-repeat rounded-[30px] flex justify-center items-center relative`}>
              {/* Show loader while waiting for result */}
              {isLoading && (
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-80 rounded-[30px]">
                  <dotlottie-player
                    src="https://lottie.host/90cd6ac4-247c-49be-aec4-a747636330cd/98GcJUMUqS.lottie"
                    background="transparent"
                    speed="1"
                    loop
                    autoplay
                    style={{ width: '50%', height: '50%' }}
                  ></dotlottie-player>
                </div>
              )}

              {/* Show analyzed video after loading */}
              {!isLoading && analyzedVideo && (
                <video
                  key={analyzedVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover object-bottom"
                >
                  <source src={analyzedVideo} type="video/mp4" />
                </video>
              )}
            </div>
          </div>

        </div>

        <button
          className="popup-close cursor-pointer z-200"
          onClick={() => {
            // setSelectedVideo(null);
            // setShowAnalyzedVideo(false);
            navigate('/')
          }}
        >
          &times;
        </button>
      </div>

      {/* Video Thumbnails */}
      <div className="relative flex flex-row items-center justify-center space-x-8 mt-8">
        {showOverlay && (
          <div
            id="selectVideo"
            className="fixed "
          >
            <span className='font-semibold'>Step 2:</span> Select a video to test it live above.
          </div>
        )}
        {[v1].map((video, index) => (
          <video
            key={index}
            onClick={() => setSelectedVideo(video)}
            autoPlay
            loop
            muted
            playsInline
            className="w-70 border-4 border-white h-auto rounded-lg shadow-md hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer z-10000"
          >
            <source src={video} type="video/mp4" />
          </video>
        ))}
        {[v2, v3].map((video, index) => (
          <video
            key={index}
            onClick={() => setSelectedVideo(video)}
            autoPlay
            loop
            muted
            playsInline
            className="w-70 h-auto rounded-lg shadow-md hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer"
          >
            <source src={video} type="video/mp4" />
          </video>
        ))}
      </div>

      {/* Submit Button */}
      <div className="relative z-200 flex justify-center items-center m-2">
        <button
          className="bg-black border-4 border-white text-white text-base px-6 py-2 rounded-xl hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer"
          onClick={handleSubmit}
        >
          Submit here
        </button>
      </div>
    </div>
  );
}

export default AnprLivetesting;
