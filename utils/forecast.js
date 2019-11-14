const request = require("request");

const darkskyToken = "049fc731facf17dc688d83433100b7de";

const forecast = (latitude, longitude, callback) => {
    let darkskyURL = "https://api.darksky.net/forecast/" + darkskyToken + "/" + latitude + "," + longitude;
    request({url: darkskyURL, json: true}, (error, response) => {
        if (error) {
            callback("Error: " + error, undefined);
        } else if (response.body.error) {
            callback("Error: " + response.body.error);
        } else {
            let apparentTemperature = response.body.currently.apparentTemperature;
            let precipProbability = response.body.currently.precipProbability;
            data = {
                temperature: apparentTemperature,
                precipitationProbability: precipProbability,
            };
            callback(undefined, data);
        };
    });
};

module.exports = forecast;


