var interval = setInterval(function() {
    location.reload();
} , 5000);

let mapoptions = {
    center: [23.725089, 90.392968],
    zoom: 8
}

let l1 = document.getElementById('lng');
let l2 = document.getElementById('lng1');
 let lat1 = document.getElementById('lat');
 let lat2 = document.getElementById('lat1');

 const latitude1 = lat1.dataset.lat;
 const longitude1 = l1.dataset.lng;
    const latitude2 = lat2.dataset.lat1;
    const longitude2 = l2.dataset.lng1;
    console.log(latitude1,longitude1,latitude2,longitude2);
 

//console.log(JSON.parse(l1.lng),JSON.parse(lat1.lat));
//console.log(l2.lng,lat2.lat);
let map = new L.map('map', mapoptions);
let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);
let marker = new L.marker([latitude1, longitude1]);
marker.addTo(map);

let marker1 = new L.marker([latitude2, longitude2]);
marker1.addTo(map);



var route = L.Routing.control({
    waypoints: [
        L.latLng(latitude1, longitude1),
        L.latLng(latitude2, longitude2)
    ],
    routeWhileDragging: true,
}).addTo(map);
