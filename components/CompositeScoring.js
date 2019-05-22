import React from "react";

class CompositeScoring extends React.Component {
  componentDidMount() { }

  render() {
    return (
      <div className="card composite-scoring">
        <div className="card-body">
          <div>
          <h5 className="card-title">
            Qual/Macro/ESG
            <label className="text-right"><span className="badge"> </span>&nbsp;Composite Scoring</label>
          </h5>
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
              <tr>
                <td className="text-secondary pl-0">Firm grawth stage classsification </td>
                <td className="text-light">Late growth stage</td>
              </tr>
              <tr>
                <td className="text-light pl-0">Executive Team</td>
                <td className="text-light"><big className="badge">5.3</big></td>
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