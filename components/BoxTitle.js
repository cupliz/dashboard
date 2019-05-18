import React from "react";

class BoxTitle extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Darktrace</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <div className="card-footer">
          <span className="text-muted">Headquater</span>
          Last updated 3 mins ago
        </div>
      </div>
    );
  }
}
export default BoxTitle