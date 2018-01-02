angular.module('app')
   .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
   	   $urlRouterProvider.otherwise('/');
   	   $stateProvider
   	   .state('home',{
   	   	url:'/',
   	   	templateUrl:'./view/home/home.html',
   	   	controller:'homeController',
   	   	resolve:{
   	   		des:['$ocLazyLoad',function($ocLazyLoad){
   	   			return $ocLazyLoad.load('home');
   	   		}]
   	   	}
   	   })
   }])