let map;
let service;
let infowindow;

function initMap() {
  const sydney = new google.maps.LatLng(-33.867, 151.195);

  infowindow = new google.maps.InfoWindow();
  map = new google.maps.Map(document.getElementById("map"), {
    center: sydney,
    zoom: 15,
  });

  const request = {
    query: "Walmart",
    fields: ["name", "geometry"],
  }

  const trying = {
    query: "ingles",
    fields: ["name", "geometry"],
  }

  service = new google.maps.places.PlacesService(map);
  console.log(google.maps.places.PlacesService(map))
  service.findPlaceFromQuery(trying, (results, status) => {
      console.log(results)
      console.log(status)
      console.log(google.maps.places.PlacesServiceStatus)
    if (status === google.maps.places.PlacesServiceStatus.OK && results) {
      for (let i = 0; i < results.length; i++) {+
        createMarker(results[i]);
      }

      map.setCenter(results[0].geometry.location);
    }
  });
}

function createMarker(place) {
    if (!place.geometry || !place.geometry.location) return;
  
    const marker = new google.maps.Marker({
      map,
      position: place.geometry.location,
    });
  
    google.maps.event.addListener(marker, "click", () => {
      infowindow.setContent(place.name || "");
      infowindow.open(map);
    });
  }
  
  window.initMap = initMap;
  
