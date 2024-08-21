import { useState, useEffect } from "react";
import Typed from "react-typed";

function Hero() {
  const [isClicked, setIsClicked] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  function clickHandler() {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 700);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 65) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="hero" id="hero">
        <div className="hero-bg">
          <img className="hr-imga" src="bg2.png" alt="" />
        </div>
        <nav
          className={`navbar fixed-top navbar-expand-sm ${
            scrolled ? "scrolled" : ""
          }`}
        >
          <div className="container-fluid">
            <div className="logo-cont">
              <a className="navbar-brand" href="/#">
                TAPIWANASHE
              </a>
            </div>
            <div className="main-links-cont">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <div className="nav-link-cont">
                    <li className="nav-item ">
                      <a className="nav-link underlined" href="#about">
                        <p>
                          <span>&lt;</span>ABOUT /<span>&gt;</span>
                        </p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link underlined" href="#service">
                        <p>
                          <span>&lt;</span>SERVICE /<span>&gt;</span>
                        </p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link underlined" href="#works">
                        <p>
                          <span>&lt;</span>WORKS /<span>&gt;</span>
                        </p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link underlined" href="#contact">
                        <p>
                          <span>&lt;</span>CONTACT /<span>&gt;</span>
                        </p>
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
            <div className="main-links-cont2">
              <div
                className={`hamburger-icon ${isNavOpen && "gap"}`}
                id="icon"
                onClick={toggleNav}
              >
                <div className={`icon-1 ${isNavOpen && "a"}`} id="a"></div>
                <div className={`icon-2 ${isNavOpen && "c"}`} id="b"></div>
                <div className={`icon-3 ${isNavOpen && "b"}`} id="c"></div>
              </div>

              <div id="nav" className={isNavOpen ? "show" : ""}>
                <ul className="ul">
                  <li className="li li1">
                    <a href="#about">About</a>
                  </li>
                  <li className="li li2">
                    <a href="#service">Service</a>
                  </li>
                  <li className="li li3">
                    <a href="#works">Works</a>
                  </li>
                  <li className="li li4">
                    <a href="#contact">Contact</a>
                  </li>
                  <li className="li li5">
                    <a className="resume2" href="resume.pdf">
                      Resume
                    </a>
                  </li>
                </ul>
              </div>

              <div
                id="blue"
                className={isNavOpen ? "slide" : "dark-blue"}
              ></div>
            </div>
            <li className="nav-item last-link2">
              <a
                className={`nav-link resume-icon ${
                  isClicked ? `no-hover` : ""
                }`}
                style={{
                  backgroundColor: scrolled ? "#16202c" : "",
                  transition: "all 0.5s",
                }}
                onClick={clickHandler}
                href="resume.pdf"
              >
                <p>
                  <span></span>Resume<span></span>
                </p>
              </a>
              <div className="resume-back"></div>
            </li>
          </div>
        </nav>
        <div className="hero-main-child">
          <div className="main-first glitch-wrapper content">
            <img data-aos="fade-right" className="sh1" src="sh1.svg" alt="" />
            <img className="swing1" src="swing1.svg" alt="" />
            <div className="intro-cont">
              <p data-aos="fade-right" className="hello hello1">
                Hello👋, My name is
              </p>
              <div data-aos="fade-right" className="name-cont">
                <p className="hello2">Hello👋, i am</p>
                <h1 className="name text" data-text="Tapiwanashe Chakurungama">
                  Tapiwanashe
                </h1>
              </div>
              <h1 className="skill-cont">
                <span data-aos="fade-right" className="i-am i-am1">
                  I am a
                </span>
                <span data-aos="fade-right" className="niche">
                  <Typed
                    strings={[
                      "<i className='fas fa-solid fa-laptop-code'></i>Front-end Developer.",
                      "<i className='fas fa-brands fa-react'></i>Code Instructor",
                      "<i className='fas fa-solid fa-database'></i>Software Developer",
                      "<i className='fas fa-solid fa-object-ungroup'></i>UI/UX Enthusiast.",
                    ]}
                    typeSpeed={90}
                    delaySpeed={90}
                    backSpeed={20}
                    contentType={"html"}
                    loop
                  />
                </span>{" "}
              </h1>
              <p data-aos="fade-right" className="descr descr1">
                Hi, I'm Tapiwanashe Chakurungama , 17 years Junior Software
                Developer Student at Uncommon.org. Passionate about designing
                beautiful web and application interfaces. Based in Zimbabwe.My
                expertise spans in html, CSS, GIT, GitHub,Node.js,
                Express.js,MongoDB and JavaScript with a strong foundation in
                libraries like React. Having worked on a variety of projects, I
                possess the skills to design and implement robust solutions. My
                commitment to staying abreast of industry trends ensures that I
                can contribute effectively to the ever-evolving field of web
                development
              </p>
              <p data-aos="fade-right" className="descr2">
                Hi, I'm Tapiwanashe Chakurungama , 17 years Junior Software
                Developer Student at Uncommon.org. Passionate about designing
                beautiful web and application interfaces. Based in Zimbabwe.
              </p>
              <div data-aos="fade-right" className="getin-cont">
                <div className={`getin-front getin-front1`}>
                  <a href="mailto:chakurungamatapiwanashe@gmail.com">Get in touch</a>
                </div>
                <div className="getin-back2"></div>
              </div>
              <div data-aos="slide-up" className="platform-cont">
                <div className="platform1">
                  <a href="https://github.com/tapiwanashechakurungama">
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/tapiwanashechakurungama">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a href="https://twitter.com/tapiwanashechakurungama">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </div>
                <div className="platform2"></div>
              </div>
            </div>
          </div>
          <div className="main-sec">
            <img data-aos="fade-left" className="sh2" src="sh2.svg" alt="" />
            <img className="swing2" src="swing2.svg" alt="" />
            <div className="pc-cont pc-cont1">
              {/* <div className="cup-cont">
                <img className="" src="cup.svg" alt="" />
                <img src="cup-shd.svg" alt="" />
              </div> */}

              <img
                data-aos="fade-left"
                className="pc"
                src="pc_final11.svg"
                alt=""
              />
              {/* <img
                style={currentGifStyle}
                className="code1-gif"
                src={gifs[currentGifIndex]}
                alt={`GIF ${currentGifIndex + 1}`}
              /> */}
            </div>
            <div className="pc-cont2">
              <img className="pc" src="pc_final22.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
