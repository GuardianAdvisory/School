/* Setup blank page controller */
angular.module('MetronicApp').controller('BlankController', ['$rootScope', '$scope', 'settings', '$http',
    function ($rootScope, $scope, settings, $http) {
        $scope.$on('$viewContentLoaded', function () {
            // initialize core components
            App.initAjax();

            // set default layout mode
            $rootScope.settings.layout.pageContentWhite = true;
            $rootScope.settings.layout.pageBodySolid = false;
            $rootScope.settings.layout.pageSidebarClosed = false;
        });


        $scope.loginPage = function()
        {
            $scope.transact = "iqbal";

            $http.post('/api/Login/addLogin', $scope.transact)
                .then(function (response) {
                    $scope.transact = {};

                }).catch(function (response) {
                    console.log(response.status);
                    alert("Something is wrong");
                });

        }

    }]);
