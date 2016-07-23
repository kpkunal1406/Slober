(function () {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$q', 'dataservice', 'logger'];
    /* @ngInject */
    function DashboardController($q, dataservice, logger) {
        var vm = this;
        vm.news = {
            title: 'SLOBER'
        };
        vm.messageCount = 0;
        vm.title = 'Dashboard';

        activate();

        function activate() {
            var promises = [];
            return $q.all(promises).then(function () {
                logger.info('Activated Dashboard View');
            });
        }

    }
})();
