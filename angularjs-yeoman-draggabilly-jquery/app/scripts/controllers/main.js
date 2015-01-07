'use strict';

angular.module('angularDragAppApp')
  .controller('MainCtrl', function ($scope) {

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


	$scope.sections = [
		  {
		      title: 'Section #1',
		      drag: true
		  },
		  {
		      title: 'Section #2',
		      drag: true
		  },
		  {
		      title: 'Section #3',
		      drag: true
		  },
		  {
		      title: 'Section #4',
		      drag: true
		  },
		  {
		      title: 'Section #5',
		      drag: true
		  }

		];



  });
