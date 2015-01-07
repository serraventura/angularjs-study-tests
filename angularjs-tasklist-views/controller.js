/* Controllers */

myApp.controller('todoController', function($scope) {

  		$scope.dom = {
  			title: null, 
  			date: null, 
  			flag: null
  		}

		$scope.todoList = [
		  {
		      title: 'Test 1',
		      date: '01/01/2010',
		      flag: true
		  },
		  {
		      title: 'Test 146546',
		      date: '01/01/2013',
		      flag: false
		  },
		  {
		      title: 'Test 1897987',
		      date: '01/01/2012',
		      flag: false
		  },
		  {
		      title: 'Test 10000321',
		      date: '01/01/2011',
		      flag: false
		  },
		  {
		      title: 'Test 2',
		      date: '11/01/2014',
		      flag: true
		  }

		];

		$scope.addTask = function(){

			$scope.todoList.push({title: $scope.dom.title, date: '01/01/2014', flag:0})

		}

		$scope.delTask = function(todo){

			var index = $scope.todoList.indexOf(todo);
			$scope.todoList.splice(index, 1);

		}




  });


  /* Controllers */

myApp.controller('pilotController', function($scope, pilotService) {

	$scope.pilotsList = [];

	pilotService.getList().success(function (response) {
		$scope.pilotsList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
	});

});



myApp.controller('tabsController', function($scope) {

	$scope.tabs = [
		{ title:"View 1", page: "views/ctrl1.html", disabled: false },
		{ title:"View 2", page: "views/ctrl2.html", disabled: false }
	];

	$scope.navType = 'pills';

});