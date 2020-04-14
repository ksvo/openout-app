import React from "react";
import { render } from "react-dom";
import Image from "./Image";

const App = () => {
  return (
    <div id="container">
      <Image className="fas fa-hiking" />
      <Image className="fas fa-skiing" />
      <Image className="fas fa-campground" />
    </div>
  );
};
render(<App />, document.getElementById("root"));
