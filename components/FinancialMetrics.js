


import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
// import { columnOptions } from './Options'

class FinancialMetrics extends React.Component {
  componentDidMount() { }
  columnOptions = (data, type, width) => {
    const options = {
      chart: {
          // renderTo: (options.chart && options.chart.renderTo) || this,
          backgroundColor: null,
          borderWidth: 0,
          type: type,
          margin: [2, 0, 2, 0],
          width: width,
          height: 20,
          style: {
              overflow: "visible"
          },
          // small optimalization, saves 1-2 ms each sparkline
          skipClone: false
      },
      title: {
          text: ""
      },
      credits: {
          enabled: false
      },
      series: [{
          data: data,
          pointStart: 1
      }],
      xAxis: {
          labels: {
              enabled: false
          },
          title: {
              text: null
          },
          startOnTick: false,
          endOnTick: false,
          tickPositions: [],
          lineColor: 'transparent',
          lineWidth: 1,
      },
      yAxis: {
          endOnTick: false,
          startOnTick: false,
          labels: {
              enabled: false
          },
          title: {
              text: null
          },
          tickPositions: [0],
          lineColor: 'transparent'
      },
      legend: {
          enabled: false
      },
      tooltip: {
          hideDelay: 0,
          outside: true,
          shared: true
      },
      plotOptions: {
          series: {
              animation: false,
              lineWidth: 2,
              borderWidth: 0,
              shadow: false,
              states: {
                  hover: {
                      lineWidth: 1
                  }
              },
              marker: {
                  radius: 1,
                  states: {
                      hover: {
                          radius: 2
                      }
                  }
              },
              fillOpacity: 0.25
          },
          column: {
              color: '#3BD445',
              negativeColor: "#C11B12",
              borderColor: "none"
          },
          area: {
              color: '#53fc9f',
              borderColor: "none"
          }
      },
  };
  return options
  }
  render() {
    const growthSummary = [
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
          <div className="scroll-table">
            <table className="table">
              <thead>
                <tr className="text-light">
                  <td></td>
                  <td>2017</td>
                  <td>2018</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
              {growthSummary.map((data, index) => (
                <tr key={index} className={index == 0 ? "table-borderless" : ""}>
                  <td className="text-light pl-0 pr-5">{data.name}</td>
                  <td className="text-light ">{data.year2017}</td>
                  <td className="text-light pl-0">{data.year2018}</td>
                  <td className="text-light pl-0">
                    <HighchartsReact
                      highcharts={Highcharts}
                      options={this.columnOptions(data.chart, "area", 70)}
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


