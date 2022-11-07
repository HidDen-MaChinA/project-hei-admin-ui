import { ClassNames } from '@emotion/react';
import { Button } from '@mui/material';
import React, { Component, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Webcam from "react-webcam";
import "./Webcam.css"
const WebcamComponent = () => <Webcam />;
const videoConstraints = {
    width: 220,
    height: 200,
    facingMode: "user"
};

const WebcamCapture = () => {

    const webcamRef = React.useRef<any>(null);
    const [imgSrc, setImgSrc] = React.useState(null);
    const navigate = useNavigate();

    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
        console.log(imageSrc)
    }, [webcamRef, setImgSrc]);


    return (
        <div className="webcam-container">
            <div className='head'></div>
            <div className='webcam'>
                <Webcam
                    audio={false}
                    height={"600"}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={"1200"}
                    videoConstraints={videoConstraints}
                />
            </div>
            <div className='navigation'>
            <button onClick={(e)=>{navigate("/home")}} className="capture" >Home</button>
                <button onClick={(e) => { capture() }} className="capture">Capture</button>
            </div>
        </div>
    );
};

export default WebcamCapture;