import React, { Component } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import PageBanner from "../components/PageBanner";
class Messages extends Component {
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
          headText="Messages"
          backgroundImg="assets/message.jpg"
        ></PageBanner>
        <div className="message-container">
          <div className="message-card">
            <h1>Past messages</h1>
            <p>
              Check out our past and current messages here or on our Telegram
              channel. click the link provided for more messages and gathering
              information:
              <a
                href="https://t.me/UniqueRevivalPrayerNetwork"
                target="_blank"
                rel="noreferrer"
              >
                https://t.me/UniqueRevivalPrayerNetwork
              </a>
            </p>
          </div>
          <div className="media-info">
            <h2>Current Series: Perspective</h2>
          </div>
        </div>
        <div className="video-container">
          <div>
            <div className="media-info">
              <h2>Video Messages</h2>
              <p>
                Get more on our Facebook page:
                <a
                  href="https://www.facebook.com/urpnetwork/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://t.me/UniqueRevivalPrayerNetwork
                </a>
              </p>
            </div>
            <div className="embeded-message-video">
              <iframe
                className="message-video"
                title="URPN"
                src="https://www.facebook.com/plugins/video.php?height=280&href=https%3A%2F%2Fweb.facebook.com%2Furpnetwork%2Fvideos%2F523846485924003%2F&show_text=false&width=560&t=0"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                // allowFullScreen="true"
              ></iframe>
            </div>
          </div>
          <div className="audio-container">
            <div className="media-info">
              <h2>Audio Messages</h2>
              <p>
                Get more on our Telegram channel :
                <a
                  href="https://t.me/UniqueRevivalPrayerNetwork"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://t.me/UniqueRevivalPrayerNetwork
                </a>
              </p>
            </div>
            <div className="embeded-message-audio">
              <iframe
                className="audio"
                title="hello"
                src="https://drive.google.com/file/d/13B86kzDsTdpo7vI50Sal6474YlDMdMEq/preview"
                width="300"
                height="100"
                allow="autoplay"
              ></iframe>
            </div>
            <div className="embeded-message-audio">
              <iframe
                className="audio"
                title="Redefining christianity bt mercy"
                src="https://drive.google.com/file/d/1MOavMdSMQRaTzdOHYwd8N3mCh64SPYtr/preview"
                width="300"
                height="100"
                allow="autoplay"
              ></iframe>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Messages;
