const Service = () => {
  return (
    <div className="service-cont" id="service">
      <div className="service">
        <div className="srvs-title" data-aos="fade-down">
          <h1>|</h1>
          <h3>What i do</h3> <hr />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className="srvs g-1">
          <img src="sr_1.png" alt="" /> <h4>Frontend Development</h4>{" "}
          <p>
            Creating visually appealing and user-friendly interfaces using
            cutting-edge technologies to enhance user experiences.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className="srvs g-2">
          <img src="sr-2.png" alt="" /> <h4>Backend Development</h4>{" "}
          <p>
            Building strong server-side systems that power web applications,
            ensuring smooth functionality and data management.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className="srvs g-3">
          <img src="sr-4.png" alt="" /> <h4>Web Design</h4>{" "}
          <p>
           Able to design some UI stuffs using figma
          </p>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className="srvs g-4">
          <img className="res-icon" src="sr-3.png" alt="" />{" "}
          <h4>Responsive User Interface</h4>{" "}
          <p>
            Ensuring websites adapt fluidly to various devices and screen sizes,
            i.e on desktops, tablets, and smartphones
          </p>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className="srvs g-5">
          <img className="ux-icon" src="sr-5.png" alt="" />{" "}
          <h4>UI/UX Optimization</h4>{" "}
          <p>
            Enhancing user interfaces and experiences through usability testing,
            accessibility improvements, and performance enhancements.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className="srvs g-6">
          <img src="sr_6b.png" alt="" /> <h4>Clean Code Practices</h4>{" "}
          <p>
            high-quality, maintainable code that minimizes errors and optimizes
            website and application performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
