const request = require("request");

const mapboxToken ="pk.eyJ1Ijoid2Rtd2lsY294IiwiYSI6ImNrMnhwbjNkODBzbmMzY2xxOTd4Mno1NHEifQ.aCpqCzUsl_R8EWcLy7wHsw";

const geoCode = (city, callback) => {
    let mapboxURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(city) + ".json?access_token=" + mapboxToken + "&limit=1";
    request({url: mapboxURL, json: true}, (error, response) => {
        if (error) {
            callback("Error: " + error, undefined);
        } else if (response.body.features.length === 0) {
            let queryText = response.body.query[0]
            callback("Error: Location " + queryText + " is invalid", undefined);
        } else {
            let longitude = response.body.features[0].center[0];
            let latitude = response.body.features[0].center[1];
            let location = response.body.features[0].place_name;
            data = {
                longitude: longitude,
                latitude: latitude,
                location: location
            };
            callback(undefined, data);
        };
    });
};

module.exports = geoCode;