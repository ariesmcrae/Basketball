(function(){
    'use strict';

    angular.module('eliteApp').controller('LeaguesController', ['$state', 'EliteApiService', LeaguesController]);

    function LeaguesController($state, EliseApiService) {
        var vm = this;

        vm.leagues = EliseApiService.getLeagues();
        var leagueData = EliseApiService.getLeagueData();

        vm.selectLeague = function(leagueId) {
            //todo: select correct league
            $state.go("app.teams");
        };

    };
}());
