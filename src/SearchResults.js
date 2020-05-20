import React from "react";
import mockData from "./mockData.js";

export default function SearchResults(props) {
  const searchQuery = props["search-query"];
  const activityType = props["activity-type"];
  let result;
  if (mockData[searchQuery] && mockData[searchQuery][activityType]) {
    result = mockData[searchQuery][activityType];
  } else {
    result = null;
  }
  if (result) {
    return <div>{/* map through results */}</div>;
  }
  return <h1 className="title">No results found for your location</h1>;
}

//page where the results for the chosen activity and chosen location are displayed; third page (second after home);
