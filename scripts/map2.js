var mymap = L.map('map2').setView([38.848976, -77.193760], 5);

L.tileLayer('https://api.mapbox.com/styles/v1/kebrahimi/ckw5x24tb0rvr14ozd1moec5v/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoia2VicmFoaW1pIiwiYSI6ImNrdzRkNGZubjB1eW8yd21uY2RucWp6dDYifQ.vwkW4S0V6unpwnX6iZZ5Gg', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
}).addTo(mymap);

for (let i = 0; i < places.length; i ++) {
    let marker = L.marker([places[i].latitude, places[i].longitude]).addTo(mymap);
    marker.bindPopup('<h3>' + places[i].placeName + '</h3>' + '<p>' + places[i].descrip + '</p>').openPopup();
}