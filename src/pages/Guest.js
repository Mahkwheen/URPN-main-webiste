import React, { Component } from "react";
import NavBar from "../components/NavBar";
import PageBanner from "../components/PageBanner";
import Accordion from "../components/Accordion";
import Footer from "../components/Footer";
class Guest extends Component {
  componentDidMount() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  state = {};
  render() {
    console.log(this.props);
    return (
      <div>
        <NavBar></NavBar>
        <PageBanner
          backgroundImg="assets/guest.jpg"
          headText="Guest"
        ></PageBanner>
        <div className="display-row info-container">
          <div className="about-container">
            <h2 className="about-intro">What to expect</h2>
            <h1>Discover URPN</h1>
            <p className="about-text">
              Unique Revival Prayer Network(URPN) is an inter-denominational
              ministry with the burden for restoration of the original ordinance
              of God, a generation that is totally subjected to God's will, at
              URPN we come together as a family for Kindomite meetings on
              sundays, there will be time for worship and prayer, and Pastor
              Victor Adah Adejoh will carry us through biblical teachings and
              application. We aspire to become more like Christ and fulfil his
              will for us here on earth
            </p>
            <p className="about-text">
              I pray you stick with us and it won't take you long to discover
              that we more than just a small network of people, and you are sure
              to experience Jesus Christ as he is and also develop authentic
              relationships with other believers.
            </p>
          </div>
          <div className="guest-img-container">
            <img className="guest-img" src="assets/guest-img.jpg" alt="sky" />
          </div>
        </div>
        <div className="display-row block-container">
          <div className="block-col">
            <h1>Gathering Times</h1>
            <div className="display-row gathering-info">
              <div>
                <h3>Prayers</h3>
                <p>Monday-Friday: Prayers @ 4:00pm</p>
                <p>Saturday @ 9am</p>
              </div>
              <div>
                <h3>Kindomite Meetings</h3>
                <p>Sunday: Kindomite service @ 2:30pm</p>
              </div>
            </div>
          </div>
          <div className="card">
            <Accordion></Accordion>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Guest;
