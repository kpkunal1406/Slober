/* jshint -W117 */
(function () {
    'use strict';

    var envconfig = angular.module('blocks.envConfig');
    envconfig.provider('envConfig', function () {
        this.$get = function () {
            //            var q = jQuery.ajax({
            //                type: 'GET',
            //                url: 'configDev.json',
            //                cache: false,
            //                async: false,
            //                contentType: 'application/json',
            //                dataType: 'json'
            //            });
            //
            //            if (q.status === 200) {
            //                angular.extend(envconfig, angular.fromJson(q.responseJSON));
            //            }
            return envconfig;
        };
    });

})();
