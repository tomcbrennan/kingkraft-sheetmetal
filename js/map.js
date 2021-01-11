
// DESKTOP & MOBILE  MAP FUNCTION

initMap = () => {

    let width = window.innerWidth;

    // MAP OPTIONS
    if (width > 1080){
        var options = {
            zoom: 15,
            center: {lat: -31.9056739, lng: 115.940067 },
            mapId: '209efd1d5be707fa',
            disableDefaultUI: true
        }
    } else {
        var options = {
            zoom: 15,
            center: {lat: -31.920146, lng: 115.919541 },
            mapId: '209efd1d5be707fa',
            disableDefaultUI: true
        }
    }

    // NEW MAP
    var map = new google.maps.Map(document.querySelector('.map'), options);

    // CREATE ICON
    var icon = {
        url: '/media/location-marker.svg'
    }

    // ADD MARKER FUNCTION
    addMarker = (coordinates) => {

        var marker = new google.maps.Marker({
            position: coordinates,
            map: map,
            icon: icon
        });

         marker.addListener('click', () => {
            infoWindow.open(map, marker);
        });
    }

    addMarker({
        lat: -31.9138, 
        lng: 115.92213
    });

}


document.addEventListener('DOMContentLoaded', initMap());
