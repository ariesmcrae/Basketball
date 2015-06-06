(function(){
    'use strict';

    angular.module('eliteApp').controller('TeamsController', ['EliteApiService', TeamsController]);

    function TeamsController(EliteApiService) {
        var vm = this;

        var data = EliteApiService.getLeagueData();
        vm.teams = data.teams;
    };
}());
