import React from "react";
import Image from "./Image";
export default function HomePage() {
  return (
    <div id="homePage">
      <Image className="fas fa-hiking" />
      <Image className="fas fa-skiing" />
      <Image className="fas fa-campground" />
    </div>
  );
}
