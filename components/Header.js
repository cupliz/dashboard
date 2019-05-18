import React from "react";

class Header extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <div className="header-search container-fluid">
          <input type="text" placeholder="Search" />
        </div>
        <div className="header-title container-fluid">
          <span>OVERVIEW</span>
        </div>
      </div>
    );
  }
}
export default Header;
