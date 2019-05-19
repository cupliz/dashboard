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
              <img src="/static/img/icon/apple-watch.png" alt="" />
              <p>Watch</p>
            </div>
            <div className="slider">
              <img src="/static/img/icon/bowling.png" alt="" />
              <p>Bowling</p>
            </div>
            <div className="slider">
              <img src="/static/img/icon/football.png" alt="" />
              <p>Football</p>
            </div>
            <div className="slider">
              <img src="/static/img/icon/laptop.png" alt="" />
              <p>Laptop</p>
            </div>
            <div className="slider">
              <img src="/static/img/icon/printer.png" alt="" />
              <p>Printer</p>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
export default RiskCompositeIndex