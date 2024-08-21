import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mrs2gmr",
        "template_6skq7dq",
        form.current,
        "2vAafyWokU5vCYmE9"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("set successssfulllyyyyy")
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const clickHandler = () => {
    setIsButtonClicked(true);
    setTimeout(() => {
      setIsButtonClicked(false);
    }, 500);
  };
  return (
    <div className="contact" id="contact">
      <div className="contact-cont">
        <div data-aos="fade-up" className="contc-child1">
          <h1>Get in touch</h1>
          <h3>Turn your Ideas into Digital Reality </h3>
          <h4>
            Got a question? or need assistance with development? Or do you just
            want to say hello? Feel free to reach out.
          </h4>
          <hr />
        </div>
        <div className="contc-child2">
          <div data-aos="fade-right" className="contc-info-cont">
            <i className="fa-solid fa-location-dot"></i>
            <div className="location">
              <p className="contc-info">Crowborough North Phase 3</p>
            </div>
          </div>
          <div data-aos="fade-right" className="contc-info-cont phone-cont">
            <i className="fa-solid fa-phone-volume"></i>
            <div>
              <p className="contc-info phone">+263714157852</p>
              <p className="contc-info phone">+263783058554</p>
            </div>
          </div>
          <div data-aos="fade-right" className="contc-info-cont email-cont">
            <i className="fa-regular fa-envelope"></i>
            <div className="email">
              <p className="contc-info">
                chakurungama <br></br> tapiwanashe@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="contc-child3">
          <div>
            <Box
              ref={form}
              onSubmit={sendEmail}
              className="box"
              component="form"
              sx={{
                color: "blue",
                "& .MuiInputBase-root": {
                  color: "#a6afcc",
                  borderBottom: "2px solid #8892B0",
                  backgroundColor: "rgb(40 58 78 / 24%)",
                  "&:hover": {
                    "&::before": {
                      borderBottom: "1px solid white !important",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#d7dae4",
                      borderWidth: "1px",
                    },
                    "& .MuiInputBase-root": {
                      backgroundColor: "rgb(40 58 78 / 24%)",
                    },
                  },
                },
                "& .MuiFormLabel-root": {
                  color: "#8892B0",
                },
                "& .Mui-focused": {
                  color: "#a6afcc",
                  borderBottom: "0px solid",
                },
                "& .Mui-focused.MuiFormLabel-root": {
                  color: "#8892B0 !important",
                },
                "& .MuiInput-root:after": {
                  borderBottomColor: "#90CAF9",
                },
                "& .MuiOutlinedInput-root": {
                  color: "#a6afcc",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#8892B0",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <div className="textfield-cont">
                <TextField
                  data-aos="fade-right"
                  id="filled-basic"
                  variant="filled"
                  label="Your Name"
                  type="text"
                  name="user_name"
                />
                <TextField
                  data-aos="fade-right"
                  id="filled-basic"
                  label="Your Email"
                  variant="filled"
                  type="email"
                  name="user_email"
                />
              </div>
              <TextField
                data-aos="fade-right"
                className="textarea"
                id="outlined-multiline-flexible"
                label="Your Message"
                multiline
                rows={3}
                name="message"
                defaultValue="Hi, we need a web developer to integrate payment gateways into our site. How soon can u hop on a call to discuss the project details?"
              />
              <button
                type="submit"
                data-aos="fade-right"
                className="getin-cont2"
              >
                <div
                  onClick={clickHandler}
                  className={`getin-front getin-front2`}
                >
                  <a
                    className={`${isButtonClicked ? "left-right" : ""}`}
                    href=""
                  >
                    Send Message
                  </a>
                  <img
                    className={`${isButtonClicked ? "left-right" : ""}`}
                    src="arrow.png"
                    alt=""
                  />
                </div>
                <div className="getin-back2"></div>
              </button>
            </Box>
          </div>
          <div data-aos="fade-up" className="gmap-cont">
            <h3>My location</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15189.596080988738!2d30.910789533190925!3d-17.866786212943783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2szw!4v1724243029638!5m2!1sen!2szw"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="gmap"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
