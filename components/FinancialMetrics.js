import React from "react";

class FinancialMetrics extends React.Component {
  componentDidMount() { }

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Key Financial Metrics</h5>
          <div className="scroll-table" style={{ height: 300 }}>
            <table className="table">
              <tr  className="table-borderless">
                <td className="text-light pl-0" ></td>
                <td className="text-light"></td>
                <td className="text-light">2017</td>
                <td className="text-light">2018</td>
              </tr>
              <tr>
                <td className="text-light pl-0">Turnovor</td>
                <td className="text-light">£30.759.000</td>
                <td className="text-light">£59.484.000</td>
                <td className="text-light">Software</td>
              </tr>
              <tr>
                <td className="text-light pl-0">Gress Profit Margin</td>
                <td className="text-light">76,6%</td>
                <td className="text-light">81,9%</td>
                <td className="text-light">Software</td>
              </tr>
              <tr>
                <td className="text-light pl-0">Net Income Morgin</td>
                <td className="text-light">(80,9%)</td>
                <td className="text-light">(66,1%)</td>
                <td className="text-light">6 years</td>
              </tr>
              <tr>
                <td className="text-light pl-0">Return on Equity</td>
                <td className="text-light">(178,3%)</td>
                <td className="text-light">(290,4%)</td>
                <td className="text-light">5D1-1000</td>
              </tr>
              <tr>
                <td className="text-light pl-0">Turnover/Employee</td>
                <td className="text-light">£52.941</td>
                <td className="text-light">£79,952</td>
                <td className="text-light">Late growth stage</td>
              </tr>
              <tr>
                <td className="text-light pl-0">Net Income/Employee</td>
                <td className="text-light">(£42.814)</td>
                <td className="text-light">(£52.871)</td>
                <td className="text-light">Software</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default FinancialMetrics