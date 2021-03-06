(function() {
    'use strict';

    angular
        .module('hoteisApp')
        .controller('HotelController', HotelController);

    HotelController.$inject = ['$scope', '$state', 'Hotel'];

    function HotelController ($scope, $state, Hotel) {
        var vm = this;
        
        vm.hotels = [];

        loadAll();

        function loadAll() {
            Hotel.query(function(result) {
                vm.hotels = result;
            });
        }
    }
})();
