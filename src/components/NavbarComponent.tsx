import { useState } from 'react';

function NavbarComponent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header>
      <nav>
        <ul className="sidebar" style={{ display: isSidebarOpen ? 'flex' : 'none' }}>
          <li>
            <a href="#home">
              <img src="public/IMG/LOGO2.jpg" alt="Aashu Baria Logo" className="logo" />
            </a>
          </li>
          <li onClick={toggleSidebar}>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26">
                <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
              </svg>
            </a>
          </li>
          <li><a href="#home" onClick={toggleSidebar}>Home</a></li>
          <li><a href="#expertise" onClick={toggleSidebar}>Expertise</a></li>
          <li><a href="#Projects" onClick={toggleSidebar}>Projects</a></li>
          <li><a href="#contact" onClick={toggleSidebar}>Contact</a></li>
        </ul>
        <ul>
          <li>
            <a href="#home">
              <img src="public/IMG/LOGO2.jpg" alt="Aashu Baria Logo" className="logo" />
            </a>
          </li>
          <li className="hideOnMobile"><a href="#home">Home</a></li>
          <li className="hideOnMobile"><a href="#expertise">Expertise</a></li>
          <li className="hideOnMobile"><a href="#Projects">Projects</a></li>
          <li className="hideOnMobile"><a href="#contact">Contact</a></li>
          <li className="menu-button" onClick={toggleSidebar}>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26">
                <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavbarComponent;