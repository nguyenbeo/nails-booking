(function() {
	var app = angular.module('booking');
	
	// custom directives
	app.directive('confirmationButton', function() {
		return {
			restrict: 'E',
			templateUrl: 'assets/confirmation-button.html'
		};
	});
	
	app.directive('serviceSelect', function() {
		return {
			restrict: 'E',
			templateUrl: 'assets/service-select.html'
		};
	});
	
	app.directive('salonSelect', function() {
		return {
			restrict: 'E',
			templateUrl: 'assets/salon-select.html'
		};
	});
	
	app.directive('assistantSelect', function() {
		return {
			restrict: 'E',
			templateUrl: 'assets/assistant-select.html'
		};
	});
	
	app.directive('dateSelect', function() {
		return {
			restrict: 'E',
			templateUrl: 'assets/date-select.html'
		};
	});
	
	app.directive('timeSelect', function() {
		return {
			restrict: 'E',
			templateUrl: 'assets/time-select.html'
		};
	});
	
	app.directive('customerInfo', function() {
		return {
			restrict: 'E',
			templateUrl: 'assets/customer-info.html'
		};
	});
})();