var mymap = L.map('map1').setView([26.532686, -80.027538], 10.05);

L.tileLayer('https://api.mapbox.com/styles/v1/kebrahimi/ckw4dta9s1psj16o44l9fnzlf/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoia2VicmFoaW1pIiwiYSI6ImNrdzRkNGZubjB1eW8yd21uY2RucWp6dDYifQ.vwkW4S0V6unpwnX6iZZ5Gg', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
}).addTo(mymap);

let marker1 = L.marker([26.7105363189689, -80.05488249233906]).addTo(mymap);
marker1.bindPopup("City Place, West Palm Beach").openPopup();

let marker2 = L.marker([26.527105018700194, -80.05866782708469]).addTo(mymap);
marker2.bindPopup("East Ocean Ave, Boynton Beach");

let marker3 = L.marker([26.46164925258336, -80.06815240066825]).addTo(mymap);
marker3.bindPopup("East Atlantic Ave, Delray Beach");

let marker4 = L.marker([26.35416444084469, -80.08462157786309]).addTo(mymap);
marker4.bindPopup("Mizner Park, Boca Raton");