import React, { useEffect } from 'react';
import videoFile from './assets/parking_demo_example.MP4'; // Replace with your actual video file or GIF
import { useRef, useState} from 'react';

function VideoComponent() {
  const videoRef = useRef(null);
  const [pressed, setPressed] = useState(false)

  useEffect(()=>{
    pressed === true ? videoRef.current.pause() : videoRef.current.play()
  }, [pressed])

  return (
    <div style={{backgroundColor: '#565656', padding: '3px 10px 3px 10px', borderRadius: 5, justifyContent: 'center'}}>
      <video ref={videoRef} style={{width: 200, height: 450}} src={videoFile} autoPlay playsInline muted={true} onClick={()=>{setPressed(!pressed)}}>
        Sorry, your browser doesn't support embedded videos.
      </video>
    </div>
  );
}

export default VideoComponent;
