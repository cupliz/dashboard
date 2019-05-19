import React from "react";

class BoxTitle extends React.Component {
  componentDidMount() { }

  render() {
    return (
      <div className="card">
        <div className="card-body row pr-4">
          <div className=" col-lg-3 col-xl-2 col-12 col-md-3 bg-transparent mt-1">
            <img src="../static/image/imageDarktrace.jpeg " className="card-img-top rounded m-0" />
          </div>
          <div className="col p-0 m-0 bg-transparent mr-auto mb-2 mt-2">
            <h5 className="card-title m-0 col bg-transparent">Darktrace</h5>
            <p className="m-0 col bg-transparent">www.darktrace.com</p>
            <div className="row m-0 col bg-transparent">
                <img src="../static/image/facebook.png" className="img m-1"/>
                <img src="../static/image/twitter.png" className="img m-1"/>
                <img src="../static/image/instagram.jpg" className="img m-1"/>
                <img src="../static/image/linkedin.png" className="img m-1"/>
            </div>
          </div>
          <h6 className="col-12 col-sm-12 col-lg-3 col-xl-3 rounded-pill text-center private" >Private</h6>
        </div>
        <div className="card-text m-2 ml-4">A group of the development $ sale cyber-threat defence technology</div>
        <div className="card-footer ">
          <div className="row">
            <div className="col bg-transparent">
              <div className="text-secondary">Headquarters:</div>
              <div>London.UK</div>
            </div>
            <div class="col bg-transparent">
              <div className="text-secondary">Founded:</div>
              <div>2013</div>
            </div>
            <div class="col bg-transparent">
              <div className="text-secondary">SIC:</div>
              <div>62012</div>
            </div>
            <div class="col bg-transparent">
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