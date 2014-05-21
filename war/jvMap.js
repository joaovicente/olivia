function onGoogleReady() {
	angular.bootstrap(document.getElementById("map"), ['myapp.ui-map']);  
}

var myControllers = angular.module('myControllers', []);

myControllers.controller('MapCtrl', ['$scope',
  function($scope)	{
    // Base map properties
    var ll = new google.maps.LatLng(53.4137833,-7.7650354);
    $scope.mapOptions = {
      center: ll,
      zoom: 7,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    $scope.myMarkers = [];
    $scope.addMarker = function(g)	{
    	var image = {
    		url: g.imgMarkerUrl,
    		size: new google.maps.Size(50, 50)
    	};
    	var marker = new google.maps.Marker({
            map: $scope.myMap,
            position: new google.maps.LatLng(g.lat, g.long),
            icon :image
        });
    	$scope.myMarkers.push(marker);
    } 
   
    
    var markerLatlng = new google.maps.LatLng(52.972536, -6.007645);
    $scope.markerName = "Stars and Stones";
    $scope.markerUrl = 'http://homepage.eircom.net/~oliviauhlar/Stars_and_Stones_I.jpg'
    var image = {
      url: 'http://homepage.eircom.net/~oliviauhlar/Stars_and_Stones_I.jpg',
      size: new google.maps.Size(50, 50),
    };
    
    //Markers should be added after map is loaded	
    $scope.onMapIdle = function() {
    	 $scope.addMarker({
    	    	name: "Stars and Stones",
    	    	imgMarkerUrl:  'http://homepage.eircom.net/~oliviauhlar/Stars_and_Stones_I.jpg',
    	    	imgPreviewUrl:  'http://homepage.eircom.net/~oliviauhlar/Stars_and_Stones_I.jpg',
    	    	lat: 52.972536,
    	    	long: -6.007645});
    	 
    	 $scope.addMarker({
 	    	name: "Stars and Stones II",
 	    	imgMarkerUrl:  'http://homepage.eircom.net/~oliviauhlar/Stars_and_Stones_II.jpg',
 	    	imgPreviewUrl:  'http://homepage.eircom.net/~oliviauhlar/Stars_and_Stones_II.jpg',
 	    	lat: 54.349013,
 	    	long: -8.679355});
    	
        if ($scope.myMarkers === undefined){    
        	console.log("myMarkers Undefined")
            var marker = new google.maps.Marker({
                map: $scope.myMap,
                position: markerLatlng,
                icon :image
            });
            $scope.myMarkers = [marker, ];
        }
        console.log($scope.myMarkers)
    };
    $scope.showMarkerInfo = function(marker) {  
        $scope.myInfoWindow.open($scope.myMap, marker);
        
    };    
}]);
