function iniciarMap(){
    var coord = {lat:10.6684706  ,lng:  -71.6241407};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}