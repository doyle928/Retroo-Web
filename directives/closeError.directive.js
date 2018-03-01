(function () {
    function closeError() {
        return {
            link: function ($scope, $element, $attrs) {
                $element.on("click", function () {
                    $(this).parent().parent().remove();         
                });
            }
        };
    }
    angular.module("retroApp")
        .directive("closeError", closeError);
})();