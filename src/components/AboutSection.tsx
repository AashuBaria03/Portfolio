function AboutSection() {
    return (
      <div id="expertise">
        <div className="expertise">
          <div className="photo">
            <img src="public/IMG/AboutMe/Aashu1.jpg" alt="MyIMG" loading="lazy" />
          </div>
          <div className="content">
            <h1>About Me</h1>
            <div className="aboutme">
              <h2>Hello! I’m Aashu Baria...</h2>
              <p className="aboutP">
                I am a passionate <span className="highlight">Computer Engineering</span> student currently pursuing my <span className="highlight">B.Tech</span> at <span className="highlight">ADIT College, Anand</span>. With a strong academic foundation from GSEB, where I completed my 12th standard, I have embarked on a journey to leverage technology and innovation to solve real-world challenges.
              </p>
              <p className="aboutP">
                I’m not just a student; I’m an <span className="highlight">explorer</span> and a <span className="highlight">researcher</span> at heart. I love diving into new technologies, uncovering patterns in data, and building efficient systems that make life easier and more exciting. My drive to learn and create has led me to develop expertise in <span className="highlight">web development</span>, <span className="highlight">data analysis</span>, and <span className="highlight">database management</span>.
              </p>
            </div>
            <h3><i className="fa fa-graduation-cap"></i> Education</h3>
            <div className="education">
              <ul>
                <li>
                  <span className="degree">B.Tech in Computer Engineering (Ongoing)</span>
                  <span className="institution">- ADIT College, Anand</span>
                </li>
                <li>
                  <span className="degree">12th Science</span>
                  <span className="institution">- GSEB Board, 2022</span>
                </li>
              </ul>
            </div>
            <div className="hobbiesTitle"><i className="fa fa-heart"></i> Hobbies</div>
            <div className="hobbies">
              <ul>
                <li>
                  <i className="fa fa-lightbulb"></i>
                  <span className="title">Exploring New Technologies:</span>
                  Constantly on the lookout for emerging trends in technology and finding creative ways to integrate them into my projects.
                </li>
                <li>
                  <i className="fa fa-search"></i>
                  <span className="title">Research:</span>
                  Delving deep into problems to discover innovative solutions and better understand the world of technology.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default AboutSection;