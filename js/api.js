angular.module('app')
   .factory('API',['$http',function($http){
   	   return {
   	   	  aa:function(url,pass){
   	   	  	return $http({
               method:'GET',
               url:url,
               params:pass
   	   	  	});
   	   	  }
   	   }
   }])