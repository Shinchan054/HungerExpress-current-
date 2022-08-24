// var interval = setInterval(function() {
//     location.reload();
// } , 5000);

let mapoptions = {
    center: [23.725089, 90.392968],
    zoom: 8
}

let l1 = document.getElementById('lng');
let l2 = document.getElementById('lng1');
 let lat1 = document.getElementById('lat');
 let lat2 = document.getElementById('lat1');


let map = new L.map('map', mapoptions);
let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);
let marker = new L.marker([lat1.dataset.lat, l1.dataset.lng]);
marker.addTo(map);

let marker1 = new L.marker([23.731473, 90.376415]);
marker1.addTo(map);


var latlngs = [
    [lat1.dataset.lat, l1.dataset.lng],
    [23.731473, 90.376415]
];

// var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);

// // zoom the map to the polyline
// map.fitBounds(polyline.getBounds());

var route = L.Routing.control({
    waypoints: [
        L.latLng(lat1.dataset.lat, l1.dataset.lng),
        L.latLng(23.731473, 90.376415)
    ],
    routeWhileDragging: true,
}).addTo(map);
