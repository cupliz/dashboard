import React from "react";

class KYC extends React.Component {
  componentDidMount() { }

  render() {
    return (
      <div className="card kyc">
        <div className="card-body">
          <h5 className="card-title pl-3">KYC</h5>
          <div className="row text-center">
            <div className="col-3 ">
              <div className="pb-2 text-left pl-2">Watchlist</div>
              <div className="rounded-pill bg-success"></div>
            </div>
            <div className="col-3 border-left border-dark ">
              <div className="pb-2">Regulatory</div>
              <div className="rounded-pill col bg-warning"></div>
            </div>
            <div className="col-3 border-right border-left border-dark">
              <div className="pb-2">Litigation</div>
              <div className="rounded-pill col bg-danger"></div>
            </div>
            <div className="col-3">
              <div className="pb-2"> Media</div>
              <div className="rounded-pill bg-success"></div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="row text-secondary text-center p-0 m-1 pb-2">
            <p className="col text-light bg-transparent">Reports</p>
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