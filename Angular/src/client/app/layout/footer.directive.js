(function() {
    'use strict';

    angular
        .module('app.layout')
        .directive('footerBottom', footerBottom);

    /* @ngInject */
    function footerBottom () {
        var directive = {
            bindToController: true,
            controller: FooterController,
            controllerAs: 'vm',
            restrict: 'EA',
            scope: {
                'navline': '='
            },
            templateUrl: 'app/layout/footer.html'
        };

        /* @ngInject */
        function FooterController() {
            var vm = this;
        }

        return directive;
    }
})();
