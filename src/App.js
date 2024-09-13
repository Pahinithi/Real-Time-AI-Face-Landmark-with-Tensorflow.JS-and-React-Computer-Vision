import React, { useRef, useEffect } from "react";
import "./App.css";
import * as tf from "@tensorflow/tfjs";// OLD MODEL
//import * as facemesh from "@tensorflow-models/facemesh";

// NEW MODEL

import * as facemesh from "@tensorflow-models/face-landmarks-detection"; // Importing the newer facemesh model from face-landmarks-detection
import Webcam from "react-webcam"; // Library to access the webcam feed in React
import { drawMesh } from "./utilities"; // Utility function for drawing face landmarks on the canvas


function App() {
  // Setting up references to webcam and canvas DOM elements
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

// Function to load the facemesh model and start detection at regular intervals
  const runFacemesh = async () => {

    // OLD MODEL
    // const net = await facemesh.load({
    //   inputResolution: { width: 640, height: 480 },
    //   scale: 0.8,
    // });
    
 // NEW MODEL: Loading the facemesh model using MediaPipe package from TensorFlow.js
    const net = await facemesh.load(facemesh.SupportedPackages.mediapipeFacemesh);

  // Setting up an interval to run the detect function every 10ms (real-time video processing)

    setInterval(() => {
      detect(net);
    }, 10);
  };

  // Function to detect the face and landmarks in the video feed
  const detect = async (net) => {

  // Checking if the webcam is ready and the video has loaded
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {

  // Get video properties (width and height) from the webcam
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

  // Set the width and height of the video to match the actual video properties
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

  // Set the canvas width and height to match the video feed dimensions
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      // OLD MODEL
      //       const face = await net.estimateFaces(video);


  // NEW MODEL: Estimating faces and landmarks from the video feed
      const face = await net.estimateFaces({input:video});
      console.log(face);

  // Get the 2D drawing context for the canvas
      const ctx = canvasRef.current.getContext("2d");

  // Call the drawMesh function to draw the face landmarks on the canvas
  requestAnimationFrame(() => { drawMesh(face, ctx); });
      requestAnimationFrame(()=>{drawMesh(face, ctx)});
    }
  };
 
  // useEffect hook runs once when the component mounts, calling the runFacemesh function to start detection
  useEffect(()=>{runFacemesh()}, []);

  // Return the JSX for the webcam and canvas elements (both overlayed on top of each other)
  return (
    <div className="App">
      <header className="App-header">
        <Webcam
          ref={webcamRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />
      </header>
    </div>
  );
}

export default App;
