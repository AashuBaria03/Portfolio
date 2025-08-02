import { useState, useEffect } from 'react';
import SocialMediaLinks from './SocialMediaLinks';

function HomeSection() {
  const roles = ["Full Stack Developer", "Data Analyst", "Data Scientist"];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="video-container">
      <video autoPlay muted loop id="background-video">
        <source src="public/Video/WEB.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="intro">
        <h1 className="greeting">Hello! it's me <span className="name">Aashu Baria</span></h1>
      </div>
      <div className="intro-container">
        <h1 className="intro-text">I'm a <span className="dynamic-text">{roles[roleIndex]}</span></h1>
      </div>
      <div className="Animation1">
        <img src="public/Animation/Animation - 1734879773164.gif" alt="A Cool GIF" style={{ width: '400px', height: '200px' }} />
      </div>
      <SocialMediaLinks />
      <div className="CVcontainer">
        <a href="public/IMG/HomeBackGround/ADIT_CE_BariaAashuKamleshkumar.pdf" className="CVdownload-btn" download="ADIT_CE_BariaAashuKamleshkumar.pdf">Download CV</a>
      </div>
    </div>
  );
}

export default HomeSection;