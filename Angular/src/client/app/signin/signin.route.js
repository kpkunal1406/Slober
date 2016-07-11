(function () {
    'use strict';

    angular
        .module('app.signin')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'signin',
                config: {
                    url: '/signin',
                    templateUrl: 'app/signin/signin.html',
                    controller: 'SignInController',
                    controllerAs: 'vm',
                    title: 'Sign in',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-dashboard"></i> Sign in'
                    }
                },
                isAuthRequired: false
            }
        ];
    }
})();
