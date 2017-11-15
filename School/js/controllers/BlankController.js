/* Setup blank page controller */
angular.module('MetronicApp').controller('BlankController', ['$rootScope', '$scope', 'settings','$http',
    function ($rootScope, $scope, settings,$http) {
    $scope.$on('$viewContentLoaded', function() {   
        // initialize core components
        App.initAjax();

        // set default layout mode
        $rootScope.settings.layout.pageContentWhite = true;
        $rootScope.settings.layout.pageBodySolid = false;
        $rootScope.settings.layout.pageSidebarClosed = false;
    });



            $scope.transact = "iqbal";

            $http.post('/api/Values/AddPayment', $scope.transact)
                .then(function (response) {
                    $scope.transact = {};
                    alert(response.data);

                }).catch(function (response) {
                    console.log(response.status);
                    alert("Something is wrong");
                });
        


}]);
