import React from "react";

import "./styles.css";

class Card3d extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="side front">
          Front
          <button style={{ display: "block", margin: "auto" }}>Button1</button>
        </div>
        <div className="side back">
          Back
          <button
            style={{ display: "block", margin: "auto", marginTop: "100px" }}
          >
            Button2
          </button>
        </div>
      </div>
    );
  }
}

export default Card3d;
