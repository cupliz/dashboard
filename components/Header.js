import React from "react";

class Header extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <div className="header-search">
          <div className="container-fluid">
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="header-title">
          <div className="container-fluid">
            <span>OVERVIEW</span>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
