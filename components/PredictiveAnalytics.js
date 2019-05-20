import React from "react";
import { render } from "react-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

class PredictiveAnalytics extends React.Component {
  componentDidMount() {}
  columnOptions = (data) => {
    const options = {
      chart: {
        // renderTo: (options.chart && options.chart.renderTo) || this,
        backgroundColor: null,
        borderWidth: 0,
        type: "column",
        margin: [2, 0, 2, 0],
        width: 120,
        height: 20,
        style: {
          overflow: "visible"
        },
        // small optimalization, saves 1-2 ms each sparkline
        skipClone: true
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
          lineWidth: 1,
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
        }
      }
    };
    return options
  }
  lineOptions = (categories, data1, data2) => {
    const options = {
      title: { text: null },
      chart: {
        height: "150px",
        backgroundColor: "#16191B"
      },
      series: [
        {
          name: "",
          lineColor: "#103FCF",
          data: data1
        },
        {
          name: "",
          lineColor: "#39CC42",
          data: data2
        }
      ],
      xAxis: [
        {
          type: "category",
          categories,
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
    return options
  }
  tick = (value)=>{
    if(value>0){
      return (
        <p> <span className="tick-up">&#9650;</span>{value} </p>
      )
    }else{
      return (
        <p> <span className="tick-down">&#9660;</span>{value} </p>
      )
    }
  }
  render() {
    const cat = [ "", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Aug", "Sep", "Oct", "Nov", "Dec", "" ]
    const blue = [160, 150, 140, 130, 100, 120, 130, 150, 140, 143, 90, 130, 100]
    const green = [ 100, 120, 125, 130, 160, 150, 130, 110, 147, 145, 160, 190, 200 ]
    const growthSummary = [
      {
        name: 'Sales',
        chart: [30, -50, 90, 60, -20, -20, -50, -30, 90],
        sum: [64, -158, 64, 64],
      },
      {
        name: 'EBITDA',
        chart: [30, -50, 90, 60, -20, -20, -50, -30, 90],
        sum: [10, 72, 10, 10],
      },
      {
        name: 'EBID',
        chart: [30, -50, 90, 60, -20, -20, -50, -30, 90],
        sum: [6, -308, 6, 6],
      },
      {
        name: 'Net Income',
        chart: [30, -50, 90, 60, -20, -20, -50, -30, 90],
        sum: [-14, -134, -14, -14],
      },
      {
        name: 'EPS (Diluted)',
        chart: [30, -50, 90, 60, -20, -20, -50, -30, 90],
        sum: [-6, -76, -6, 6],
      },
      {
        name: 'Speed Metric',
        chart: [30, -50, 90, 60, -20, -20, -50, -30, 90],
        sum: [10, -208, 60, 25],
      },
    ]
    return (
      <div className="card predictive-analytics">
        <div className="card-body">
          <h5 className="card-title">Predictive Analytics</h5>
          <div className="row">
            <div className="col-3">
              <h6>Growth Score</h6>
            </div>
            <div className="col-9">
              <div className="row text-center">
                <div className="col-4">High</div>
                <div className="col-4 border-left border-dark">34.56%<span className="ml-2 tick-down">&#9660;</span></div>
                <div className="col-4 border-left border-dark">20.56%<span className="ml-2 tick-down">&#9660;</span> </div>
              </div>
            </div>
          </div>
          <HighchartsReact highcharts={Highcharts} options={this.lineOptions(cat, blue, green)} />
          <br />
          <div>
            <div className="scroll-table" style={{ height: 200 }}>
            <table>
              <thead>
              <tr>
                <td width="30%" >
                <h6 className="mb-3">Growth Summary</h6></td>
                <td width="40%" />
                <td width="10%">1YR</td>
                <td width="10%">3YR</td>
                <td width="10%">5YR</td>
                <td width="10%">10YR</td>
              </tr>
              </thead>
              <tbody>
              {growthSummary.map((data, i)=>(
                <tr key={i}>
                <td>{data.name}</td>
                <td> <HighchartsReact highcharts={Highcharts} options={this.columnOptions(data.chart)} /> </td>
                <td> {this.tick(data.sum[0])}</td>
                <td> {this.tick(data.sum[1])}</td>
                <td> {this.tick(data.sum[2])}</td>
                <td> {this.tick(data.sum[3])}</td>
              </tr>
              ))}
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PredictiveAnalytics;
