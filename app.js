const geoCode = require("./utils/geocode.js");
const forecast = require("./utils/forecast.js");

if (process.argv[2]) {
    const userLocation = process.argv[2];
    geoCode(userLocation, (error, data) => {
        if (error) {
            return console.log(error);
        };
        let latitude = data.latitude;
        let longitude = data.longitude;
        let location = data.location;
        forecast(latitude, longitude, (error, data) => {
            if (error) {
                return console.log(error);
            }
            let temperature = data.temperature;
            let precipitationProbability = data.precipitationProbability;
            console.log("The temperature in " + location + " is " +  temperature + " degrees Fahrenheit.");
            console.log("The chance of precipitation is " + precipitationProbability + "%.")
        });
    });
} else {
    console.log("You must specify a location.");
};





