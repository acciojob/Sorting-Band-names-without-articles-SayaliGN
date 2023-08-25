//your code here
// Array of band names
var bandNames = [
  "The Beatles",
  "Anathema",
  "Aerosmith",
  "The Rolling Stones",
  "Led Zeppelin",
  "Radiohead",
  "Pink Floyd"
  // Add more band names here
];

// Function to remove articles from a band name
function removeArticles(name) {
  return name.replace(/^(a |an |the )/i, "").trim();
}

// Sort the band names without articles
var sortedBandNames = bandNames.slice().sort(function(a, b) {
  return removeArticles(a).localeCompare(removeArticles(b));
});

// Get the <ul> element
var bandsList = document.getElementById("bands");

// Create and append <li> elements for each sorted band name
sortedBandNames.forEach(function(bandName) {
  var li = document.createElement("li");
  li.textContent = bandName;
  bandsList.appendChild(li);
});

