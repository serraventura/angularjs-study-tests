/* service */

myApp.factory('pilotService', function($http) {

	var url = '';
	var pilot = {};

	pilot.getList = function(){
		return $http({
			method: 'JSONP',
			url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
		});
	};

	return pilot;

});