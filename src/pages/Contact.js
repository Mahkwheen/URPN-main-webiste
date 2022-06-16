import React, { Component } from "react";
import { motion } from "framer-motion";
import ConnectCard from "../components/ConnectCard";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import PageBanner from "../components/PageBanner";
import AccordionForm from "../components/AccordionForm";

class Contact extends Component {
  componentDidMount() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  state = {};
  render() {
    const rollIn = {
      initial: { scale: 0.9 },
      animate: {
        scale: 1.1,
        // rotate: "360deg",
        transition: { delay: 0.5, duration: 1, yoyo: Infinity },
      },
    };
    // const breathe = {
    //   initial: {
    //     scale: 0.8,
    //   },
    //   animate: {
    //     scale: 1.1,
    //     transition: {
    //       duration: 0.5,
    //       yoyo: Infinity,
    //     },
    //   },
    // };
    return (
      <div>
        <NavBar></NavBar>
        <PageBanner
          headText="Contact"
          backgroundImg="assets/contact.png"
        ></PageBanner>
        <div className="display-row block-container">
          <div className="contact-wrapper block-col">
            <div className="display-row contact">
              <div className="contact-container">
                <span className="contact-bg">
                  <motion.i
                    variants={rollIn}
                    // variants={}
                    initial="initial"
                    whileInView="animate"
                    className="fas fa-map-marker-alt"
                  ></motion.i>
                </span>
                <h2>Our Address</h2>
                <p>Adankolo New layout, Lokoja, Kogi State</p>
              </div>
              <motion.div className="contact-container">
                <span className="contact-bg">
                  <motion.i
                    variants={rollIn}
                    initial="initial"
                    whileInView="animate"
                    className="fas fa-mobile-alt"
                  ></motion.i>
                </span>
                <h2>Phone number</h2>
                <p>(+234) 814-598-6344</p>
                <p>(+234) 704-829-2555</p>
              </motion.div>
              <motion.div className="contact-container">
                <span className="contact-bg">
                  <motion.i
                    variants={rollIn}
                    initial="initial"
                    whileInView="animate"
                    className="fas fa-envelope"
                  ></motion.i>
                </span>
                <h2>Email address</h2>
                <a href="mailto:uniquerevivalprayernetwork@gmail.com">
                  <p>uniquerevivalprayernetwork@gmail.com</p>
                </a>
              </motion.div>
              <AccordionForm></AccordionForm>
            </div>
          </div>
          <div className="card">
            <ConnectCard
              Message="Message"
              CardHeroText="Get in touch with us"
              CardText="We are excited to connect with you!"
              textareaPlaceHolder="Enter your message"
              btnText="Send message"
            ></ConnectCard>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Contact;
