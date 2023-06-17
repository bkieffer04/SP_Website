import React from 'react';

function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted!');
  };

  return (
    <div style={{display: 'flex', paddingBottom: 20, flexDirection: 'column', textAlign: 'center', border: '2px solid white', backgroundColor: 'white', borderRadius: 5}}>
      <h2 style={{color: '#565656'}}>Contact Us</h2>
      <div style={{padding: 10, margin: '10px 0'}}>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 10, display: 'flex', alignItems: 'center'}}>
          <input style={{width: 160, backgroundColor: '#d5d9f4', border: '2px solid black', padding: '5px 20px'}} placeholder='Name' type="text" id="user_name" name="user_name" required />
        </div>
        <div style={{ marginBottom: 10, display: 'flex', alignItems: 'center' }}>
          <textarea style={{width: 160, backgroundColor: '#d5d9f4', border: '2px solid black', padding: '5px 20px'}} placeholder='How can we help?' id="message" name="message" rows="1" cols="20" required></textarea>
        </div>
        <div style={{ marginBottom: 10, display: 'flex', alignItems: 'center' }}>
          <input style={{width: 160, backgroundColor: '#d5d9f4', border: '2px solid black', padding: '5px 20px'}} placeholder='Email' type="email" id="email" name="email" required />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button style={{color: 'white' , padding: '8px 35px 8px 35px', marginTop: 10 , backgroundColor: '#565656', borderRadius: 15}} type="submit">Submit</button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default ContactSection;
