let map;
let infoWindow;

function initMap() {
    const uluru = { lat: -25.344, lng: 131.036 };
    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    infoWindow = new google.maps.InfoWindow();

    const locationButton = document.createElement("button");

    locationButton.textContent = "Pan to Current Location";
    locationButton.classList.add("custom-map-control-button");
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
    locationButton.addEventListener("click", () => {
      showLocation(showPosition, showError);
    });
}

const showLocation = (showPosition, showError) => {
    if (navigator.geolocation) {
        showPosition();
    } else {
        showError(false, infoWindow, map.getCenter());
    }
};

const showPosition = () => {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent("Location found.");
            infoWindow.open(map);
            map.setCenter(pos);
            map.setZoom(16);
        },
        () => {
            showError(true, infoWindow, map.getCenter());
        }
    );
    
};

const showError = (browserHasGeolocation, infoWindow, pos) => {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
}