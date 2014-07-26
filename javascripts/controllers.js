'use strict';

var todosApp = angular.module('todosApp', [])
	.controller('todoListCtrl', function($scope){
		$scope.list = [];

		$scope.date = new Date();
		$scope.uid = 1;

		$scope.returnListLength = function(){
      return $scope.list.length - _.filter($scope.list, function (todo) {return todo.done}).length;
		};

		$scope.addNewTodo = function(item){
			console.log($scope.newTodoText);
      if ($scope.newTodoText.length){
        $scope.list.push ( {id: $scope.uid, item: $scope.newTodoText , done: false});
        $scope.uid++
        $scope.newTodoText = '';
      }
		};

		$scope.clearFinishedItems = function () {
			$scope.list = _.filter($scope.list, function (todo) {return !todo.done});
		};

		$scope.clearList = function () {
			$scope.list = []
		}
	});