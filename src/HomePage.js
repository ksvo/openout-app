import React from "react";
import { Link } from "@reach/router";

export default function HomePage() {
  return (
    <div id="homePage">
      <Link to="/search/hiking">
        <div className="image-circles">
          <i className="fas fa-hiking"></i>
        </div>
      </Link>
      <Link to="/search/skiing">
        <div className="image-circles">
          <i className="fas fa-skiing"></i>
        </div>
      </Link>
      <Link to="/search/camping">
        <div className="image-circles">
          <i className="fas fa-campground"></i>
        </div>
      </Link>
    </div>
  );
}
