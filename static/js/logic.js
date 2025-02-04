// Part 1: Create the Earthquake Visualization

// Create a map object.
let myMap = L.map("map", {
    center: [39.8283, -98.5795],
    zoom: 4
    });
  

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(myMap);

// Defining the queryURL    
let queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_week.geojson";

// Perform a GET request to the query URL/
d3.json(queryUrl).then(function (data) {
 
    let features = data.features

    console.log(features);

    // For loop to extract info from each item in JSON
    for (let i = 0; i < features.length; i++) {
        let feature = features[i]
        let latitude = feature.geometry.coordinates[1]
        let longitude = feature.geometry.coordinates[0]
        let depth = feature.geometry.coordinates[1]
        let magnitude = feature.properties.mag
        let location =  [latitude, longitude]
        let color = getColor(depth); // Utilization of getColor function
        console.log(location)
        console.log(magnitude)
        
        // Creation of circle marker
        L.circleMarker(location, {
            color: "black",
            weight: 1,
            fillColor: color,
            fillOpacity: 1,
            radius: magnitude * 2
          }).bindPopup(
            `<b>Magnitude:</b> ${magnitude}<br>
             <b>Depth:</b> ${depth} km<br>
             <b>Location:</b> [${latitude}, ${longitude}]`
        ).addTo(myMap)};

// Creation of legend
var legend = L.control({ position: "bottomright" });

legend.onAdd = function(map) {
  var div = L.DomUtil.create("div", "legend");

  // Defining colors and labels for legend
  var labels = [
    { color: "#A3F600", range: "-10 - 10" },
    { color: "#DCF400", range: "10 - 30" },
    { color: "#F7DB11", range: "30 - 50" },
    { color: "#FDB72A", range: "50 - 70" },
    { color: "#FCA35D", range: "70 - 90" },
    { color: "#FF5F65", range: "90+" }
  ];

  labels.forEach(item => {
    div.innerHTML += `
      <div class="legend-item">
        <i style="background: ${item.color};"></i>
        <span>${item.range}</span>
      </div>
    `;
  });

  return div;
};

// Add legend to the map
legend.addTo(myMap);      


});
// Function to define colors
    function getColor(depth) {
    return depth > 90 ? '#FF5F65' :  // Red
           depth > 70 ? '#FCA35D' :  // Dark Orange
           depth > 50 ? '#FDB72A' :  // Orange
           depth > 30 ? '#F7DB11' :  // Dark Yellow
           depth > 10  ? '#DCF400' :  // Very shallow (light yellow green)
           '#A3F600';                // Near surface (green)
};