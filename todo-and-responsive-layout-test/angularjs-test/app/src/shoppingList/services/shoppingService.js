'use strict';

angular.module('angularjsTestApp')
    .factory('ShoppingService', function () {

		// Private API
    	var publicApi = null;
    	var DB = [
    		{item: 'Apple', qty:1, value:0, must:false},
    		{item: 'Banana', qty:1, value:0, must:false},
    		{item: 'Pinneple', qty:1, value:0, must:false},
    		{item: 'Mango', qty:1, value:0, must:false},
    		{item: 'Passion Fruit', qty:1, value:0, must:false},
    		{item: 'Blueberry', qty:1, value:0, must:false},
    	];

		// var privateFunction = function(){
		// };

		// Public API
    	var ShoppingService = function() { // constructor

			publicApi = this;

			this.getListOfItems = function() {
				return DB;
			};

			this.add = function(item) {
				DB.push(item);
			};

			this.remove = function(item) {
				var index = DB.indexOf(item);
				DB.splice(index, 1);
			};

			this.removeAll = function() {
				DB.splice(0, DB.length);
			};

    	};

    	return ShoppingService;

	});

