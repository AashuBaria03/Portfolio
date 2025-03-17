import NavbarComponent from './components/NavbarComponent';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <>
      <NavbarComponent />
      <div id="home">
        <HomeSection />
      </div>
      <div id="expertise">
        <AboutSection />
      </div>
      <div id="Projects">
        <ProjectsSection />
      </div>
      <div id="contact">
        <FooterSection />
      </div>
    </>
  );
}

export default App;