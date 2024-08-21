import { useState } from "react";
import { Tilt } from "react-tilt";

const About = () => {
  const [isButton1Clicked, SetIsButton1Clicked] = useState(true);
  const [isButton2Clicked, SetIsButton2Clicked] = useState(false);

  const clickHandler = () => {
    if (isButton2Clicked) {
      SetIsButton2Clicked(false);
      SetIsButton1Clicked(true);
    }
  };

  const clickHandler2 = () => {
    if (isButton1Clicked) {
      SetIsButton1Clicked(false);
      SetIsButton2Clicked(true);
    }
  };
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    speed: 1000, // Speed of the enter/exit transition
    scale: 1,
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  return (
    <div className="about" id="about">
      <div data-aos="fade-right" className="about-title">
        <h1>|</h1>
        <h3>About me</h3> <hr></hr>
      </div>
      <div className="about-cont1">
        <img data-aos="fade-up" className="sh3" src="sh3.svg" alt="" />
        <img data-aos="fade-up" className="sh4" src="sh4.svg" alt="" />
        <Tilt
          className="tilt"
          options={defaultOptions}
          style={{ height: "auto", width: "auto" }}
        >
          <p data-aos="fade-right">Hover Over</p>
          <img
            data-aos="fade-right"
            className="photo"
            src="banner.png"
            alt=""
          />
        </Tilt>

        <p data-aos="fade-right" className="about-descr">
          <b>"Coding isn't just what I do; it's who I am."</b> <br /> <br />I am
          a developer who enjoys building stuffs on the web. This{" "}
          <span className="main-point">inspired</span> me to teach my self web
          development. <br /> <br /> During my first year on this path, I
          primarily relied on free online resources, such as YouTube tutorials,
          documentation, and platforms like
          <span className="main-point">Free Code Camp</span> I I then delved
          into a journey of sofware development at{" "}
          <span className="main-point">Uncommon.org</span> Where l learnt
          frontend , backend, data structures and algorithms. <br /> <br />
          <span className="main-point">Certificate</span>, I started building my
          own projects, and I continue to do so. Today, I am seeking a full-time
          role where I can contribute my skills both in coding and business to
          help a company achieve their goals.
        </p>
      </div>
      <div className="about-cont2">
        <img className="sh5" src="sh5.svg" alt="" />
        <div className="abt-child-cont1">
          <div
            className="button-cont"
            style={{
              justifyContent: isButton2Clicked ? "flex-end" : "",
            }}
          >
            <div
              style={{
                display: isButton1Clicked ? "" : "none",
              }}
              className="button1"
            ></div>
            <div
              style={{
                display: isButton2Clicked ? "" : "none",
              }}
              className="button2"
            ></div>
          </div>
          <p
            className={`btn-name btn-name1 ${
              isButton1Clicked ? "clicked" : ""
            }`}
            style={{
              opacity: isButton1Clicked ? "1" : "0.1",
            }}
            onClick={clickHandler}
          >
            Skills
          </p>
          <p
            className={`btn-name btn-name2 ${
              isButton2Clicked ? "clicked" : ""
            }`}
            style={{
              opacity: isButton2Clicked ? "1" : "0.1",
            }}
            onClick={clickHandler2}
          >
            Education
          </p>
        </div>

        <div className="abt-child-cont2">
          <div
            className="skill-main-cont"
            style={{
              opacity: isButton1Clicked ? "1" : "0",
              display: isButton1Clicked ? "" : "none",
              transition: "all 0.5s",
            }}
          >
            <div className="skill-cont1">
              <div data-aos="fade-right redux" className="skill-icon">
                <img src="react.png" alt="" /> <p>React.js</p>
              </div>
              {/* <div data-aos="fade-right" className="skill-icon ">
                <img className="redux" src="redux.svg" alt="" /> <p>Redux</p>
              </div> */}
              <div data-aos="fade-right" className="skill-icon">
                <img src="node1.png" alt="" /> <p>Node.js</p>
              </div>
              <div data-aos="fade-right" className="skill-icon">
                <img src="mongo.png" alt="" /> <p>MongoDB</p>
              </div>
              <div data-aos="fade-right" className="skill-icon">
                <img src="bootstrap.png" alt="" /> <p>Bootstrap</p>
              </div>
              {/* <div data-aos="fade-right" className="skill-icon">
                <img src="jQuery.png" alt="" /> <p>jQuery</p>
              </div> */}
              {/* <div data-aos="fade-right" className="skill-icon">
                <img src="mui.png" alt="" /> <p>MUI</p>
              </div> */}
              <div data-aos="fade-right" className="skill-icon">
                <img src="exp.png" alt="" /> <p>Express.js</p>
              </div>
              <div data-aos="fade-right" className="skill-icon">
                <img className="docker" src="figma-1.svg" alt="" /> <p>Figma</p>
              </div>
              <div data-aos="fade-right" className="skill-icon">
                <img src="git.png" alt="" /> <p>Git</p>
              </div>
              <div data-aos="fade-right" className="skill-icon">
                <img src="github.png" alt="" /> <p>GitHub</p>
              </div>
              <div data-aos="fade-right" className="skill-icon">
                <img src="html.png" alt="" /> <p>HTML</p>
              </div>
              <div data-aos="fade-right" className="skill-icon">
                <img src="html.png" alt="" /> <p>Javascript</p>
              </div>
            </div>
            <div className="skill-cont2">
              <div className="middle-line"></div>
              <img
                data-aos="fade-up"
                className="soft soft1"
                src="soft4.png"
                alt=""
              />
              <img
                data-aos="fade-up"
                className="soft soft2"
                src="soft3.png"
                alt=""
              />
            </div>
          </div>
          <div
            className="educ-cont"
            style={{
              opacity: isButton2Clicked ? "1" : "0",
              display: isButton2Clicked ? "" : "none",
              transition: "opacity 0.5s",
            }}
          >
            <div data-aos="fade-up" className="btn-shiny-border educ educ1">
              <img src="basic.png" alt="" />
              <p>
                <b>Kuwadzana 3 Primary: </b>I started my journey at Kuwadzana 3
                primary school from grade 1 to 7 with 10 units in 2019
              </p>
            </div>
            <div data-aos="fade-down" className="btn-shiny-border educ educ2">
              <i className="fa-brands fa-free-code-camp"></i>
              <p>
                <b>Mufakose 2 High School: </b> 
                Completed my ordinary level with 10 passes at Mufakose 2 High School
              </p>
            </div>
            <div data-aos="fade-up" className="btn-shiny-border educ educ3">
              <img src="udemy.png" alt="" />
              <p>
                <b>Uncommon.org: </b> Then continue fullstack development
                bootcamp trainee at Uncommon.org
              </p>
            </div>
            <div data-aos="fade-down" className="btn-shiny-border educ educ4">
              <img src="develop.png" alt="" />
              <p>
                <b>Udemy: </b>Was part of udemy students learning software development during the year of 2024 
              
              </p>
            </div>
            <img className="progress1" src="educ.svg" alt="" />
            <img className="progress2" src="educ2.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
