import React, { Component } from "react";
import { motion } from "framer-motion";
class SocialMedia extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="media-container">
          <h1>We are social!</h1>
          <p className="media-text">
            Follow us on your favorite social media platform, click any of the
            logo to gp directly to our page
          </p>
          <div className="display-row">
            <div className="media-col">
              <a
                href="https://youtube.com/channel/UCUj-sECaWe043_935yvQcZA"
                target="_blank"
                rel="noreferrer"
              >
                <motion.img
                  // initial={{ scale: 0, rotate: 0 }}
                  // animate={{ scale: 1.1, rotate: "360deg" }}
                  // transition={{ delay: 1, duration: 1 }}
                  className="social-icons"
                  src="assets/Youtube.png"
                  alt="icon"
                />
              </a>
              <a
                href="https://youtube.com/channel/UCUj-sECaWe043_935yvQcZA"
                target="_blank"
                rel="noreferrer"
              >
                Youtube
              </a>
            </div>
            <div className="media-col">
              <a
                href="https://www.facebook.com/urpnetwork/"
                target="_blank"
                rel="noreferrer"
              >
                <motion.img
                  // initial={{ scale: 0, rotate: 0 }}
                  // animate={{ scale: 1.1, rotate: "360deg" }}
                  // transition={{ delay: 1, duration: 1 }}
                  className="social-icons"
                  src="assets/Facebook.png"
                  alt="icon"
                />
              </a>
              <a
                href="https://www.facebook.com/urpnetwork/"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </div>
            <div className="media-col">
              <a
                href="https://t.me/UniqueRevivalPrayerNetwork"
                target="_blank"
                rel="noreferrer"
              >
                <motion.img
                  // initial={{ scale: 0, rotate: 0 }}
                  // animate={{ scale: 1.1, rotate: "360deg" }}
                  // transition={{ delay: 1, duration: 1 }}
                  className="social-icons"
                  src="assets/Telegram.png"
                  alt="icon"
                />
              </a>
              <a
                href="https://t.me/UniqueRevivalPrayerNetwork"
                target="_blank"
                rel="noreferrer"
              >
                Telegram
              </a>
            </div>
            <div className="media-col">
              <a
                href="https://www.instagram.com/uniquerevivalprayernetwork/"
                target="_blank"
                rel="noreferrer"
              >
                <motion.img
                  // initial={{ scale: 0, rotate: 0 }}
                  // animate={{ scale: 1.1, rotate: "360deg" }}
                  // transition={{ delay: 1, duration: 1 }}
                  className="social-icons"
                  src="assets/Instagram.png"
                  alt="icon"
                />
              </a>
              <a
                href="https://www.instagram.com/uniquerevivalprayernetwork/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </div>
            <div className="media-col">
              <motion.img
                // initial={{ scale: 0, rotate: 0 }}
                // animate={{ scale: 1.1, rotate: "360deg" }}
                // transition={{ delay: 1, duration: 1 }}
                className="social-icons"
                src="assets/Whatsapp.png"
                alt="icon"
              />
              <a href="#inn">WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SocialMedia;
