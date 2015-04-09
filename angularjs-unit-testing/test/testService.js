describe('Service testing', function(){
	
	var _dataService_;

	beforeEach(module('myApp'));

	beforeEach(inject(function(DataService){

		_dataService_ = DataService;
		_dataService_.data = [
			{
				name: 'Ventura',
				age: '22',
				country: 'BR'
			},
			{
				name: 'Ventura',
				age: '22',
				country: 'BR'
			},
			{
				name: 'Ventura',
				age: '22',
				country: 'BR'
			},
			{
				name: 'Ventura',
				age: '22',
				country: 'BR'
			},
			{
				name: 'Ventura',
				age: '22',
				country: 'BR'
			}
		];

	}));

	it('Should start with 5 items', function(){

		var len = _dataService_.data.length;

		expect(_dataService_.data.length).toBe(5);

	});

	it('An item should be removed', function(){

		var len = _dataService_.data.length;

		_dataService_.remove({
			name: 'Thiago',
			age: '25',
			country: 'US'
		});

		expect(_dataService_.data.length).toBe(len-1);

	});

	it('Should add an item', function(){

		var len = _dataService_.data.length;

		_dataService_.add('Joao');

		expect(_dataService_.data.length).toBe(len+1);

	});


});