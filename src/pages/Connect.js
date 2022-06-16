import React, { Component } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import PageBanner from "../components/PageBanner";
import ConnectCard from "../components/ConnectCard";
import SocialMedia from "../components/SocialMedia";
class Connect extends Component {
  componentDidMount() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  state = {};
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <PageBanner
          headText="Connect"
          backgroundImg="assets/connect2.jpg"
        ></PageBanner>
        <div className="display-row block-container">
          <div className="block-col">
            <SocialMedia></SocialMedia>
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

export default Connect;
