(function() {
	var app = angular.module('booking');
	
	app.controller("CustomerController", ['$http', 'CategoryService', 'DateService', 
	                                      function($http, CategoryService, DateService) {
		var customerCtrl = this;
		customerCtrl.data = {};
		customerCtrl.services = [];
		
		$http.get('data/customers.json').success(function(data){
			customerCtrl.data = data;
			DateService.setCustomer(data);
		});
		
		$http.get('data/services.json').success(function(data){
			customerCtrl.services = data;
			CategoryService.setServices(data);
		});
	}]);
})();