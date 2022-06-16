import React, { Component } from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import Main from "../components/MainSection";
import Footer from "../components/Footer";
class Home extends Component {
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
        <HeroSection></HeroSection>
        <Main></Main>
        <Footer></Footer>
        <div className="container"></div>
      </div>
    );
  }
}

export default Home;
