// import React from 'react';
import '../styles.css'; // Import the existing CSS file

function ProjectShowcase() {
  return (
    <div>
      <header className="header">
        <h1>Project Screenshots Showcase</h1>
        <p>Explore the features and design of my project through detailed screenshots.</p>
      </header>

      <div className="container">
        <h1>Responsive Periodic Table Website</h1>
        <p>
          This project is a <span className="highlight">meticulously designed</span>, fully responsive periodic table
          website created using <span className="highlight">HTML, CSS, and JavaScript</span>. It is an interactive
          platform that goes beyond the basics, offering in-depth information about each element and an engaging quiz
          game feature for users to test their knowledge.
        </p>
        <br />
        <p>
          The homepage welcomes users with an elegant design, showcasing the periodic table in a visually appealing
          layout. Each element is clickable, leading to a detailed page containing its{' '}
          <span className="highlight">atomic number, symbol, weight, electron configuration</span>, and fascinating facts.
          The responsive design ensures seamless functionality across devices, from desktops to smartphones, making it
          accessible to everyone.
        </p>
        <br />
        <p>
          One of the highlights of this website is the integrated <span className="highlight">quiz game</span>. It
          challenges users with various types of questions, such as identifying elements based on properties, matching
          symbols to names, and more. A dynamic scoring system adds a competitive edge, encouraging users to improve
          their knowledge.
        </p>
        <br />
        <p>
          The user-friendly interface is enhanced by smooth animations and hover effects, providing an engaging
          experience. Additionally, the codebase is optimized for performance, ensuring fast loading times and a fluid
          user experience.
        </p>
        <br />
        <p>
          This project is ideal for <span className="highlight">students, educators</span>, or anyone interested in
          learning about chemistry in an interactive and enjoyable way. It not only serves as an educational tool but
          also demonstrates the powerful capabilities of modern web technologies.
        </p>
        <br />

        {/* Screenshot Sections */}
        <div className="my-screenshort">
          <div className="SScard">
            <img src="/IMG/ProjectShowcase/Screenshot (41).png" alt="Screenshot 1" />
          </div>
        </div>
        <br />
        <p style={{ textAlign: 'center' }}>--------------------📃--------------------</p>
        <br />

        <div className="my-screenshort">
          <div className="SScard">
            <img src="/IMG/ProjectShowcase/Screenshot (42).png" alt="Screenshot 2" />
          </div>
        </div>
        <br />
        <p style={{ textAlign: 'center' }}>--------------------📃--------------------</p>
        <br />

        <div className="my-screenshort">
          <div className="SScard">
            <img src="/IMG/ProjectShowcase/Screenshot (50).png" alt="Screenshot 3" />
          </div>
        </div>
        <br />
        <p style={{ textAlign: 'center' }}>--------------------📃--------------------</p>
        <br />

        <div className="my-screenshort">
          <div className="SScard">
            <img src="/IMG/ProjectShowcase/Screenshot (51).png" alt="Screenshot 4" />
          </div>
        </div>
        <br />
        <p style={{ textAlign: 'center' }}>--------------------📃--------------------</p>
        <br />

        <div className="my-screenshort">
          <div className="SScard">
            <img src="/IMG/ProjectShowcase/Screenshot (52).png" alt="Screenshot 5" />
          </div>
        </div>
        <br />
        <p style={{ textAlign: 'center' }}>--------------------📃--------------------</p>
        <br />

        <div className="my-screenshort">
          <div className="SScard">
            <img src="/IMG/ProjectShowcase/Screenshot (53).png" alt="Screenshot 6" />
          </div>
        </div>
      </div>

      {/* Footer is likely handled by FooterSection.tsx, so omitted here */}
    </div>
  );
}

export default ProjectShowcase;