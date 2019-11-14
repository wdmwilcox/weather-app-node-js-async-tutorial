const geoCode = require("./utils/geocode.js");
const forecast = require("./utils/forecast.js");

if (process.argv[2]) {
    const userLocation = process.argv[2];
    geoCode(userLocation, (error, {latitude, longitude, location}) => {
        if (error) {
            return console.log(error);
        };
        forecast(latitude, longitude, (error, {apparentTemperature: temp, precipProbability: precipProb}) => {
            if (error) {
                return console.log(error);
            }
            console.log("The temperature in " + location + " is " +  temp + " degrees Fahrenheit.");
            console.log("The chance of precipitation is " + precipProb + "%.")
        });
    });
} else {
    console.log("You must specify a location.");
};





