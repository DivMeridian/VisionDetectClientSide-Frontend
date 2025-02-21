import React from 'react';
import 'animate.css';
import { useLocation, useNavigate } from 'react-router-dom';

function FaceResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { verificationResult } = location.state || {};

  if (!verificationResult) {
    navigate('/');
    return null;
  }

  const { message, matched_users, image_url } = verificationResult;
  console.log("Matched Users:", matched_users);

  const handleCrossButton = () => navigate('/face-verificationTrial');

  return (
    <div className="h-screen w-[98vw] flex">
      {/* Close Button */}
      <button className="popup-close cursor-pointer z-100" onClick={handleCrossButton}>
        &times;
      </button>

      {/* Left Side - Verified Face Image */}
      <div className="w-1/2 h-full bg-black rounded-br-2xl animate__animated animate__backInLeft">
        {image_url && (
          <img
            src={image_url}
            alt="Verified Face"
            className="w-full h-full object-cover rounded-br-2xl"
          />
        )}
      </div>

      {/* Right Side - Matched Users */}
      <div className="w-1/2 h-full animate__animated animate__backInRight">
        <div className="h-full w-full flex flex-col justify-center items-center relative m-auto">
          {matched_users && matched_users.length > 0 ? (
            <div className="w-full max-w-xl h-[650px] overflow-y-auto p-2 scrollbar-hidden">
              {matched_users.map((user, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg mb-4 space-y-1">
                  <h1 className="text-[1.5rem] font-semibold my-2">Detected Person {index + 1}</h1>
                  <p><span className="text-[#133AFF] font-semibold">Name:</span> {user.name}</p>
                  <p><span className="text-[#133AFF] font-semibold">Email:</span> {user.email}</p>
                  <p><span className="text-[#133AFF] font-semibold">Phone:</span> {user.phone}</p>
                  <p><span className="text-[#133AFF] font-semibold">Gender:</span> {user.gender}</p>
             
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xl font-semibold text-red-500">No matched users found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default FaceResultPage;
