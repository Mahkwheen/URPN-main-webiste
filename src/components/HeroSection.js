import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
class HeroSection extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="hero-banner  display-row">
          <div className="hero-content container">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              WELCOME TO
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              UNIQUE REVIVAL PRAYER NETWORK
            </motion.h1>
            <motion.div className="btn-container m-2">
              <NavLink to="/Guest">
                <motion.button
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 1.5, type: "tween" }}
                  className="btn btn-gold"
                >
                  NEW HERE?
                </motion.button>
              </NavLink>
              <NavLink to="/Connect">
                <motion.button
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5, duration: 1.5, type: "tween" }}
                  className="btn btn-transparent"
                >
                  CONNECT
                </motion.button>
              </NavLink>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroSection;
