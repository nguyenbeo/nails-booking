(function() {
	var app = angular.module('booking');
	
	app.controller('ConfirmationPopupCtrl', function ($scope, $uibModal) {
		  $scope.open = function (bookingModel) {
			var modalInstance = $uibModal.open({
			  animation: true,
			  templateUrl: 'confirmationContent.html',
			  controller: 'ConfirmationInstanceCtrl',
			  size: null,
			  resolve: {
				  booking : bookingModel
			  }
			});
			
			modalInstance.result.then(function (selectedItem) {
				alert("Testing");
			});
		  };
	});
	
	app.controller('ConfirmationInstanceCtrl', function ($scope, $uibModalInstance, booking) {
		$scope.booking = booking;
		
		  $scope.book = function () {
			  alert($scope.booking);
			  $uibModalInstance.close('book');
		  };
		
		  $scope.cancel = function () {
			  $uibModalInstance.dismiss('cancel');
		  };
	});
})();