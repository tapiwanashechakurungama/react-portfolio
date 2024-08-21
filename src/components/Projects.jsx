import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#proj-image-gallery",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);
  return (
    <div data-aos="fade-right" className="project" id="works">
      <div className="pros-title">
        <h1>|</h1>
        <h3>Selected Projects I've Built</h3>
        <hr />
      </div>

      <div data-aos="zoom-up" className="pros-cont">
        <div className="pros">
          <div className="pros-front">
            <div>
              <h4>Nova-Cars-An-Ecommerce-Website</h4>
              <p>
                Nova-Cars is a MERN stack website designed and built for
                effortless car exploration and purchase. It allows users
                navigate the platform easily to find and reserve a wide variety
                of cars, including SUVs, trucks, and vans...
                <i className="click">
                  (click the 'search' icon below to learn more)
                </i>
              </p>
            </div>
            <div className="pros-desc">
              <div>
                <a
                  href="https://nova-cars.vercel.app"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
                <div id="proj-image-gallery" href="/#">
                  <a
                    href="nov1.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"619"}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i className="fa-solid fa-magnifying-glass-plus"></i>
                  </a>
                  <a
                    href="nov2.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"619"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>
                  <a
                    href="nov3.png"
                    data-pswp-width={"1320 "}
                    data-pswp-height={"619"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>
                  <a
                    href="nov4.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"619"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>
                  <a
                    href="nov5.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"619"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>
                  <a
                    href="nov6.png"
                    data-pswp-width={"1320 "}
                    data-pswp-height={"619"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>
                  <a
                    href="nov7.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"619"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>
                  <a
                    href="nov8.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"619"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>
                  <a
                    href="nov9.png"
                    data-pswp-width={"1320 "}
                    data-pswp-height={"619"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>
                  <a
                    href="nov10.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"619"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>
                  <a
                    href="nov11.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"619"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>

                  <a
                    href="nov12.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"619"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>
                  <a
                    href="nov13.png"
                    data-pswp-width={"1320 "}
                    data-pswp-height={"619"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>
                  <a
                    href="nov14.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"619"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>
                  <a
                    href="nov15.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"619"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>
                  <a
                    href="nov16.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"619"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>
                  <a
                    href="nova-mongo.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"610.1887"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>
                </div>
              </div>
              <div>
                <p>React</p>
                <p>Node</p>
                <p>Express</p>
                <p>Git</p>
              </div>
            </div>
          </div>
          <img className="pros-img" src="nov1.png" alt="" srcSet="" />
          <div className="pros-back"></div>
        </div>
        <div className="pros">
          <div className="pros-front">
            <div>
              <h4>Complete Netflix Clone</h4>
              <p>
                This project is a complete Netflix clone built with the MERN
                stack and powered by the TMDB API. It contains features like
                searching movies and TV shows, adding them to the watchlist...
                <i className="click">
                  (click the 'search' icon below to learn more)
                </i>
              </p>
            </div>
            <div className="pros-desc">
              <div>
                <a
                  href="https://moviesapk-kudakwashe-gudyangas-projects.vercel.app/#"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
                <div id="proj-image-gallery" href="/#">
                  <a
                    href="netflix4.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"614.5546 pt"}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i className="fa-solid fa-magnifying-glass-plus"></i>
                  </a>
                </div>
              </div>
              <div>
                <p>React</p>
                <p>Tailwind</p>
                <p>Bootsrap</p>
              </div>
            </div>
          </div>
          <img className="pros-img" src="netflix4.png" alt="" srcSet="" />
          <div className="pros-back"></div>
        </div>
        <div className="pros">
          <div className="pros-front">
            {" "}
            <div>
              <h4>Eshop</h4>
              <p>
                A dynamic and easy-to-use platform selling headphones and gadget
                <i className="click">
                  (click the 'search' icon below to learn more)
                </i>
              </p>
            </div>
            <div className="pros-desc">
              <div>
                <a
                  href="https://eshop-tcj.netlify.app/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/dagmfre/Bloggerhub"
                >
                  {/* <i className="fa-brands fa-github"></i> */}
                </a>
                <div id="proj-image-gallery" href="/#"></div>
              </div>
              <div>
                <br />
                <p>JavaScript</p>
                <p>Html</p>
                <p>Bootsrap</p>
                <p>Css</p>
              </div>
            </div>
          </div>
          <img className="pros-img" src="wow.jpg" alt="" srcSet="" />
          <div className="pros-back"></div>
        </div>
        <div className="pros">
          <div className="pros-front">
            {" "}
            <div>
              <h4>Nyamatutsi Website</h4>
              <p>
                A company Hotel company
                <i className="click">
                  (click the 'search' icon below to learn more)
                </i>
              </p>
            </div>
            <div className="pros-desc">
              <div>
                <a
                  href="https://tapiwanashechakurungama.github.io/nyamatutsi/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
                <div id="proj-image-gallery" href="/#"></div>
              </div>
              <div>
                <br />
                <p>JavaScript</p>
                <p>Html</p>
                <p>Bootsrap</p>
                <p>Css</p>
              </div>
            </div>
          </div>
          <img className="pros-img" src="banner copy.png" alt="" srcSet="" />
          <div className="pros-back"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
