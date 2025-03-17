function FooterSection() {
    return (
      <div id="contact">
        <div className="MainFooter">
          <div className="left-footer">
            <h3>Aashu Baria</h3><br />
            <div className="address">
              <a>
                <img src="/SVG/location.png" alt="" width="24px" height="24px" />
              </a>
              <h5>
                My Location: Block-B-[10] Adit boys hostel, AD Patel Institute of Technology, New V. Nagar, New Vallabh Vidyanagar, GIDC, Anand, Vitthal Udyognagar INA, Gujarat 338249
              </h5><br />
            </div>
            <h5>Email: <a href="mailto:aashu@example.com" style={{ textDecoration: 'none', color: 'whitesmoke' }}>ashubaria2004@gmail.com</a></h5>
            <h5>Phone: <a href="tel:+918469460553" style={{ textDecoration: 'none', color: 'whitesmoke' }}>+91 8469460553</a></h5>
          </div>
          <div className="right-footer">
            <div className="category">
              <h4>Programming Languages</h4>
              <ul>
                <li>Java</li>
                <li>Python</li>
                <li>C</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>C++</li>
                <li>JavaScript</li>
                <li>SQL</li>
              </ul>
            </div>
            <div className="category">
              <h4>Frameworks & Libraries</h4>
              <ul>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Django</li>
                <li>Bootstrap</li>
                <li>Flask</li>
              </ul>
            </div>
            <div className="category">
              <h4>Computer Engineering Topics</h4>
              <ul>
                <li>Data Structures</li>
                <li>Algorithms</li>
                <li>Operating Systems</li>
                <li>Computer Networks</li>
                <li>Database Management Systems</li>
              </ul>
            </div>
            <div className="category">
              <h4>Tools & Technologies</h4>
              <ul>
                <li>Git</li>
                <li>Docker</li>
                <li>Azure</li>
                <li>VS Code</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
          </div>
        </div>
        <footer>
          <p>&copy; 2025 AB. All rights reserved. Designed with ❤️ by Aashu Baria</p>
        </footer>
      </div>
    );
  }
  
  export default FooterSection;