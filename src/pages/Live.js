import React, { Component } from "react";
// import ReactPlayer from 'react-player'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
class Live extends Component {
  componentDidMount() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  toggleModal = (value) => {
    this.setState({ isActive: value });
  };
  render() {
    return (
      <div>
        {this.state.isActive ? (
          <div id="modal" class="modal show-modal">
            <div
              className="overlay"
              onClick={() => this.toggleModal(!this.state.isActive)}
            ></div>
            <div class="form-container modal-card">
              <span
                class="close"
                onClick={() => this.toggleModal(!this.state.isActive)}
              >
                &times;
              </span>
              <form id="paymentForm" action="">
                <div>
                  <label for="name">Full Name</label>
                  <input id="fullname" type="text" placeholder="Jane Doe" />
                </div>
                <div>
                  <label for="Name">Email</label>
                  <input
                    id="email"
                    type="text"
                    placeholder="Jane Doe@gmail.com"
                    required
                  />
                </div>
                <div>
                  <label for="amount">Amount</label>
                  <input
                    required
                    id="amount"
                    type="number"
                    placeholder="Donations amount"
                  />
                </div>
                <div class="payment-btn-container">
                  <button id="pay" class="payment-btn" type="submit">
                    Proceed to payment
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : null}
        <NavBar></NavBar>
        <div className="live-sec">
          <div className="display-row container">
            <div className="col-1">
              <iframe
                className="embed-video"
                width=""
                height=""
                src="https://www.youtube.com/embed/gNPJCQiDfjU"
                title="YouTube video player"
                frameBorder="2em"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullscreen
              ></iframe>
            </div>
            <div className="sec-info col-1">
              <h1>Our live services</h1>
              <h2>Sundays @ 2:30pm GMT</h2>
              <p>
                Missed our live stream? you can find our services on the &nbsp;
                <NavLink className="link" to="/Messages">
                  Message
                </NavLink>
                &nbsp;page, &nbsp;audio messages are also available in
                ours&nbsp;
                <a
                  className="link"
                  href="https://t.me/UniqueRevivalPrayerNetwork"
                  target="_blank"
                  rel="noreferrer"
                >
                  Telegram channel
                </a>
              </p>
              <div form-wrapper>
                <span
                  className="btn btn-transparent"
                  onClick={() => this.toggleModal(!this.state.isActive)}
                >
                  Online Giving
                </span>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Live;
