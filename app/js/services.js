'use strict';

/* Services */

var ConversateServices = angular.module('conversate.services', ['ngResource']);

ConversateServices.value('version', '0.1');

ConversateServices.factory('ChatService', ['$resource',
  function($resource){
    return $resource('http://localhost\:8081/chat', {}, {
      query: {method:'GET', params:{message:'input'}, isArray:false}
    });
  }]);
