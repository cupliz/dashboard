import React from "react";

class KYC extends React.Component {
  componentDidMount() { }

  render() {
    return (
      <div className="card kyc">
        <div className="card-header">
          <h5 className="card-title">KYC Monitor</h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-3">
              Watchlist <div><label className="rounded-pill bg-success"></label></div>
            </div>
            <div className="col-3 border-left border-dark ">
              Regulatory <div><label className="rounded-pill bg-warning"></label></div>
            </div>
            <div className="col-3 border-left border-dark">
              Litigation <div><label className="rounded-pill bg-danger"></label></div>
            </div>
            <div className="col-3 border-left border-dark">
              Media <div><label className="rounded-pill bg-success"></label></div>
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