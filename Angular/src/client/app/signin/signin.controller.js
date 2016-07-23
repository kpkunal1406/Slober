(function () {
    'use strict';

    angular
        .module('app.signin')
        .controller('SignInController', SignInController);

    SignInController.$inject = ['$q', 'logger', '$state', 'AuthenticationService'];
    /* @ngInject */
    function SignInController($q, logger, $state, AuthenticationService) {
        var vm = this;

        vm.isLoginView = true;
        vm.isAuthenticationFailed = false;
        vm.cancelSignUp = cancelSignUp;
        vm.createAccount = createAccount;
        vm.signIn = signIn;
        vm.signUp = signUp;
        vm.user = {};

        activate();

        function activate() {
            var promises = [];
            return $q.all(promises).then(function () {
                logger.info('Activated Sign in View');
            });
        }

        function cancelSignUp() {
            vm.isLoginView = true;
            vm.user = {};
        }

        /**
         * Create Account
         */
        function createAccount() {
            vm.isLoginView = false;
            vm.isAuthenticationFailed = false;
        }

        /**
         * Use to Sign In
         */
        function signIn() {
            AuthenticationService.signIn(vm.user, function (response) {
                if (response.status === 200) {
                    if (response.data.messageId === 0) {
                        AuthenticationService.storeUserDetail(response.data);
                        $state.go('dashboard');
                    } else if (response.data.messageId === 11) {
                        vm.isAuthenticationFailed = true;
                    }
                }
            });
        }

        /**
         * Use to Sign up
         */
        function signUp() {
            AuthenticationService.signUp(vm.user, function (response) {
                vm.user = {};
            });
        }
    }
})();
