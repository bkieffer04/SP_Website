import React from 'react';

function ContactSection() {

  return (
    <div style={{display: 'flex', paddingBottom: 20, flexDirection: 'column', textAlign: 'center', border: '2px solid white', backgroundColor: 'white', borderRadius: 5}}>
      <h2 style={{color: '#565656'}}>Contact Us</h2>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <text style={{color: 'white', backgroundColor: '#96a1d4', padding: '10px 10px 10px 10px', margin: 10, borderRadius: 15}}>brian.kieffer@spottedparking.co</text>
        <text style={{color: 'white', backgroundColor: '#96a1d4', padding: '10px 10px 10px 10px', margin: 10, borderRadius: 15}}>{'(206)947-5481'}</text>
      </div>
    </div>
  );
}

export default ContactSection;
