import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Footer extends Component {
  state = {};
  render() {
    return (
      <div>
        <footer>
          <div className="container space display-row">
            <div className="display-row space">
              <div>
                <p className="f-bold-txt">Connect</p>
                <div className="socials display-row">
                  <span>
                    <a
                      href="https://www.facebook.com/urpnetwork/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                  </span>
                  <span>
                    <a
                      href="https://youtube.com/channel/UCUj-sECaWe043_935yvQcZA"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-youtube"></i>
                    </a>
                  </span>
                  <span>
                    <a
                      href="https://t.me/UniqueRevivalPrayerNetwork"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-telegram"></i>
                    </a>
                  </span>
                </div>
              </div>
              <div className="m-1">
                <p className="f-bold-txt">Contact</p>

                <div className="f-normal-txt">
                  <p className="display-row">
                    <i className="fas fa-phone-alt"></i>&nbsp;&nbsp;&nbsp;(+234)
                    706-064-4128
                  </p>
                  <a href="mailto:uniquerevivalprayernetwork@gmail.com">
                    <p className="display-row">
                      <i className="fas fa-envelope"></i>
                      &nbsp;&nbsp;&nbsp;uniquerevivalprayernetwork@gmail.com
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <nav>
                <ul className="footer-nav">
                  <li>
                    <NavLink className="link f-link" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="link f-link" to="/Live">
                      Live
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="link f-link" to="/Guest">
                      Guest
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="link f-link" to="/Connect">
                      Connect
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="link f-link" to="/Messages">
                      Messages
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="link f-link" to="/Contact">
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="copyright-sec">
            <p>&copy; Unique Revival Prayer Network 2022</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
