import React from "react";
import Slider from "react-slick";

class RiskCompositeIndex extends React.Component {
  componentDidMount() {}

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    return (
      <div className="card rci">
        <div className="card-body">
          <h5 className="card-title">Risk Composite Index</h5>
          <Slider {...settings}>
            <div className="slider">
              <img src="/static/img/brand/brand-logo-01.png" alt="" />
              <p>ACMEE</p>
            </div>
            <div className="slider">
              <img src="/static/img/brand/brand-logo-02.png" alt="" />
              <p>GLOBEX</p>
            </div>
            <div className="slider">
              <img src="/static/img/brand/brand-logo-03.png" alt="" />
              <p>SOYLENT</p>
            </div>
            <div className="slider">
              <img src="/static/img/brand/brand-logo-04.png" alt="" />
              <p>INITECH</p>
            </div>
            <div className="slider">
              <img src="/static/img/brand/brand-logo-05.png" alt="" />
              <p>UMBRELLA</p>
            </div>
            <div className="slider">
              <img src="/static/img/brand/brand-logo-06.png" alt="" />
              <p>HOOLI</p>
            </div>
            <div className="slider">
              <img src="/static/img/brand/brand-logo-06.png" alt="" />
              <p>WEEDS</p>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
export default RiskCompositeIndex