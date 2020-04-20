import React from "react";
import SearchParams from "./SearchParams";
import mockData from "./mockData.js";

export default function SearchResults() {
  return (
    <div>
      <SearchParams />
      <h1> {mockData["San Francisco"].camping[0].name} </h1>
    </div>
  );
}

//page where the results for the chosen activity and chosen location are displayed; third page (second after home);
