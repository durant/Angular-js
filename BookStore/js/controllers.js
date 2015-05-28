var bookStoreCtrl = angular.module('bookStoreCtrls',[]);
bookStoreCtrl.controller('HelloCtrl',['$scope',function($scope) {
	$scope.greeting = {
		text:"Hello"
	};
}]);

bookStoreCtrl.controller('BookListCtrl',['$scope',function($scope){
	$scope.books = [{title:'《Ext江湖》',author:"spoony"},
					{title:"《ActonScript游戏设计基础》",author:"kevin"},
					{title:"《用AngularJS开发下一代WEB应用》",author:"spoony_kevin"}]
	}
]);

