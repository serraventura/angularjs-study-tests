angular.module('myApp').controller('myController', function($scope, DataService){
	
	$scope.message = 'Hello World';
	$scope.list = DataService.data;
	$scope.list2 = DataService.data2;
	$scope.dom = {name:'', age:'', country:''};

	$scope.add = function(){
		DataService.add($scope.dom.name);
	}

	$scope.remove = function(item){
		DataService.remove(item);
	}

});