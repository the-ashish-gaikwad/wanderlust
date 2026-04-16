maptilersdk.config.apiKey = mapKey;

const map = new maptilersdk.Map({
  container: "map", // ID of the div
  style: maptilersdk.MapStyle.STREETS, // or other styles like SATELLITE, OUTDOORS, etc.
  center: [77, 28], // longitude, latitude
  zoom: 2, // starting zoom level
});
