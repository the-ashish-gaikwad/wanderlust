maptilersdk.config.apiKey = mapKey;

const map = new maptilersdk.Map({
  container: "map", // ID of the div
  style: maptilersdk.MapStyle.STREETS, // or other styles like SATELLITE, OUTDOORS, etc.
  center: [coords[0], coords[1]], // longitude, latitude
  zoom: 12, // starting zoom level
});

const redMarker = new maptilersdk.Marker({ color: "#ff385c" })
  .setLngLat([coords[0], coords[1]])
  .addTo(map);
