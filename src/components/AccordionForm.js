import React, { Component } from "react";
import ConnectCard from "../components/ConnectCard";
class AccordionForm extends Component {
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
    return (
      <div>
        <div className="accordion">
          <div>
            <button
              className="accordion-btn"
              onClick={(e) => this.toggleAccordion(e)}
            >
              Would you like us to pray for you?
              <i className="fa-angle-down fas"></i>
            </button>
            <div className="panel">
              <div>
                <ConnectCard
                  CardText="We would love to join you in prayer"
                  Message="Your prayer point"
                  textareaPlaceHolder="Enter your prayer request"
                  btnText="Send prayer request"
                ></ConnectCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AccordionForm;
