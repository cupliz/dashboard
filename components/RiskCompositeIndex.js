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
          <h5 className="card-title">Risk Analytics</h5>
          <Slider {...settings}>
            <div className="slider">
              <img src="/static/img/logo/01.png" alt="" />
              <p>86</p>
            </div>
            <div className="slider">
              <img src="/static/img/logo/02.png" alt="" />
              <p>88</p>
            </div>
            <div className="slider">
              <img src="/static/img/logo/03.png" alt="" />
              <p>92</p>
            </div>
            <div className="slider">
              <img src="/static/img/logo/04.png" alt="" />
              <p>89</p>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
export default RiskCompositeIndex