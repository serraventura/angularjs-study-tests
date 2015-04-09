angular.module('myApp').service('DataService', function(){
	var th = this;
	this.data = [
		{
			name: 'Ventura',
			age: '22',
			country: 'BR'
		},
		{
			name: 'Thiago',
			age: '25',
			country: 'US'
		},
		{
			name: 'Thiago',
			age: '25',
			country: 'US'
		},
		{
			name: 'Thiago Ventura',
			age: '31',
			country: 'UK'
		},
	];

	this.data2 = {
		id: 2121212,
		name: 'Ventura',
		age: 31,
		country: 'BR'
	}

	this.remove = function(item){
		var idx = th.data.indexOf(item);
		th.data.splice(idx,1);
	}

	this.add = function(name){
		th.data.push({
			name: name
		});
	}

});