import React from "react";
import { render } from "react-dom";
import Card3d from "./Card3d";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  backgroundColor: "black",
  height: "900px"
};

const App = () => (
  <div style={styles}>
    <h2>Card rotation animation.</h2>
    <Card3d />
  </div>
);

render(<App />, document.getElementById("root"));
