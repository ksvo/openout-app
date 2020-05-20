import React, { useState } from "react";
import { navigate } from "@reach/router";

const SearchForm = (props) => {
  const [location, setLocation] = useState("San Francisco, CA");

  const searchFunc = (e) => {
    e.preventDefault();
    navigate(`/search-results/${props.activityType}/${location}`);
  };

  return (
    <div className="search-params">
      <form className="form" onSubmit={searchFunc}>
        <label htmlFor="location">
          <input
            id="location"
            placeholder={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchForm;

//search form only
//mock data to be replaced with live data slowly(live maps etc)
