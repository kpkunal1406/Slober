(function () {
    'use strict';

    angular
        .module('app.layout')
        .directive('htTopNav', htTopNav);

    /* @ngInject */
    function htTopNav() {
        var directive = {
            bindToController: true,
            controller: TopNavController,
            controllerAs: 'vm',
            restrict: 'EA',
            scope: {
                'navline': '='
            },
            templateUrl: 'app/layout/ht-top-nav.html'
        };

        /* @ngInject */
        TopNavController.$inject = ['$state', 'store', 'AuthenticationService', '$rootScope'];

        function TopNavController($state, store, AuthenticationService, $rootScope) {
            var vm = this;

            vm.signIn = signIn;
            vm.signOut = signOut;

            refreshHeader();
            vm.isSignVisible = true;

            function signIn() {
                $state.go('signin');
            }

            function signOut() {
                AuthenticationService.signOut(function (response) {
                    if (response.status === 200) {
                        // if (response.data.messageId === 0) {
                        $state.go('home');
                        AuthenticationService.removeUserDetail();
                        // }
                        refreshHeader();
                    }
                });
            }

            function refreshHeader(stateName) {
                vm.isUserLoggedIn = $rootScope.isUserLoggedIn;
                if ($state.current.name === 'signin') {
                    vm.isSignVisible = false;
                } else {
                    vm.isSignVisible = true;
                }

            }

            $rootScope.$on('$stateChangeSuccess',
                function (event, toState, toParams, fromState, fromParams) {
                    refreshHeader();
                });
        }

        return directive;
    }
})();
