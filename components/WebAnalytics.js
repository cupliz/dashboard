import React from "react";

class WebAnalytics extends React.Component {
  componentDidMount() { }

  render() {
    return (
      <div className="card web-analytics">
        <div className="card-header">
          <h5 className="card-title  m-0 p-0">Web Analytics</h5>
        </div>
        <div className="card-body">
          <div>
            Darktrace <p className="d-inline text-muted">exists in</p> Travel, video, and Healthcare
          </div>

          <div className="row pl-4 pr-3">
            <div className="col-4">
              <p className="m-0 text-secondary"><small>Website Rank</small>
              </p>
              <div className="row m-0 p-0 d-flex">
                <h6>6.7 </h6>
                <span className="ml-2 tick-down">&#9660;</span>
              </div>
            </div>
            <div className="col-4">
              <p className="m-0 text-secondary"><small>Googel Trends</small>
              </p>
              <div className="row m-0 p-0 d-flex">
                <h6>6.7 </h6>
                <span className="ml-2 tick-down">&#9660;</span>
              </div>
            </div>
            <div className="col-4">
              <p className="m-0 text-secondary"><small>Time on site</small>
              </p>
              <div className="row m-0 p-0 d-flex">
                <h6>2 mins </h6>
                <span className="ml-2 tick-down">&#9660;</span>
              </div>
            </div>
          </div>

          <div className="row text-center inner-box">
            <div className="col ">
              <h4 className="">Connected Trends</h4>
              <div className="text-blue">Supply chain attacks</div>
              <div className="ml-20 text-white">Darktrace  <div className="d-inline text-purple">ODPR</div></div>
              <div className="text-green">Susinuss email comprise attacks</div>
              <div className="text-blue pb-4">IoT cyber security</div>
            </div>
            <div className="col ">
              <h4>Company Trends</h4>
              <div className="text-green">Enterprise Cyber<div className="d-inline text-purple"> Cyber Al</div></div>
              <div className="text-purple">Antigena <div className="d-inline text-white">Darktrace </div><div className="d-inline text-blue">SaaS</div></div>
              <div className="text-green">Autonomous response</div>
              <div className="text-blue">Immune system</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default WebAnalytics