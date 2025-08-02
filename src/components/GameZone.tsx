import { useState } from 'react';
import '../styles.css';

const screenshots = [
  {
    num: 54,
    alt: 'Screenshot 54',
  },
  {
    num: 55,
    alt: 'Screenshot 55',
  },
  {
    num: 56,
    alt: 'Screenshot 56',
  },
  {
    num: 57,
    alt: 'Screenshot 57',
  },
  {
    num: 58,
    alt: 'Screenshot 58',
  },
  {
    num: 59,
    alt: 'Screenshot 59',
  },
  {
    num: 60,
    alt: 'Screenshot 60',
  },
];

function GameZone({ onClose }: { onClose: () => void }) {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => setCurrent((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  const handleNext = () => setCurrent((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));

  return (
    <div className="gamezone-modal">
      <button className="close-btn" onClick={onClose} style={{position: 'absolute', top: 20, right: 20, zIndex: 10}}>Close</button>
      <header className="header">
        <h1>Project Screenshots Showcase</h1>
        <p>Explore the features and design of my project through detailed screenshots.</p>
      </header>
      <div className="container">
        <h1>E-Sport Game Organization Website</h1>
        <p>This project is a <span className="highlight">meticulously crafted</span>, fully responsive e-sport game organization website created using <span className="highlight">HTML, CSS, JavaScript, PHP, and SQL</span>. It is an interactive platform that goes beyond just event listing, offering a comprehensive portal for managing gaming tournaments and engaging users with dynamic features.</p><br />
        <p>The homepage welcomes users with an eye-catching design, showcasing <span className="highlight">upcoming e-sport events</span> in a visually captivating layout. Each event is presented as an individual card with details such as the game title, date, entry fee, and skill level. Users can click on the event card to access a dedicated registration section where they can easily sign up to participate.</p><br />
        <p>The website includes a seamless <span className="highlight">login and signup system</span>, ensuring a secure and personalized experience. Users who forget their credentials can use the <span className="highlight">forgot password</span> feature to recover access. All user and event data is efficiently managed through a <span className="highlight">SQL database</span> powered by XAMPP, ensuring robust functionality and secure data handling.</p><br />
        <p>The site’s responsive design ensures compatibility across a wide range of devices, from desktops to smartphones. Smooth animations, hover effects, and an intuitive layout create an engaging and user-friendly experience for gamers and event organizers alike.</p><br />
        <p>One of the highlights of this platform is the integration of a <span className="highlight">dedicated registration system</span> for each event, allowing participants to register effortlessly. The system dynamically handles user data and event-specific registrations, enhancing usability for organizers and players.</p><br />
        <p>Designed for <span className="highlight">e-sports enthusiasts, event organizers, and competitive gamers</span>, this project serves as an ideal platform to bring the gaming community together. It not only facilitates event organization but also showcases the potential of modern web development technologies, including database-driven functionality and interactivity.</p><br />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <div className="my-screenshort">
          <div className="SScard">
            <img src={`/IMG/Project_card/Screenshot (${screenshots[current].num}).png`} alt={screenshots[current].alt} style={{ maxWidth: '100%', maxHeight: '60vh', borderRadius: 8 }} />
          </div>
        </div>
        <div style={{ margin: '16px 0', display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <button onClick={handlePrev} className="btn">Prev</button>
          <span style={{ color: '#333', fontWeight: 500 }}>{current + 1} / {screenshots.length}</span>
          <button onClick={handleNext} className="btn">Next</button>
        </div>
      </div>
      <div className="footer">
        <p>&copy; 2025 AB. All rights reserved. Designed with ❤️ by Aashu Baria</p>
      </div>
    </div>
  );
}

export default GameZone; 