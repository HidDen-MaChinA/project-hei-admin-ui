import React, { Component, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Webcam from "react-webcam";
const WebcamComponent = () => <Webcam />;
const videoConstraints = {
    width: 220,
    height: 200,
    facingMode: "user"
};

const WebcamCapture = () => {

    const webcamRef = React.useRef<any>(null);
  const [imgSrc, setImgSrc] = React.useState(null);
  const navigate=useNavigate();

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    console.log(imageSrc)
  }, [webcamRef, setImgSrc]);


    return (
        <div className="webcam-container">
            <Webcam
                audio={false}
                height={320}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={720}
                videoConstraints={videoConstraints}
            />
            <button onClick={(e) => { capture() }}>
                Capture</button>
                {imgSrc!==null&& <img src={imgSrc}/>}
        </div>
    );
};

export default WebcamCapture;