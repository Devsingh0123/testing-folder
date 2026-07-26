import React, { useRef } from "react";

const SimpleCamera = () => {
  const videoRef = useRef(null); // Video element ko pakadne ke liye

  const openCamera = async () => {
    try {
      // 1. Browser se camera stream mangein
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      
      // 2. Us stream ko video tag ke andar daal dein
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error("Camera access denied!", error);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <button onClick={openCamera}>Open Camera</button>
      <br /><br />
      
      {/* autoPlay lagana zaroori hai taaki camera live dikhe */}
      <video ref={videoRef} autoPlay style={{ width: "400px", background: "#000" }} />
    </div>
  );
};

export default SimpleCamera;
