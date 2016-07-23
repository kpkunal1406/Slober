(function () {
    'use strict';

    angular
        .module('services.authentication')
        .factory('AuthenticationService', AuthenticationService);

    AuthenticationService.$inject = ['$http', '$q', 'exception', 'logger', 'store', '$rootScope'];
    /* @ngInject */
    function AuthenticationService($http, $q, exception, logger, store, $rootScope) {
        var service = {
            signUp: signUp,
            signIn: signIn,
            signOut: signOut,
            storeUserDetail: storeUserDetail,
            removeUserDetail: removeUserDetail
        };

        return service;
        /**
         * [[Description]]
         * @param   {User} user     [[Description]]
         * @param   {function} callback [[Description]]
         * @returns {function} [[Description]]
         */
        function signUp(user, callback) {
            return $http.post('/SloberApp/createUser', {
                    userReqVO: user
                })
                .then(success)
                .catch(fail);

            function success(response) {
                callback(response);
            }

            function fail(e) {
                return exception.catcher('XHR Failed for Signup User')(e);
            }
        }
        /**
         * [[Description]]
         * @param   {User} user     [[Description]]
         * @param   {Callback} callback [[Description]]
         * @returns {Response} [[Description]]
         */
        function signIn(user, callback) {
            return $http.post('/SloberApp/authenticateUser', {
                    userReqVO: user
                })
                .then(success)
                .catch(fail);

            function success(response) {
                callback(response);
            }

            function fail(e) {
                return exception.catcher('XHR Failed for Signin User')(e);
            }
        }

        function signOut(callback) {
            return $http.post('/SloberApp/signOutUser', {})
                .then(success)
                .catch(fail);

            function success(response) {
                callback(response);
            }

            function fail(e) {
                return exception.catcher('XHR Failed for SignOut User')(e);
            }
        }

        function storeUserDetail(userData) {
            store.set('user', userData);
            store.set('isLoggedIn', true);
            checkUserStatus();
        }

        function removeUserDetail() {
            store.remove('user');
            store.set('isLoggedIn', false);
            checkUserStatus();
        }

        function checkUserStatus() {
            $rootScope.isUserLoggedIn = (store.get('isLoggedIn') === null) ?
                false : store.get('isLoggedIn');
        }
    }
})();
