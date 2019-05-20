import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { highchartsOptions } from './Options'

class Turnover extends React.Component {
  componentDidMount() { }

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Share of Aggregate Annual Peer Group Turnover</h5>
          <div className="row col-12 mb-4">

            <div className="col-4">
              <div className="row mb-2">
                <div className="colorCategory mt-1 mt-1 DarkTrace"></div>
                <div className="ml-2">Dark Trace</div>
              </div>
              <div className="row">
                <div className="colorCategory mt-1 FireEye"></div>
                <div className="ml-2">FireEye</div>
              </div>
            </div>
            <div className="col-3">
              <div className="row">
                <div className="colorCategory mt-1 ForeScout"></div>
                <div className="ml-2">Fore Scout</div>
              </div>
              <div className="row ">
                <div className="colorCategory mt-1 CyberArk"></div>
                <div className="ml-2">CyberArk</div>
              </div>
            </div>

            <div className="col-3 row mb-2">
              <div className="colorCategory mt-1 Rapi"></div>
              <div className="ml-2">Rapi 7</div>
            </div>
          </div>
          <div className="row ml-2">
            <div className="col-3 pl-5 border-secondary border-bottom mr-1 text-center">
              <div className="">2016</div>
              <div className="pb-2">£977.723.070</div>
            </div>
            <div className="col-3 pl-5 text-center border-secondary border-bottom">
            <div className="">2017</div>
              <div className="pb-2">£1.160.112.610</div>
            </div>
            <div className="col-3 pl-5 text-center border-secondary border-bottom ml-1">
            <div className="">2018</div>
              <div className="pb-2">£1.380.650.000</div>
            </div>
            <div className="col-2 ml-4 pt-3 text-center">Difference</div>
          </div>
          <div className="row pr-3 mt-0 pt-0">
            <div className="col-10 m-0 pt-0">
                <HighchartsReact
                  highcharts={Highcharts}
                  options={highchartsOptions()}
                />
            </div>
            <div className="col-2 presentation">
              <div  className="pt-2">14.7%</div>
              <div className="mt-4 mb-2">25.8%</div>
              <div className="mt-5 ">9.8%</div>
              <div className="mt-5 pt-5">-16.7%</div>
              <div className="mt-5 pt-4">12.2%</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Turnover