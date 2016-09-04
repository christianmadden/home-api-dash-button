
require('dotenv').config()
var request = require("request");
var dash_button = require('node-dash-button');

var dash = dash_button(process.env.DASH_MAC_ADDRESS, process.env.NETWORK_INTERFACE, 60000);

console.log("Starting up...");

dash.on("detected", function()
{
  console.log("Dash button pressed!");
  request(process.env.REQUEST_URL, function(error, response, body)
  {
    console.log(body);
  });
});
