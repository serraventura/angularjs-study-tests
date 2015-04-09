describe('Testing controller', function(){

	var scope, cntrl;

	beforeEach(module('myApp'));

	beforeEach(inject(function($rootScope, $controller){

		scope = $rootScope.$new();

		cntrl = $controller('myController', {
			'$scope': scope
		});


	}));

	it('Service should start with 1 item', function(){

		console.log(scope.list);
		
		expect(scope.list.length).toBe(4);

	});

	it('Service should add 1 item more', function(){

		var len = scope.list.length;
		
		scope.dom.name = 'test';
		scope.add();

		expect(scope.list.length).toBe(len+1);

	});

});