import React from "react";
import Slider from "react-slick";

class News extends React.Component {
  componentDidMount() {}

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <div className="card news">
        <div className="card-header">
          <div className="row">
            <h5 className="col-4 card-title">News Monitor</h5>
            <div className="col-8">
              <div className="row">

                <div className="col-5 news-box">
                  <div className="text-muted">Sector News Sentiment</div>
                  <div className="box-content">
                    239.60 <span className="text-danger">&#9660;</span>
                  </div>
                </div>
                <div className="col-3 news-box">
                  <div className="text-muted">Stores Today</div>
                  <div className="box-content">
                    239.60 <span className="text-danger">&#9660;</span>
                  </div>
                </div>
                <div className="col-4 news-box">
                  <div className="text-muted">Coverage</div>
                  <div className="box-content">
                    239.60 <span className="text-danger">&#9660;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <hr />
          <Slider {...settings}>
            <div className="slider">
              <img src="/static/img/slide/1.jpg" alt="" />
              <p> Balderton Capital buys into Mike Lynch-backed Darktrace </p>
              <p className="text-muted">Financial Times</p>
            </div>
            <div className="slider">
              <img src="/static/img/slide/2.jpg" alt="" />
              <p> Non-profit Singaporean Digital Estate Defends with Darktrace AI </p>
              <p className="text-muted">Enterprise Innovation</p>
            </div>
            <div className="slider">
              <img src="/static/img/slide/3.jpg" alt="" />
              <p> Spear’s joins City Week’s 2019 international finance forum </p>
              <p className="text-muted">BBC</p>
            </div>
            <div className="slider">
              <img src="/static/img/slide/4.jpg" alt="" />
              <p> SingHealth, HSA and now Singapore Red Cross: Cyber experts explain how hackers do it </p>
              <p className="text-muted">IB Times</p>
            </div>
            <div className="slider">
              <img src="/static/img/slide/5.jpg" alt="" />
              <p>
                £31.5 m stolen from Binance exchange in crypto heist hits cryptocurrency values
              </p>
              <p className="text-muted">SC Magazine</p>
            </div>
            <div className="slider">
              <img src="/static/img/slide/6.jpg" alt="" />
              <p>
                How AI is fueling ‘next generation’ of cyber attacks
              </p>
              <p className="text-muted">Reuters</p>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
export default News;
