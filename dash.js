
var request = require("request");
var dash_button = require('node-dash-button');

var dash = dash_button("a0:02:dc:73:d7:4d", "wlan0", 60000);

console.log("Starting up...");

dash.on("detected", function()
{
  console.log("Dash button pressed!");
  request("http://christianmadden.ddns.net/api/routine/bedtime", function(error, response, body)
  {
    console.log(body);
  });
});
