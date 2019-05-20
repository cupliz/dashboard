import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

class Turnover extends React.Component {
  componentDidMount() {}
  stackedColumnOptions = () => {
    const options = {
      chart: {
        type: "column",
        height: '62%',
        backgroundColor: "#16191B"
      },
      credits: {
        enabled: false
      },
      legend: {
        enabled: false
      },
      title: null,
      xAxis: {
        categories: ["100%", "100%", "100%"],
        lineColor: "#16191B",
        lineWidth: 1,
        floor: 0
      },
      yAxis: {
        gridLineColor: "#16191B",
        labels: {
          enabled: false
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickPositions: [],
        lineColor: "transparent"
      },
      plotOptions: {
        column: {
          stacking: "percent"
        },
        series: {
          borderColor: "#16191B",
          borderWidth: 2,
          groupPadding: -0.12,
          enableMouseTracking: false,
          stacking: "percent"
        },
        dataLabels: {
          enabled: false
        }
      },
      series: [
        {
          data: [0.3, 0.4, 0.6],
          color: "#4f92ff"
        },
        {
          data: [0.99, 0.99, 0.99],
          color: "red"
        },
        {
          data: [0.98, 0.98, 0.98],
          color: "blue"
        },
        {
          data: [6, 4, 3],
          color: "#35fc95"
        },
        {
          data: [0.9, 1, 0.99],
          color: "#70008c"
        }
      ]
    };

    return options;
  };
  render() {
    return (
      <div className="card turnover">
        <div className="card-body">
          <h5 className="card-title">
            Share of Aggregate Annual Peer Group Turnover
          </h5>
          <div className="row mb-4">
            <div className="col-4 ml-4">
              <div className="row mb-2">
                <div className="mt-1 DarkTrace" />
                <div className="ml-2">Dark Trace</div>
              </div>
              <div className="row">
                <div className="mt-1 FireEye" />
                <div className="ml-2">FireEye</div>
              </div>
            </div>
            
            <div className="col-3">
              <div className="row">
                <div className="mt-1 ForeScout" />
                <div className="ml-2">Fore Scout</div>
              </div>
              <div className="row">
                <div className="mt-1 CyberArk" />
                <div className="ml-2">CyberArk</div>
              </div>
            </div>

            <div className="col-3">
              <div className="row">
                <div className="mt-1 Rapi" />
                <div className="ml-2">Rapi 7</div>
              </div>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-3 border-secondary">
              <div className="">2016</div>
              <div className="pb-2">£977.723.070</div>
            </div>
            <div className="col-3 border-secondary">
              <div className="">2017</div>
              <div className="pb-2">£1.160.112.610</div>
            </div>
            <div className="col-3 border-secondary">
              <div>2018 <br/> £1.380.650.000</div>
            </div>
            <div className="col-3">Difference</div>
          </div>
          
          <div className="row pr-3 mt-0 pt-0">
            <div className="col-10">
              <HighchartsReact
                highcharts={Highcharts}
                options={this.stackedColumnOptions()}
              />
            </div>
            <div className="col-2 presentation">
              <div className="pt-1">14.7%</div>
              <div className="pt-2">25.8%</div>
              <div className="pt-3">9.8%</div>
              <div className="pt-5">-16.7%</div>
              <div className="pt-5">12.2%</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Turnover;
