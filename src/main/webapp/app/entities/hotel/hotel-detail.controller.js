(function() {
    'use strict';

    angular
        .module('hoteisApp')
        .controller('HotelDetailController', HotelDetailController);

    HotelDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Hotel'];

    function HotelDetailController($scope, $rootScope, $stateParams, previousState, entity, Hotel) {
        var vm = this;

        vm.hotel = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('hoteisApp:hotelUpdate', function(event, result) {
            vm.hotel = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
