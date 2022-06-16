import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Accordion extends Component {
  toggleAccordion = (e) => {
    e.target.children[0].classList.toggle("change");
    e.target.classList.toggle("active-panel");
    let panel = e.target.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <div id={this.props.Id} className="sec sec5">
          <div className="sec5-div1">
            <h1 className="sec-title sec5-title-position">
              Things you might want to know
            </h1>
            <p className="intro-text">
              Here some questions we get asked a lot. Probably are they are what
              you want to ask too.
            </p>
            <p className="intro-text">
              Also feel free to mail us
              <a
                href="mailto:uniquerevivalprayernetwork@gmail.com"
                className="mail"
              >
                uniquerevivalprayernetwork@gmail.com
              </a>
            </p>
          </div>
          <div className="accordion">
            <div>
              <button
                className="accordion-btn"
                onClick={(e) => this.toggleAccordion(e)}
              >
                Is URPN a church?
                <i className="fa-angle-down fas"></i>
              </button>
              <div className="panel">
                <p>
                  We are not a church. Unique Revival Prayer Network(URPN) is an
                  inter-denominational ministry, regardless of the church you
                  worship you are welcome here, so you can still attend your
                  church and be part of our fellowship
                </p>
              </div>
            </div>
            <div>
              <button
                className="accordion-btn"
                onClick={(e) => this.toggleAccordion(e)}
              >
                Are there any registration procedures?
                <i className="fa-angle-down fas"></i>
              </button>
              <div className="panel">
                <p>
                  All you need to do is attend our fellowships and meetings, and
                  there, you are a part of us, we would get some information
                  about you, so we can stay in touch with you and you can give
                  as much as you are comfortable with
                </p>
              </div>
            </div>
            <div>
              <button
                className="accordion-btn"
                onClick={(e) => this.toggleAccordion(e)}
              >
                Do we have a work unit?
                <i className="fa-angle-down fas"></i>
              </button>
              <div className="panel">
                <p>
                  Yes, we do have a wonderful team that help put things in place
                  during our meetings, we have a worship team, technical crew, a
                  protocol group, ushers and so on, and you can be a part of any
                  of these teams
                </p>
              </div>
            </div>
            <div>
              <button
                className="accordion-btn"
                onClick={(e) => this.toggleAccordion(e)}
              >
                How do I locate URPN?
                <i className="fa-angle-down fas"></i>
              </button>
              <div className="panel">
                <p>
                  Visit the&nbsp;
                  <NavLink
                    activeClassName="active"
                    to="/Contact"
                    className="link"
                  >
                    Contact
                  </NavLink>
                  &nbsp; us page for every detail on our location, you can also
                  access our social media links on the&nbsp;
                  <NavLink
                    activeClassName="active"
                    to="/Connect"
                    className="link"
                  >
                    Connect
                  </NavLink>
                  &nbsp; page for more information
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Accordion;
