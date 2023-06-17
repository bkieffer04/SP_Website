import React, { useRef } from 'react';
import VideoComponent from './video_component';
import ContactSection from './contact_section';
import businessLogo from './assets/business_logo.png';
import brians_photo from './assets/brian_photo.png'
import kaelys_photo from './assets/kaely_headshot.png'

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
          <text style={{color: 'white', marginRight: 20}}>View Our Locations</text>
          <text style={{color: 'white', cursor: 'pointer', marginRight: 20}} onClick={handleAboutClick}>About Us</text>
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
          At Spotted Parking, we take pride in listening to our customers. Please feel free to contact us, 
          if you have issues, suggestions, or want clarification on our app. The app is still in test mode, so if you want
          to participate and test it out, go ahead and include that in your message. The invite will be sent to
          the email you enter. 
        </p>
        <ContactSection />
      </div>
      <div ref={aboutRef} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'white', width: '100%'}}>
        <h2>About Us</h2>
        <div style={{display: 'flex', justifyContent: 'center', flexDirection:'column', margin: '20px 300px 0 300px', alignItems: 'center'}}>
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <img style={{width: 200, height: 200, margin: 20}} src={brians_photo} alt='Brians Headshot'/>
            <div>
              <h3>Co-Founder and CTO</h3>
              <p style={{textAlign: 'left', lineHeight: 2.0}}>
                Brian is the developer behind Spotted Parking. From design architecture and tech stack
                to publishing the app to IOS and Android. He has been working on this project consistenly and 
                is dedicating his work to make sure user's time is being spent efficiently. Brian lives in 
                Austin and has experienced first hand the lack of information when it comes to parking and 
                available spots. Not only does he want to helps users, he also wants to hold them accountable. 
                With this app government workers will beable to give out tickets to parking violators quicker and 
                more consistently. He hopes you enjoy the app and will take user feedback, always. 
              </p>
            </div>
          </div>
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <div>
              <h3>Co-Founder and CEO</h3>
              <p style={{textAlign: 'left', lineHeight: 2.0}}>
                Kaely handles the business side of Spotted Parking. Without her, this idea would have never
                been available to the public. She is behind the design, finances, and the connections. She is crucial
                to the company. 
              </p>
            </div>
            <img style={{width: 200, height: 200, margin: 20}} src={kaelys_photo} alt='Kaelys Headshot'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
