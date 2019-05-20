import React from "react";

class BoxTitle extends React.Component {
  componentDidMount() { }

  render() {
    return (
      <div className="card box-title">
        <div className="card-body">
          <div className="row">
            <div className="col-2">
              <img src="../static/img/imageDarktrace.jpeg " className="logo rounded"/>
            </div>
            <div className="col-8">
              <h5 className="col bg-transparent card-title">Darktrace</h5>
              <p className="col bg-transparent card-text">www.darktrace.com</p>
              <div className="row col bg-transparent social">
                  <img src="../static/img/social/facebook.png"/>
                  <img src="../static/img/social/twitter.png"/>
                  <img src="../static/img/social/instagram.jpg"/>
                  <img src="../static/img/social/linkedin.png"/>
              </div>
            </div>
            <div className="col-2 rounded-pill text-center private">Private</div>
          </div>
        </div>
        <div className="card-desc">A group of the development $ sale cyber-threat defence technology</div>
        <div className="card-footer">
          <div className="row">
            <div className="col">
              <div className="text-secondary">Headquarters:</div>
              <div>London, UK</div>
            </div>
            <div className="col">
              <div className="text-secondary">Founded:</div>
              <div>2013</div>
            </div>
            <div className="col">
              <div className="text-secondary">SIC:</div>
              <div>62012</div>
            </div>
            <div className="col">
              <div className="text-secondary">Status:</div>
              <div>Active-Account filed</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BoxTitle