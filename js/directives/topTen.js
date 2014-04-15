'use strict';

angular.module('topTen', [])

.directive('report', function() {
	return {
		restrict: 'C',
		scope: {
			url:'@',
			methodToCall: '&method'
		},
		
		link: function(scope, element, attrs) {
			var linkUrl = scope.url;
			
   			element.bind('click', function(){
   				scope.methodToCall({value: linkUrl});

   				
   			});

   		}
            
	};
}); 