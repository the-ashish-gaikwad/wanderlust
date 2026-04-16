maptilersdk.config.apiKey = mapKey;

const map = new maptilersdk.Map({
  container: "map", // ID of the div
  style: maptilersdk.MapStyle.STREETS, // or other styles like SATELLITE, OUTDOORS, etc.
  center: [listing.geometry.coordinates[0], listing.geometry.coordinates[1]], // longitude, latitude
  zoom: 12, // starting zoom level
});

const redMarker = new maptilersdk.Marker({ color: "#ff385c" })
  .setLngLat([listing.geometry.coordinates[0], listing.geometry.coordinates[1]])
  .addTo(map);

redMarker.setPopup(
  new maptilersdk.Popup({ offset: 25 }).setHTML(
    `<h3>${listing.title || "Location"}</h3>
    <p>Exact location provided after booking.</p>
    `,
  ),
);