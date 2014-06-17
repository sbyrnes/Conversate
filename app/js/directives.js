'use strict';

/* Directives */


var AssemblyLineApp = angular.module('conversate.directives', []);

AssemblyLineApp.directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
