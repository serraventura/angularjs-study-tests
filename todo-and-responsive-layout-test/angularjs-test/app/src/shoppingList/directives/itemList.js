'use strict';

angular.module('angularjsTestApp')
	.directive('itemList', function () {
		return {
			templateUrl: 'src/shoppingList/views/itemList.html',
			restrict: 'E',
			controller: 'shoppingListCtrl',
			link:{
				post: function(scope, element, attrs) {

				}
			}
		};
	});
