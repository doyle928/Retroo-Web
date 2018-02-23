$.getJSON('https://api.ipify.org?format=json', function(data) {
  console.log(JSON.stringify(data, null, 2));
  $(".welcomeIp").attr("data-text", "Welcome " + data.ip);
  $(".welcomeIp").text("welcome " + data.ip);
});