(function() {
    'use strict';

    angular
        .module('app.core')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper,envConfig) {
        var otherwise = '/404';
        routerHelper.configureStates(getStates(envConfig), otherwise);
    }

    function getStates(envConfig) {
        return [
            {
                state: '404',
                config: {
                    url: envConfig.URL_PREFIX + '/404',
                    templateUrl: 'app/core/404.html',
                    title: '404'
                }
            }
        ];
    }
})();
