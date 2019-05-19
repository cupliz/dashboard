import React from "react";
import { render } from "react-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

class PredictiveAnalytics extends React.Component {
  componentDidMount() {}

  render() {
    const lineOptions = {
      title: { text: null },
      chart: {
        height: "150px",
        backgroundColor: "#16191B"
      },
      series: [
        {
          name: "",
          lineColor: "#103FCF",
          data: [160, 150, 140, 130, 100, 120, 130, 150, 140, 143, 90, 130, 100]
        },
        {
          name: "",
          lineColor: "#39CC42",
          data: [ 100, 120, 125, 130, 160, 150, 130, 110, 147, 145, 160, 190, 200 ]
        }
      ],
      xAxis: [
        {
          type: "category",
          categories: [ "", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Aug", "Sep", "Oct", "Nov", "Dec", "" ],
          title: {
            text: null
          }
        }
      ],
      yAxis: {
        tickInterval: 100,
        max: 200,
        min: 0,
        title: {
          text: null
        }
      },
      plotOptions: { line: { marker: { enabled: false } } },
      credits: { enabled: false }
    };
    const barNegativeOptions = {
      chart: { type: "column", height: "150px", backgroundColor: "#16191B"},
      title: { text: null },
      xAxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Aug", "Sep", "Oct"] },
      credits: { enabled: false },
      series: [
        {
          name: "Sales",
          data: [5, 3, 4, 7, 2]
        },
        {
          name: "EBITDA",
          data: [2, -2, -3, 2, 1]
        },
        {
          name: "EBID",
          data: [3, 4, 4, -2, 5]
        }
      ]
    };
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Predictive Analytics</h5>
          <h6>Growth Score</h6>
          <HighchartsReact highcharts={Highcharts} options={lineOptions} />
          <br />
          <h6>Growth Summary</h6>
        </div>
      </div>
    );
  }
}
export default PredictiveAnalytics;
