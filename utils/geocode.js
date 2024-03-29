const request = require("request");

const mapboxToken ="pk.eyJ1Ijoid2Rtd2lsY294IiwiYSI6ImNrMnhwbjNkODBzbmMzY2xxOTd4Mno1NHEifQ.aCpqCzUsl_R8EWcLy7wHsw";

const geoCode = (city, callback) => {
    let mapboxURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(city) + ".json?access_token=" + mapboxToken + "&limit=1";
    request({url: mapboxURL, json: true}, (error, {body}) => {
        if (error) {
            callback("Error: " + error, undefined);
        } else if (body.features.length === 0) {
            let queryText = body.query[0];
            callback("Error: Location " + queryText + " is invalid", undefined);
        } else {
            let longitude = body.features[0].center[0];
            let latitude = body.features[0].center[1];
            let location = body.features[0].place_name;
            data = {longitude, latitude, location};
            callback(undefined, data);
        };
    });
};

module.exports = geoCode;