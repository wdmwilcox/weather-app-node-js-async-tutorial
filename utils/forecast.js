const request = require("request");

const darkskyToken = "049fc731facf17dc688d83433100b7de";

const forecast = (latitude, longitude, callback) => {
    let darkskyURL = "https://api.darksky.net/forecast/" + darkskyToken + "/" + latitude + "," + longitude;
    request({url: darkskyURL, json: true}, (error, {body}) => {
        if (error) {
            callback("Error: " + error, undefined);
        } else if (body.error) {
            callback("Error: " + body.error);
        } else {
            let {apparentTemperature, precipProbability} = body.currently;
            data = {apparentTemperature, precipProbability};
            callback(undefined, data);
        };
    });
};

module.exports = forecast;


