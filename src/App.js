import React from "react";
import { render } from "react-dom";
import SearchPage from "./SearchPage";
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
          <SearchPage path="/search/:activity-type" />
          <SearchResults path="/search-results/:activity-type/:search-query" />
          <ActivityDetails path="/activity-details/:id" />
        </Router>
      </div>
    </div>
  );
};
render(<App />, document.getElementById("root"));
