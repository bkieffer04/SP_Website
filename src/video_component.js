import React from 'react';
import videoFile from './assets/parking_demo_example.MP4'; // Replace with your actual video file or GIF
import { useRef } from 'react';

function VideoComponent() {
  const videoRef = useRef(null);

  const handlePlay = () => {
    // Handle click event here
    console.log('Video hovered over');
    videoRef.current.play();
  };

  const handleStop = () => {
    // Handle click event here
    console.log('Video clicked!');
    videoRef.current.pause();
  };

  return (
    <div style={{backgroundColor: '#565656', padding: '3px 10px 3px 10px', borderRadius: 5, justifyContent: 'center'}}>
      <video ref={videoRef} style={{width: 200, height: 450}} src={videoFile} autoPlay playsInline muted={true} onClick={handleStop} onMouseOver={handlePlay}>
        Sorry, your browser doesn't support embedded videos.
      </video>
    </div>
  );
}

export default VideoComponent;
