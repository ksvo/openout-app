import GOOGLE_MAPS_API_KEY from "../config/config";

const googleScriptLoader = document.createElement("script");

googleScriptLoader.setAttribute("async", "true");
googleScriptLoader.setAttribute("defer", "true");
googleScriptLoader.setAttribute("type", "text/javascript");
googleScriptLoader.setAttribute(
  "src",
  `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&callback=initMap`
);

document.body.appendChild(googleScriptLoader);
