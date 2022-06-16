import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }
  toggleMenu = (value) => {
    this.setState({ isActive: value });
  };
  toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      this.setState({ isVisible: true });
    } else {
      this.setState({ isVisible: false });
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.toggleVisibility);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.toggleVisibility);
  }
  render() {
    return (
      <div className={this.state.isActive ? "fadeIn" : null}>
        <div
          className={
            this.state.isVisible
              ? "display-row nav-bar bg-onScroll"
              : "display-row nav-bar"
          }
        >
          <NavLink activeClassName="active" to="/" className="link">
            <div className="logo display-row">
              <img className="logo-img" src="assets/logo.png" alt="logo"></img>
              <p className="l-name">URPN</p>
            </div>
          </NavLink>
          <nav className={this.state.isActive ? "mobile-nav-overlay " : null}>
            <ul className="display-row">
              <li>
                <span></span>
                <NavLink activeClassName="active" to="/" className="link">
                  Home
                </NavLink>
              </li>
              <li>
                <span></span>
                <NavLink activeClassName="active" to="/Live" className="link">
                  Live
                </NavLink>
              </li>
              <li>
                <span></span>
                <NavLink activeClassName="active" to="/Guest" className="link">
                  Guest
                </NavLink>
              </li>
              <li>
                <span></span>
                <NavLink
                  activeClassName="active"
                  to="/Connect"
                  className="link"
                >
                  Connect
                </NavLink>
              </li>
              <li>
                <span></span>
                <NavLink
                  activeClassName="active"
                  to="/Messages"
                  className="link"
                >
                  Messages
                </NavLink>
              </li>
              <li>
                <span></span>
                <NavLink
                  activeClassName="active"
                  to="/Contact"
                  className="link"
                >
                  Contact
                </NavLink>
              </li>
              <li className="link-btn mobile-give-link">
                <NavLink to="/Give">
                  <button className="btn btn-gold">GIVING</button>
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="link-btn give-link">
            <NavLink to="/Give">
              <button className="btn btn-gold">GIVE</button>
            </NavLink>
          </div>
          <div
            className={this.state.isActive ? "menu-bar switch" : " menu-bar"}
            onClick={() => this.toggleMenu(!this.state.isActive)}
          >
            <div className="bar bar1"></div>
            <div className="bar bar2"></div>
            <div className="bar bar3"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
