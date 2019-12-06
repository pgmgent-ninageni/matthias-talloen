mapboxgl.accessToken =
  "pk.eyJ1IjoibmluYWdlbmkiLCJhIjoiY2pvYTg3Zzd0MGNpcTNrbXJxMmtkNXo2cCJ9.ZQg31fYeJDmLbIf0Xolz-Q";

var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [3.278079,51.133110],
  zoom: 13,
});

map.on("load", function() {
  map.loadImage(
    "../static/images/pointer.png",
    function(error, image) {
      if (error) throw error;
      map.addImage("pointer", image);
      map.addLayer({
        id: "points",
        type: "symbol",
        source: {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [3.278079,51.133110],
                }
              }
            ]
          }
        },
        layout: {
          "icon-image": "pointer",
          "icon-size": 0.30
        }
      });
    }
  );
});
