$.getJSON('https://api.ipify.org?format=json', function (data) {
    console.log(JSON.stringify(data, null, 2));
    $(".welcomeIp").attr("data-text", "Welcome " + data.ip);
    $(".welcomeIp").text("welcome " + data.ip);
});



$(document).ready(function () {

    //var error = $(".error");
    setTimeout(function () {
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
            }
        }

    }, 3000);


    $(".error").click(function () {
        $(".error2").fadeIn(0);
    })
});