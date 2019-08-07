import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <section>
          <div className="header">

            <div>
              <div className="profile-intro">
                <div className="lead">Hello everyone, my name is...
                      <h2 className="name">Stephen Aponte</h2>
                </div>
              </div>
            </div>

            <div className="nav-bar">
              <div className="social-list">
                <a className="nav-link" href="https://www.linkedin.com/in/stephen-aponte-086934168/"><i className="fab fa-linkedin-in fa-fw"></i>
                </a>
                <a className="nav-link" href="https://github.com/saponte87"><i className="fab fa-github-alt fa-fw"></i>
                </a>


                <div className="nav-nav">
                  <a className="nav-link" href="index.html">About</a>

                  <a className="nav-link" href="projects.html">Projects</a>

                  <a className="nav-link" href="resume.html">Resume</a>

                  <a className="nav-link" href="contact.html">Contact</a>
                </div>
              </div>
            </div>




          </div>
        </section>
        {/* <div className="container-skills">
            <h4 className="section-title">Skills Overview</h4>
            <div className="section-intro">I have experience building web applications with a diverse set of skills. Below is a quick overview of my main technical skill sets and tools I've used. Check out my<a href="resume.html"> online resume.</a></div>

              <div className="row">
                <div className="skills-block">
                  <div className="skills-block-inner">
                    <h4 className="skills-cat">Frontend</h4>
                    <div className="skills-icon-holder">
                      <div className="icon">
                        <i className="top fas fa-code"></i>
                      </div>
                    </div>
                    <ul className="skills-list">
                      <li className="skill"><i className="fas fa-check"></i>React/Redux</li>
                      <li className="skill"><i className="fas fa-check"></i>Javascript</li>
                      <li className="skill"><i className="fas fa-check"></i>HTML/CSS/SASS</li>
                    </ul>
                  </div>
                </div>

                <div className="skills-blocks">
                  <div className="skills-block-inner">
                    <h4 className="skills-cat">Backend</h4>
                    <div className="skills-icon-holder">
                      <div className="icon" >
                        <i className="fab fa-python"></i>
                      </div>
                    </div>
                    <ul className="skills-list">
                      <li className="skill"><i className="fas fa-check"></i>Python</li>
                      <li className="skill"><i className="fas fa-check"></i>MySQL</li>
                      <li className="skill"><i className="fas fa-check"></i>MongoDB</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}

        <div className="projects-title">
          <h2 className="proj-header">Portfolio Projects</h2>
        </div>

        <div className="project-row">

          <div className="first-example">
            <div className="example-inner">
              <a className="port-example-links" href="#">
                <img className="project-one-img" src="/assets/scheduler.png"></img>
              </a>
              <div className="example-text-one">
                <h5>Scheduler App!</h5>
                <p>This course scheduler application was created with React and Javascript...</p>
              </div>
              <div>
              <img className="tech-logo" src="/assets/heroku.png"></img>
              <img className="tech-logo" src="/assets/js-logo.png"></img>
              <img className="tech-logo" src="/assets/sass-logo.jpg"></img>
              </div>
            </div>
          </div>

          <div className="second-example">
            <div className="second-example-inner">
              <a className="port-example-links" href="#">
                <img className="project-two-img" src="/assets/madlibs.png"></img>
              </a>
              <div className="example-text-two">
                <h5>Mad Libs App!</h5>
                <p>This fun application, Mad Libs was created with the languages React and Javascript. Try it out!</p>
              </div>
              <img className="tech-logo" src="/assets/heroku.png"></img>
              <img className="tech-logo" src="/assets/js-logo.png"></img>
              <img className="tech-logo" src="/assets/sass-logo.jpg"></img>
            </div>
          </div>


          <div className="third-example">
            <a className="port-example-links">
              <img className="project-one-img" src="/assets/propmanage.png"></img>
            </a>
            <div className="example-text-one">
              <h5>Property Management App!</h5>
              <p>Used all languages listed below. Try it out!</p>
            </div>
            <img className="tech-logo" src="/assets/heroku.png"></img>
            <img className="tech-logo" src="/assets/js-logo.png"></img>
            <img className="tech-logo" src="/assets/sass-logo.jpg"></img>
            <img className="tech-logo" src="/assets/bootstrap.jpeg"></img>
            <img className="tech-logo" src="/assets/react.png"></img>
          </div>

          <div className="fourth-example">
            <h5>Resturant App</h5>
            <p> Currently working on this projectt and will be added once completed!</p>
            <a className="port-example-links"></a>
            <img className="project-one-img" src="/assets/resturant.png"></img>
          </div>
        </div>

        <div className="about-me">
          <div className="bio">
            <h3 className="section-title">About Me</h3>
            With frontend Development, building out the visual components of a website is what im passionate about and also have worked on complex scalable web apps. I love to continue learning and develop my craft. Check out my projects <a className="link-on-bg" href="project.html"></a>and<a className="link-on-bg" href="resume.html"> resume</a>.
              </div>
        </div>


        <div className="container-bottom">
          <div className="text-center">
            <h3 className="section-title">Interested in hiring me for your project?</h3>
            <div className="section-intro">
              <p className="p">Looking for an frontend developer to help build your app or join your team? If you like my work and have some cool project to work on start an initial chat, just drop me an email.</p>
              <a id="send-mail" className="button" href="mailto:saponte1987@gmial.com">
                <span aria-hidden="true" className="icon-mail"></span>
                <i class="fas fa-paper-plane"></i>
                GET IN TOUCH
                  </a>
            </div>

            <div className="social-list-bottom">
              <a className="nav-link" href="https://www.linkedin.com/in/stephen-aponte-086934168/"><i className="fab fa-linkedin-in fa-fw"></i>
              </a>
              <a className="nav-link" href="https://github.com/saponte87"><i className="fab fa-github-alt fa-fw"></i>
              </a>
              
                <a className="nav-link" href="index.html">About</a>

                <a className="nav-link" href="projects.html">Projects</a>

                <a className="nav-link" href="resume.html">Resume</a>

                <a className="nav-link" href="contact.html">Contact</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
