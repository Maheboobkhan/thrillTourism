const menuBtn = document.getElementById("menu-btn");
const dropdownMenu = document.getElementById("dropdown-menu");
menuBtn.addEventListener("click", () => {
  dropdownMenu.classList.toggle("hidden");
});
let map;
var myIcon = L.icon({
  iconUrl: "location.png",
  iconSize: [35, 35],
  iconAnchor: [22, 94],
});
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      map = L.map("map").setView(
        [position.coords.latitude, position.coords.longitude],
        13
      );
      L.tileLayer("https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png", {
        maxZoom: 10,
        attribution: "© OpenStreetMap",
      }).addTo(map);
      var marker = L.marker(
        [position.coords.latitude, position.coords.longitude],
        { icon: myIcon }
      ).addTo(map);
    });
  } else {
    console.log(error);
  }
}
getLocation();
