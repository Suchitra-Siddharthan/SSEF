import React from 'react';

function Footer({ date }) {
  return (
    <footer style={{background:'#000',color:'#fff',padding:'1.5rem 0',textAlign:'center',marginTop:'2rem'}}>
      <small style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
        &copy; {new Date().getFullYear()} — All rights reserved.
      </small>

      <div style={{ fontSize: '1rem', lineHeight: '1.7' }}>
        <strong>Server Side Engineering Fundamentals</strong> – React Project
        <br />
        <em>Created by <strong>Suchitra S</strong></em>
      </div>
    </footer>
  );
}

export default Footer; 