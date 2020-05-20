import React from "react";
import SearchForm from "./SearchForm";
export default function SearchPage(props) {
  return (
    <div>
      <h1 className="title">
        You picked {props["activity-type"]} now search for location!
      </h1>
      <SearchForm activityType={props["activity-type"]} />
    </div>
  );
}

//first page after homePage
