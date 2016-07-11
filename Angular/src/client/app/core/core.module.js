(function () {
    'use strict';

    angular
        .module('app.core', [
            'ngAnimate',
            'ngSanitize',
            'blocks.exception',
            'blocks.logger',
            'blocks.router',
            'ui.router',
            'ngplus',
            'angular-storage',
            /*Services Start*/
            'services.authentication'
            /*Services End*/
        ]);
})();