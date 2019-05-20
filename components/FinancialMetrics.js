


import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { columnOptions } from './Options'

class FinancialMetrics extends React.Component {
  componentDidMount() { }
  render() {
    const growthSummary = [
      {
        name: "",
        year2017: '2017',
        year2018: "2018",
        chart: [],
      },
      {
        name: "Turnover",
        year2017: '£30.759.000',
        year2018: "£59.484.000",
        chart: [10, -8, 10, 40, 30],
      },
      {
        name: "Gress Profit Margin",
        year2017: '76,6%',
        year2018: "81,9%",
        chart: [10, 50, 0, -30, 20],
      },
      {
        name: "Net Income Morgin",
        year2017: '(80,9%)',
        year2018: "(66,1%)",
        chart: [10, 50, -10, 40, 20],
      },
      {
        name: "Return on Equity",
        year2017: '(178,3%)',
        year2018: "(290,4%)",
        chart: [10, 50, 10, 5, 10],
      },
      {
        name: "Turnover/Employee",
        year2017: '£52.941',
        year2018: "£79,952",
        chart: [10, -20, 0, 50, 10],
      },
      {
        name: "Net Income/Employee",
        year2017: '(£42.814)',
        year2018: "(£52.871)",
        chart: [10, 50, -20, 30, 10],
      }
    ]
    return (
      <div className="card financial-metrics">
        <div className="card-body">
          <h5 className="card-title">Key Financial Metrics</h5>
          <div className="scroll-table" style={{ height: '50%' }}>
            <table className="table">
              <tbody>
              {growthSummary.map((data, index) => (
                <tr key={index} className={index == 0 ? "table-borderless" : ""}>
                  <td className="text-light pl-0 pr-5">{data.name}</td>
                  <td className="text-light ">{data.year2017}</td>
                  <td className="text-light pl-0">{data.year2018}</td>
                  <td className="text-light pl-0">
                    <HighchartsReact
                      highcharts={Highcharts}
                      options={columnOptions(data.chart, "area", 70)}
                    />
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default FinancialMetrics


