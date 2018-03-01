(function () {
    function errorButton() {
        return {
            link: function ($scope, $element, $attrs) {
                $element.on("mousedown", function () {
                    $(this).css("background-color", "rgb(185, 185, 185)");
                    $(this).css("border-right", "1px solid black");
                    $(this).css("border-bottom", "1px solid black");
                    $(this).css("border-top", "2px solid black",);
                    $(this).css("border-left", "2px solid black");
                });
                $element.on("mouseup", function () {
                    $(this).css("background-color", "rgb(211, 211, 211)");
                    $(this).css("border-right", "2px solid black");
                    $(this).css("border-bottom", "2px solid black");
                    $(this).css("border-top", "1px solid black",);
                    $(this).css("border-left", "1px solid black");
                });
    
            }
        };

    }
    angular.module("retroApp")
        .directive("errorButton", errorButton);
})();