import React, { Component } from "react";
class ConnectCard extends Component {
  state = {};
  render() {
    return (
      <div className="connect-card">
        <div>
          <h1>{this.props.CardHeroText}</h1>
          <p>{this.props.CardText}</p>
        </div>
        <form action="submit">
          <div>
            <label htmlFor="Name">Your name</label>
            <div className="display-row name-input">
              <input type="text" placeholder="First name" required />
              <input type="text" placeholder="Last name" required />
            </div>
          </div>
          <div>
            <label htmlFor="Phone Number">Phone number</label>
            <input type="phone" required />
          </div>
          <div>
            <label htmlFor="Email">Email address</label>
            <input type="email" required placeholder="name@example.com" />
          </div>
          <div>
            <label htmlFor="Message">{this.props.Message}</label>
            <textarea
              name="Message"
              id="message"
              placeholder={this.props.textareaPlaceHolder}
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button className="btn btn-gold">{this.props.btnText}</button>
        </form>
      </div>
    );
  }
}

export default ConnectCard;
