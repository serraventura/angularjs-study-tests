'use strict';

angular.module('angularjsTestApp')
	.controller('shoppingListCtrl', function ($scope, ShoppingService) {

		var shoppingService = new ShoppingService();

		$scope.editRowId = null;
		$scope.errMsg = null;
		$scope.listItem = shoppingService.getListOfItems();
		$scope.dom = {item: null, qty: null, value: null, must: false};

		$scope.addItem = function() {
			
			if (isFormOk()) {

				shoppingService.add({
					item: $scope.dom.item, 
					qty: $scope.dom.qty, 
					value: $scope.dom.value,
					must: $scope.dom.must
				});

				cleanForm();

			};

		};

		$scope.removeItem = function(item) {
			shoppingService.remove(item);
		};

		$scope.removeAll = function() {
			shoppingService.removeAll();
		};

		$scope.isEditing = function(id) {
			return (id == $scope.editRowId);
		}

		$scope.editItem = function(id) {
			$scope.editRowId = id;
		};

		$scope.editDone = function(id) {
			$scope.editRowId = null;
		};

		function isFormOk() {

			var ret = true;

			if ( isNaN($scope.dom.qty) || isNaN($scope.dom.value) ) {
				$scope.errMsg = 'Must be number';
				ret = false;
			};

			if ( !$scope.dom.item || !$scope.dom.qty || !$scope.dom.value ) {
				$scope.errMsg = 'Cannot be empty';
				ret = false;
			};

			return ret;

		};

		function cleanForm() {
			$scope.dom.item = null;
			$scope.dom.qty = null;
			$scope.dom.value = null;
			$scope.dom.must = null;
			$scope.errMsg = null;
		};


	});
