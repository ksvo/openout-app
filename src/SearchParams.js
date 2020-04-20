import React, { useState } from "react";
// import customDropdown from "./customDropdown";

const SearchParams = () => {
  const [location, setLocation] = useState("San Francisco, CA");
  // const [location, locationDropdown] = customDropdown("location", "", mockData);
  // const [maps, setMaps] = useState("")

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <locationDropdown />

        {/* <label htmlFor="map">
          maps
          <select
            id="maps"
            value={maps}
            onChange={e => setMaps(e.target.value)}
            onBlur={e => setMaps(e.target.value)}>
            <option>All</option>
            {CITYMAPS.map(maps => (
              <option key={maps} value={maps}> 
                {maps}
                </option>
              ))}
          </select>
        </label> */}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;

//mock data to be replaced with live data slowly(live maps etc)
