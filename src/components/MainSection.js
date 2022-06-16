import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
class Main extends Component {
  render() {
    const arrowIconVariant = {
      visible: {
        x: 3,
        transition: {
          duration: 0.5,
          yoyo: Infinity,
        },
      },
    };
    const cardVariants = {
      hidden: {
        opacity: 0,
        y: 30,
      },
      inView: {
        opacity: 1,
        y: 0,
        transition: {
          type: "tween",
          duration: 1,
          delay: 0,
        },
      },
    };
    const fadeIn = {
      hidden: {
        opacity: 0,
        y: 30,
      },
      animate: {
        opacity: 1,
        y: 0,
        transition: {
          type: "tween",
          duration: 0.5,
          delay: 0.7,
        },
      },
    };
    return (
      <div>
        <div className="main-container">
          <div className="main display-row">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="inView"
            >
              <h2>Guest to URPN?</h2>
              <p>
                We are delighted God lead you here. We love you already, click
                on guest info link below and check us out.
              </p>
              <NavLink className="link" to="/Guest">
                <span>
                  Guest info
                  <motion.i
                    variants={arrowIconVariant}
                    animate="visible"
                    class="fa-solid fa-arrow-right"
                  ></motion.i>
                </span>
              </NavLink>
            </motion.div>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="inView"
            >
              <h2>Connect</h2>
              <p>
                Stay connected with us on your favorite social media platform,
                you can also reach us to us through our mail or social media
              </p>
              <NavLink className="link" to="/Connect">
                <span>
                  Connect
                  <motion.i
                    variants={arrowIconVariant}
                    animate="visible"
                    class="fa-solid fa-arrow-right"
                  ></motion.i>
                </span>
              </NavLink>
            </motion.div>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="inView"
            >
              <h2>Watch Live!</h2>
              <p>
                Watch our kingdomite services and messages on sundays by 2:30pm
                GMT
              </p>
              <NavLink className="link" to="/Live">
                <span>
                  Watch
                  <motion.i
                    variants={arrowIconVariant}
                    animate="visible"
                    class="fa-solid fa-arrow-right"
                  ></motion.i>
                </span>
              </NavLink>
            </motion.div>
          </div>
          <div className="main-info display-row">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="animate"
            >
              <h2>Our purpose</h2>
              <h1>A family desperate for God's sovereignty</h1>
              <p>
                Unique revival prayer network is an inter-denominational
                ministry striving for the restoration of the original ordination
                of families, spheres, territories through intercession and rise
                of kingdom agents.
              </p>
            </motion.div>
            <div className="main-img-container">
              <img
                className="main-img"
                src="assets/praying2.jpg"
                alt="sec-img"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
