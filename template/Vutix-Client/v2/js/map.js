function initMap() {
  // Styles a map in night mode.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat:-25.2459701 , lng: 134.1133038},
    zoom: 5,
    styles: [
      {elementType: 'geometry', stylers: [{color: '#f7f7f7'}]},
    
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{color: '#777'}]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#ededed'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#515c6d'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#ededed'}]
      }
    ]
  });
}