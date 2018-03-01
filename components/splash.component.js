(function () {
    var splashComponent = {
        templateUrl: "partials/splash.template.html",

        controller: function () {
            $.getJSON('https://api.ipify.org?format=json', function (data) {
                console.log(JSON.stringify(data, null, 2));
                $.getJSON("https://freegeoip.net/json/" + data.ip, function (data2) {
                    $(".welcomeIp").text("welcome " + data.ip);
                    $(".welcomeIp").attr("data-text", "welcome " + data.ip);
                    $(".welcomeCity").text("from " + data2.city.toLowerCase() + ", " + data2.region_code.toLowerCase());
                    $(".welcomeCity").attr("data-text", "from " + data2.city.toLowerCase() + ", " + data2.region_code.toLowerCase());
                    //$(".welcomeIp").text();       
                })
            });
            
        }
    };
    angular.module("retroApp")
        .component("splashComponent", splashComponent);

})();