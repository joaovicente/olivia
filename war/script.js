    var myapp = angular.module('myapp', ["ui.router", "myControllers"])
    myapp.config(function($stateProvider, $urlRouterProvider){
      
      // For any unmatched url, send to /route1
      $urlRouterProvider.otherwise("/route1")
      
      $stateProvider
        .state('route1', {
            url: "/route1",
            templateUrl: "route1.html",
            controller: "MapCtrl"
        })
          
        .state('route2', {
            url: "/route2",
            templateUrl: "route2.html",
            controller: function($scope){
            	$scope.title = "Gallery"
            	$scope.paintings = 
            		[ 
            		  {url: 'http://homepage.eircom.net/~oliviauhlar/Stars_and_Stones_I.jpg' }, 
            		  {url: 'http://homepage.eircom.net/~oliviauhlar/Stars_and_Stones_II.jpg' },
            		  {url: 'http://homepage.eircom.net/~oliviauhlar/Harmonies_of_the_Universe.jpg' },
            		  {url: 'http://homepage.eircom.net/~oliviauhlar/Phoenix_Rising.jpg' }
            		];
            }
        })
    })