/**
 * pafo-public-web-package - v0.1.0
 * 2017-07-28 15:55:08 GMT+0500
 */
(function (angular) {'use strict';
    angular.module('templates-pafo-public', []);

    angular.module('pafo-public-web-package', [
        'ui.router',
        'lodash',
        'ef-header',
        'oc.lazyLoad',

        'templates-common',
        'templates-modules',

        'common.required-field',
        'common.form-header',
        'common.dialogs',
        'common.utils',
        'common.auth',
        'common.user-info',
        'common.config',

        'pafo-common-web-package',
        'templates-pafo-public',
        'pafo-search-dashboard-state'
    ]);
})(angular);

(function (angular) {'use strict';
    pafoPublicLazyFactory.$inject = ["$ocLazyLoad"];
    angular.module('pafo-public-web-package')
        .factory('pafoPublicLazy', pafoPublicLazyFactory);

    /* @ngInject */
    function pafoPublicLazyFactory($ocLazyLoad) {
        return function () {
            return $ocLazyLoad.load({
                serie: true,
                rerun: true,
                files: [
                    'modules/vendor/pafo-common-web-package/release/pafo-common-web-package.js',
                    'modules/vendor/pafo-public-web-package/release/pafo-public-web-package.js',
                    'assets/pafo-public-web-package.min.css'
                ]
            });
        };
    }
})(angular);

(function (angular) {'use strict';
    angular.module('pafo-search-dashboard-state', [
        'common.ef-bp',
        'common.auth',
        'lodash'
    ]);
})(angular);

(function (angular) {'use strict';
    config.$inject = ["$stateProvider"];
    angular.module('pafo-search-dashboard-state').config(config);

    function config($stateProvider) {
        $stateProvider.state('dashboard-state-search', {
            url: '/search/dashboard/state',
            views: {
                content: {
                    controller: 'PafoSearchDashboardStateCtrl',
                    templateUrl: 'search-dashboard-state/search-dashboard-state.tpl.html'
                }
            },
            data: {
                pageTitle: 'Dashboard',
                breadcrumbs: [
                    {
                        url: '#!',
                        label: 'Главная страница'
                    }
                ]
            },
            resolve: {
                loadModule: ["pafoPublicLazy", function (pafoPublicLazy) {return pafoPublicLazy();}]
            }
        });
    }
})(angular);
