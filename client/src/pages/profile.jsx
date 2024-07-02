import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Profile = () => {
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const handleScroll = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    
  };

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9' }}>
      <div style={{
        backgroundColor: '#318CE7',
        color: 'white',
        padding: '20px',
        width: '250px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{ textAlign: 'center' }}>
          <img 
            src={currentUser.avatar} 
            alt="Profile" 
            style={{ borderRadius: '50%', width: '100px', marginBottom: '20px', border: '2px solid white' }}
          />
          <h2 style={{ margin: '10px 0' }}>{currentUser.username}</h2>
          <p style={{ fontSize: '14px', opacity: 0.8 }}>General Member</p>
        </div>
        <nav style={{ marginTop: '30px', width: '100%' }}>
          <ul style={{ listStyle: 'none', padding: 0, textAlign: 'center' }}>
            <li style={{ padding: '15px 0', cursor: 'pointer', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }} onClick={() => handleScroll('home')}>Home</li>
            <li style={{ padding: '15px 0', cursor: 'pointer', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }} onClick={() => handleScroll('about')}>About</li>
            <li style={{ padding: '15px 0', cursor: 'pointer' }} onClick={() => handleScroll('contact')}>Contact</li>
          </ul>
        </nav>
        <div style={{ marginTop: 'auto', paddingBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
            <a href="https://facebook.com" style={{ color: 'white' }}>
              <i className="fa fa-facebook-f" style={{ fontSize: '24px' }} />
            </a>
            <a href="https://twitter.com" style={{ color: 'white' }}>
              <i className="fa fa-twitter" style={{ fontSize: '24px' }} />
            </a>
            <a href="https://instagram.com" style={{ color: 'white' }}>
              <i className="fa fa-instagram" style={{ fontSize: '24px' }} />
            </a>
            <a href="https://youtube.com" style={{ color: 'white' }}>
              <i className="fa fa-youtube" style={{ fontSize: '24px' }} />
            </a>
            <a href="https://dribbble.com" style={{ color: 'white' }}>
              <i className="fa fa-dribbble" style={{ fontSize: '24px' }} />
            </a>
          </div>
          <p style={{ marginTop: '10px', fontSize: '12px' }}>© AUST-CMS</p>
        </div>
      </div>
      <div style={{ flex: 1, padding: '40px', overflowY: 'scroll' }}>
        <section id="home" style={{ height: '100vh' }}>
          <h1 style={{ fontSize: '2.5em', marginBottom: '20px' }}>{currentUser.username}.</h1>
          <p style={{ fontSize: '1.2em', marginBottom: '40px' }}>
           I am General Member of aust photography club.
          </p>
          
          </section>
          <section id="about" style={{ height: '100vh', marginTop: '50px', display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '30%', marginRight: '20px' }}>
              <img 
                src={currentUser.avatar}
                alt="About" 
                style={{ borderRadius: '10px', width: '100%' }}
              />
            </div>
            <div style={{ width: '70%' }}>
              <h1 style={{ fontSize: '2em', marginBottom: '20px' }}>About Me</h1>
              <p style={{ fontSize: '1.2em', lineHeight: '1.5' }}>
                I'm a passionate club member.
              </p>
              <p style={{ fontSize: '1.2em', lineHeight: '1.5', marginTop: '20px' }}>
                In my free time, I enjoy reading tech blogs, contributing to open-source projects, and exploring new technologies.
                I'm always eager to learn and grow as a club panel member.
              </p>
            </div>
          </section>
          <section id="contact" style={{ height: '100vh', marginTop: '50px' }}>
            <h1 style={{ fontSize: '2em', marginBottom: '20px' }}>Contact</h1>
            <p style={{ fontSize: '1.2em', lineHeight: '1.5' }}>
              If you'd like to get in touch, feel free to reach out via email or connect with me on social media.
            </p>
            <p style={{ fontSize: '1.2em', lineHeight: '1.5', marginTop: '20px' }}>
              Email: yeas.cse.20220104150@aust.edu<br />
              Phone: 018XXXXXXX
            </p>
          </section>
        </div>
      </div>
    );
  };
  
  export default Profile;