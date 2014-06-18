'use strict';

/* Controllers */

var ConversateApp = angular.module('conversate.controllers', []);
ConversateApp.controller('HomeController', ['$rootScope', '$scope', '$location', HomeController]);
ConversateApp.controller('ChatController', ['$rootScope', '$scope', '$location', 'ChatService', ChatController]);

function HomeController($rootScope, $scope, $location) {
	$scope.start = function() {
		$location.path('/chat');
	};
}

function ChatController($rootScope, $scope, $location, ChatService) {
	//$scope.chatOutput = '<div class=\"serverChat\">Aakrit: Hello, how can I help you?</div>';
	$scope.chatOutput = '';

	$scope.chatKey = function(ev) {
	  if (ev.which==13)
	    $scope.chat();
	}

	$scope.chat = function() {
		var chatMessage = $scope.chatInput;
		$scope.chatOutput += '<div class=\"clientChat\">' + chatMessage + '</div>';
    $scope.chatInput = '';

		$scope.chatData = ChatService.get({message: chatMessage, tags: $rootScope.tags}, function(data) {
				$scope.chatOutput += '<div class=\"serverChat\">Bot: ' + data.response + '</div>';
				if(data.tags)
				{
					$rootScope.tags = data.tags;
				}
		  });
	}
}
