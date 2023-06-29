import React, { useRef } from 'react';
import VideoComponent from './video_component';
import ContactSection from './contact_section';
import businessLogo from './assets/business_logo.png';

function App() {
  const contactRef = useRef(null);
  const aboutRef = useRef(null);

  const handleAboutClick = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactClick = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#96a1db' }} onMouseOver={console.log("They've reached the site")}>
      <div style={{ display: 'flex', alignItems: 'center', borderWidth: 1, borderColor: 'black' }}>
        <img style={{ width: 300, height: 300, position: 'absolute', left: 10 }} src={businessLogo} alt='Spotted Parking business logo' />
        <h1 style={{color:'white'}}>Welcome</h1>
        <div style={{ fontSize: 20, position: 'absolute', right: 10 }}>
          <text style={{ marginRight: 20, cursor: 'pointer', color: 'white' }} onClick={handleContactClick}>Contact Us</text>
          <text style={{color: 'gray', marginRight: 20}}>View Our Locations</text>
        </div>
      </div>
      <hr style={{ width: '100%', height: '10px', backgroundColor: '#565656', border: 'none', margin: 0}} />
      <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: 'white', padding: '10px 300px', justifyContent: 'center'}}>
        <div>
          <VideoComponent />
        </div>
        <div style={{margin: '0 30px 0 30px' }}>
          <p style={{lineHeight: 2.0}}>
            Spotted Parking's goal is to make the user's experience 
            of finding a parking spot much faster and more reliable than other apps. With our innovative
            technology we guarantee that you can find a parking spot and be rest-assured that it'll be there
            when you arrive. 
          </p>
          <p>
            Check out our video for a demonstration of how the app works
          </p>
        </div>
      </div>
      <div style={{padding: 20, display: 'flex', flexDirection: 'row', margin: '10px 300px'}} ref={contactRef}>
        <p style={{color: 'white', lineHeight: 2.0}}>
          At Spotted Parking, we take pride in listening to our customers. Please feel free to contact us 
          if you have issues, suggestions, or want clarification on our app. The app is still in test mode. Let us know
          if you want to participate and test it out. The invite will be sent to the email you provide. 
        </p>
        <ContactSection />
      </div>
    </div>
  );
}

export default App;
