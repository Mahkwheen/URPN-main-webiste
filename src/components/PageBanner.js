import React, { Component } from "react";
import { motion } from "framer-motion";
class PageBanner extends Component {
  state = {};
  render() {
    return (
      <div>
        <div
          className="banner-container"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5) 50%,  rgba(0, 0, 0, 0.5) 50%), url(${this.props.backgroundImg})`,
          }}
        >
          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 150, delay: 0.7 }}
          >
            {this.props.headText}
          </motion.h1>
        </div>
      </div>
    );
  }
}

export default PageBanner;
