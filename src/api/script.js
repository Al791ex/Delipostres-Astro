let map;

async function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  var coord = {lat:10.6698902  ,lng:  -71.6160329};
  map = new Map(document.getElementById("map"), {
    center: coord,
    zoom: 15,
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map
  });
}

initMap();