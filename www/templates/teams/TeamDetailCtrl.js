(function(){
    'use strict';

    angular.module('eliteApp').controller('teamDetailCtrl', ['$stateParams', teamDetailCtrl]);

    function teamDetailCtrl($stateParams) {
        var vm = this;
        console.log("$stateParams", $stateParams);
    };
}());
