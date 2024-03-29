import React from "react";
import { connect } from "react-redux";
import Header from "../components/Header";
import Profile from "../components/Profile";
import FinancialMetrics from "../components/FinancialMetrics";
import PeerComps from "../components/PeerComps";
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
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row no-gutters">
            <div className="col-4">
              <Profile />
              <FinancialMetrics />
              <PeerComps />
            </div>
            <div className="col-4">
              <KYC />
              <WebAnalytics />
              <CompositeScoring />
            </div>
            <div className="col-4">
              <News />
              <PredictiveAnalytics />
              <RiskCompositeIndex />
            </div>
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
