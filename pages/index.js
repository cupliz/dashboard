import React from "react";
import { connect } from "react-redux";
import BoxTitle from "../components/BoxTitle";
import FinancialMetrics from "../components/FinancialMetrics";
import Turnover from "../components/Turnover";
import KYC from "../components/KYC";
import WebAnalytics from "../components/WebAnalytics";
import CompositeScoring from "../components/CompositeScoring";
import News from "../components/News";
import PredictiveAnalytics from "../components/PredictiveAnalytics";
import RiskCompositeIndex from "../components/RiskCompositeIndex";

class Index extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="container-fluid theme-dark">
        <div className="row">
          <div className="col-sm">
            <span className="main-title">OVERVIEW</span>
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-sm">
            <BoxTitle />
            <FinancialMetrics />
            <Turnover />
          </div>
          <div className="col-sm">
            <KYC />
            <WebAnalytics />
            <CompositeScoring />
          </div>
          <div className="col-sm">
            <News />
            <PredictiveAnalytics />
            <RiskCompositeIndex />
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = {};
export default connect(
  null,
  mapDispatchToProps
)(Index);