(function() {
	var app = angular.module('booking');
	
	app.controller("BookingController", ['$http', '$scope', 'CategoryService', 'DateService', 
	                                     function($http, $scope, CategoryService, DateService) {
		var bookingCtrl = this;
		bookingCtrl.bookingModel = {};
		
		// reset form
		$scope.reset = function() {
			bookingCtrl.bookingModel = {};
			$scope.resetStatus();
		};
		
		// reset selected status
		$scope.resetStatus = function() {
			$scope.isSelectedService = false;
			$scope.isSelectedSalon = false;
			$scope.isSelectedAssistant = false;
			$scope.isSelectedDate = false;
			$scope.isSelectedTime = false;
		};
		
		// on-change event of select service
		$scope.selectService = function() {
			$scope.resetStatus();
			bookingCtrl.bookingModel.salon = {};
			bookingCtrl.bookingModel.assistant = {};
			bookingCtrl.bookingModel.date = null;
			bookingCtrl.bookingModel.time = null;
			if (bookingCtrl.bookingModel.service) {
				$scope.isSelectedService = true;
				$scope.selectedService = CategoryService.getServiceById(bookingCtrl.bookingModel.service);
			}
		};
		
		// on-change event of select salon
		$scope.selectSalon = function() {
			$scope.isSelectedSalon = false;
			$scope.isSelectedAssistant = false;
			$scope.isSelectedDate = false;
			bookingCtrl.bookingModel.assistant = {};
			bookingCtrl.bookingModel.date = null;
			bookingCtrl.bookingModel.time = null;
			if (bookingCtrl.bookingModel.salon && bookingCtrl.bookingModel.salon.assistants.length > 0) {
				$scope.isSelectedSalon = true;
			}
		};
		
		// on-change event of select assistant
		$scope.selectAssistant = function() {
			if (bookingCtrl.bookingModel.assistant) {
				$scope.isSelectedAssistant = true;
				$scope.selectedAssistant = bookingCtrl.bookingModel.assistant;
			}
		};
		
		// on-change date
		$scope.selectDate = function() {
			$scope.isSelectedDate = true;
			$scope.showTimes();
		}
		
		// on-change time
		$scope.selectTime = function(fromTime, toTime) {
			$scope.isSelectedTime = true;
			bookingCtrl.bookingModel.time = fromTime + ' - ' + toTime;
		};
		
		// check select time
		$scope.checkSelectedTime = function (fromTime, toTime) {
			return (bookingCtrl.bookingModel.time == (fromTime + ' - ' + toTime));
		}
		
		// Datetime
		$scope.minDate = new Date();
		$scope.maxDate = new Date(2015, 12, 20);
		$scope.events = [];
		
		// get date schedules
		$scope.showDates = function(withAssistant) {
			if (withAssistant != null && withAssistant != "") {
				
			} else {
				
			}
		};
		
		// get time schedules
		$scope.showTimes = function() {
			$http.get('data/timeschedule.json').success(function(data){
				$scope.timeSlots = data.timeSchedules;
			});
		}
		
		$scope.getDayClass = function(date, mode) {
			if (mode === 'day') {
				var dayToCheck = new Date(date).setHours(0, 0, 0, 0);
				for (var i = 0; i < $scope.events.length; i++) {
					var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);
					if (dayToCheck === currentDay) {
						return $scope.events[i].status;
					}
				}
			}
			return '';
		};
		
		// Confirmation
		$scope.openConfirm = function() {
			
		};
		
	}]);
})();