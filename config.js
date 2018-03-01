(function () {
    angular
        .module("retroApp")
        .config(function ($routeProvider) {
            $routeProvider
                .when("/welcome", {
                    template: "<splash-component></splash-component>"
                })
                .when("/about", {
                    template: "<about-component></about-component>"
                })
                .otherwise({
                    redirectTo: "/welcome"
                })
        });
})();