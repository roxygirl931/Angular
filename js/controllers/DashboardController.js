'use strict';

app.controller('DashboardController',
	function DashboardController($scope, $window, pullTopTen, pullUrl){
		
        $("#newsTabs").tabs();
        var url =  window.location.href;
        var parts = url.split('#');
        var hash = parts.pop();

		/* Gets JSON items for top 10 */
		pullTopTen.success(function(data) { 
		    $scope.posts = data;
		});

		$scope.openLink = function (value) {
        	
        	//console.log(value);
        	
        	pullUrl.url = value;
        	$window.open('/#/tabs#newsTab', '_blank');
        	
        	return pullUrl.url;
        	

        	
    	};

        if (hash == 'newsTab'){
            alert(pullUrl.url)
        }

		
	}
);
