(function () {
    function enterHover() {
        return {
            link: function ($scope, $element, $attrs) {
                $element.on("mouseover", function () {
                    $element.empty();
                    $element.attr("data-text", "< press start >");
                    $element.text("< press start >");
                });
                $element.on("mouseout", function () {
                    $element.empty();
                    $element.attr("data-text", "press start");
                    $element.text("press start");
                });

                $element.on("click", function () {
                    $(".error").fadeIn(0);
                    var elem = document.getElementById("virusBar");
                    var width = 1;
                    var id = setInterval(frame, 40);

                    function frame() {
                        if (width >= 100) {
                            clearInterval(id);
                        } else {
                            width++;
                            elem.style.width = width + '%';
                            if (width >= 100) {
                                $(".error2").delay(75).fadeIn(0);
                                $(".error2").delay(150).queue(function (next) {
                                    $(this).clone().appendTo("#errors");
                                    $(".error2").eq(1).css({
                                        top: "140px",
                                        left: "430px"
                                    });
                                    $(".error2").eq(1).addClass("drag1");
                                    $(".drag1").draggable();
                                    $(".drag1").find("i").on("click", function () {
                                        $(this).parent().parent().remove();         
                                    });
                                    $(".drag1").find("button").on("mousedown", function () {
                                        $(this).css("background-color", "rgb(185, 185, 185)");
                                        $(this).css("border-right", "1px solid black");
                                        $(this).css("border-bottom", "1px solid black");
                                        $(this).css("border-top", "2px solid black",);
                                        $(this).css("border-left", "2px solid black");
                                    });
                                    $(".drag1").find("button").on("mouseup", function () {
                                        $(this).css("background-color", "rgb(211, 211, 211)");
                                        $(this).css("border-right", "2px solid black");
                                        $(this).css("border-bottom", "2px solid black");
                                        $(this).css("border-top", "1px solid black",);
                                        $(this).css("border-left", "1px solid black");
                                    });
                                    next();
                                });
                                $(".error2").delay(225).queue(function (next) {
                                    $(this).clone().appendTo("#errors");
                                    $(".error2").eq(3).remove();
                                    $(".error2").eq(2).css({
                                        top: "180px",
                                        left: "460px"
                                    });
                                    $(".error2").eq(2).addClass("drag2");
                                    $(".drag2").draggable();
                                    $(".drag2").find("i").on("click", function () {
                                        $(this).parent().parent().remove();         
                                    });
                                    $(".drag2").find("button").on("mousedown", function () {
                                        $(this).css("background-color", "rgb(185, 185, 185)");
                                        $(this).css("border-right", "1px solid black");
                                        $(this).css("border-bottom", "1px solid black");
                                        $(this).css("border-top", "2px solid black",);
                                        $(this).css("border-left", "2px solid black");
                                    });
                                    $(".drag2").find("button").on("mouseup", function () {
                                        $(this).css("background-color", "rgb(211, 211, 211)");
                                        $(this).css("border-right", "2px solid black");
                                        $(this).css("border-bottom", "2px solid black");
                                        $(this).css("border-top", "1px solid black",);
                                        $(this).css("border-left", "1px solid black");
                                    });
                                    next();
                                });

                            }
                        }
                    }
                    $(".error2").eq(0).addClass("drag0");
                    $(".drag0").draggable();
                    $(".error").draggable();
                });

            }
        };

    }



    angular.module("retroApp")
        .directive("enterHover", enterHover);
})();