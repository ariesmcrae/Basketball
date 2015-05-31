(function(){
    'use strict';

    angular.module('eliteApp').controller('LocationsController', ['EliteApiService', LocationsController]);

    function LocationsController(EliteApiService) {
        var vm = this;

        var data = EliteApiService.getLeagueData();
        console.log("data=" + data);
        vm.locations = data.locations;
    };
}());
