import React, { Component } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import PageBanner from "../components/PageBanner";
class Give extends Component {
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
  toggleAccordion = (e) => {
    // e.target.children[0].classList.toggle("change");
    // e.target.classList.toggle("active-panel");
    let panel = e.target.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
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
                  <button
                    id="pay"
                    class="payment-btn"
                    type="submit"
                    onClick={() => this.payWithPaystack()}
                  >
                    Proceed to payment
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : null}
        <NavBar></NavBar>
        <PageBanner
          headText="Give"
          backgroundImg="assets/give.jpg"
        ></PageBanner>
        <div className="message-container">
          <div className="message-card">
            <h1>Online giving</h1>
            <p className="bible-verse">
              "Every man according as he purposeth in his heart, so let him
              give; not grudgingly, or of necessity: for God loveth a cheerful
              giver." <br></br> --2 Corinthians 9:7
            </p>
            <button
              className="donate-btn"
              onClick={() => this.toggleModal(!this.state.isActive)}
            >
              Give
            </button>
            <div>
              <h3>For local transfer</h3>
              <button
                className="donate-btn"
                onClick={(e) => this.toggleAccordion(e)}
              >
                Account details
              </button>
              <p className="panel acct-details">
                <span>
                  Account number:<span className="details"> 1220411605</span>
                </span>

                <span>
                  Account name:
                  <span className="details">Unique Revival Prayer Network</span>
                </span>

                <span>
                  Bank:<span className="details"> Zenith Bank</span>
                </span>
              </p>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Give;
