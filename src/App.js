import React from "react";
import { render } from "react-dom";
import SearchLocation from "./SearchLocation";
import SearchResults from "./SearchResults";
import ActivityDetails from "./ActivityDetails";
import { Router } from "@reach/router";
import HomePage from "./HomePage";

const App = () => {
  return (
    <div>
      <div id="container">
        <Router>
          <HomePage path="/" />
          <SearchLocation path="/location" />
          <SearchResults path="/search-results" />
          <ActivityDetails path="/activity-details/:id" />
        </Router>
      </div>
    </div>
  );
};
render(<App />, document.getElementById("root"));
