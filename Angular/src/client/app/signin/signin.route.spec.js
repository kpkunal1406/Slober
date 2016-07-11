/* jshint -W117, -W030 */
describe('Sign in routes', function () {
    describe('state', function () {
        var view = 'app/signin/signin.html';

        beforeEach(function() {
            module('app.signin', bard.fakeToastr);
            bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
        });

        beforeEach(function() {
            $templateCache.put(view, '');
        });

        bard.verifyNoOutstandingHttpRequests();

        it('should map state signin to url / ', function() {
            expect($state.href('signin', {})).to.equal('/');
        });

        it('should map /signin route to sign in View template', function () {
            expect($state.get('signin').templateUrl).to.equal(view);
        });

        it('of sign in should work with $state.go', function () {
            $state.go('/');
            $rootScope.$apply();
            expect($state.is('signin'));
        });
    });
});
