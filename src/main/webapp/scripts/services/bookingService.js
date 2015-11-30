(function() {
	var app = angular.module('booking-service', [ ]);
	
	app.service("CategoryService", function() {
		this.customer = {};
		this.services = [];
		
		this.setServices = function(_services) {
			this.services = _services;
		};
		
		/**
		 * Get service object from its id
		 * 
		 * @param Json object of categories and theirs services
		 * @param service id
		 */
		this.getServiceById = function(id) {
			var serviceObj = {};
			//TODO use break
			angular.forEach(this.services, function (category, index) {
				angular.forEach(category.services, function(service, index) {
					if (id == service.id) {
						serviceObj = service;
					}
				});
			});
			return serviceObj;
		};
		
	});
	
	app.service("DateService", function(){
		this.customer = {};
		
		this.setCustomer = function(_customer) {
			this.customer = _customer;
		};
		
		this.getMaxDate = function(minDate) {
			var maxDate = minDate;
			maxDate.setDate(maxDate.getDate() + this.customer.settings.bookBeforeNoOfDays);
		};
	});
})();