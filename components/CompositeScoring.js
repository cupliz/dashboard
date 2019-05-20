import React from "react";

class CompositeScoring extends React.Component {
  componentDidMount() { }

  render() {
    return (
      <div className="card composite-scoring">
        <div className="card-body">
          <div className="row d-flex justify-content-between pl-3 pr-4">
            <h5 className="card-title ">Qualitative, Macro & ESG Factors</h5>
            <div className="row"><div className="rounded-pill mr-2"></div>Composite Scoring</div>
          </div>
          <h6 >Descriptive</h6>
          <div className="scroll-table">
            <table className="table">
              <tbody>
              <tr >
                <td className="text-secondary pl-0" >Sector</td>
                <td className="text-light">Software</td>
              </tr>
              <tr>
                <td className="text-secondary pl-0">Business model</td>
                <td className="text-light">B2B</td>
              </tr>
              <tr>
                <td className="text-secondary pl-0">Revenue model</td>
                <td className="text-light">Subscription</td>
              </tr>
              <tr>
                <td className="text-secondary pl-0">Firm age</td>
                <td className="text-light">6 years</td>
              </tr>
              <tr>
                <td className="text-secondary pl-0">Number of employeers</td>
                <td className="text-light">5D1-1000</td>
              </tr>
              <tr className="border-0">
                <td className="text-secondary pl-0">Firm grawth stage classsification </td>
                <td className="text-light">Late growth stage</td>
              </tr>
              <tr className="border-bottom table-borderless">
                <td className="text-light pl-0">Executive Team</td>
                <td ><div className="d-inline-block bg-primary rounded-pill text-center text-light border-0 " style={{ height: 30, width: 50, fontSize: 20, fontWeight: "bold" }}>5.3</div></td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default CompositeScoring