import React from "react";

class KYC extends React.Component {
  componentDidMount() { }

  render() {
    return (
      <div className="card kyc">
        <div className="card-body">
          <h5 className="card-title pl-3">KYC</h5>
          <div className="row">
            <div className="col-3">
              <div className="pb-2 ml-3">Watchlist</div>
              <div className="rounded-pill bg-success"></div>
            </div>
            <div className="col-3 border-left border-dark ">
              <div className="pb-2 ml-3">Regulatory</div>
              <div className="rounded-pill bg-warning"></div>
            </div>
            <div className="col-3 border-left border-dark">
              <div className="pb-2 ml-3">Litigation</div>
              <div className="rounded-pill bg-danger"></div>
            </div>
            <div className="col-3 border-left border-dark">
              <div className="pb-2 ml-4"> Media</div>
              <div className="rounded-pill bg-success"></div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="row text-secondary text-center">
            <p className="col text-light bg-transparent"><b>Reports</b></p>
            <p className="col bg-transparent "><u>Director</u></p>
            <p className="col bg-transparent"><u>Consumer</u></p>
            <p className="col bg-transparent"><u>Trace</u></p>
            <p className="col bg-transparent"><u>AML</u></p>
          </div>
        </div>
      </div>
    );
  }
}
export default KYC