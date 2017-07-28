/**
 * pafo-public-web-package - v0.1.0
 * 2017-07-28 15:55:08 GMT+0500
 */
(function (angular) {'use strict';
    angular.module('pafo-search-dashboard-state')
        .controller('PafoSearchDashboardStateCtrl', PafoSearchDashboardStateCtrl);

    /* @ngInject */
    function PafoSearchDashboardStateCtrl() {}
})(angular);

angular.module('templates-pafo-public', ['search-dashboard-state/search-dashboard-state.tpl.html']);

angular.module("search-dashboard-state/search-dashboard-state.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("search-dashboard-state/search-dashboard-state.tpl.html",
    "<div class=\"pafo-search-dashboard-state\">\n" +
    "    pafo-public-web-package\n" +
    "</div>\n" +
    "");
}]);
