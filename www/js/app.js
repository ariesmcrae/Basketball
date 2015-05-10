// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('eliteApp', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  // setup an abstract state for the tabs directive
    .state('home', {
        url: '/home',
        abstract: true,
        templateUrl: 'templates/home/home.html'
    })

    .state('home.leagues', {
        url: '/leagues',
        views: {
            'home-leagues': {
                templateUrl: 'templates/home/leagues.html'
            }
        }
    })

    .state('home.myTeams', {
        url: '/myTeams',
        views: {
            'home-myTeams': {
                templateUrl: 'templates/home/myTeams.html'
            }
        }
    })

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/layout/menu-layout.html'
    })

    .state('app.teams', {
        url: '/teams',
        views: {
            'mainContent': {
                templateUrl: 'templates/teams/teams.html'
            }
        }
    })

    .state('app.team-detail', {
        url: '/teams/:id',
        views: {
            'mainContent': {
                templateUrl: 'templates/teams/team-detail.html'
            }
        }
    })

    .state('app.game', {
        url: '/game',
        views: {
            'mainContent': {
                templateUrl: 'templates/game/game.html'
            }
        }
    })

    .state('app.game-detail', {
        url: '/game/:id',
        views: {
            'mainContent': {
                templateUrl: 'templates/game/game-detail.html'
            }
        }
    })

    .state('app.standings', {
        url: '/standings',
        views: {
            'mainContent': {
                templateUrl: 'templates/standings/standings.html'
            }
        }
    })

    .state('app.locations', {
        url: '/locations',
        views: {
            'mainContent': {
                templateUrl: 'templates/locations/locations.html'
            }
        }
    })

    .state('app.rules', {
        url: '/rules',
        views: {
            'mainContent': {
                templateUrl: 'templates/rules/rules.html'
            }
        }
    })

    ;


  // if none of the above states are matched, use this as the fallback
  //$urlRouterProvider.otherwise('/home/leagues');
  $urlRouterProvider.otherwise('/app/teams');

});
