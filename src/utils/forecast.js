const request = require('request')

const forecast = (lattitude, longtitude, callback) => {
    
    const url = 'https://api.darksky.net/forecast/7fc2dfb730817c683587689b605f0297/'
        + encodeURIComponent(lattitude) + ','
        + encodeURIComponent(longtitude) + '?units=si'

    // console.log('Called');

    request({ url, json: true }, (err, {body}) => {

        if (err) {
            console.log('Unable to connect to weather service');
        } else if (body.code == 400) {
            console.log(body.error);
        } else {
           
            const forecastdata = body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' out with a %' + body.currently.precipProbability + ' chance of rain.';

            const forecastdataLow = ' The low for the day is: ' + body.daily.data[0].temperatureLow;
            const forecastdataHigh = ' The high for the day is: ' + body.daily.data[0].apparentTemperatureHigh;

            console.log(body.daily.data[0])
            callback(undefined, {
                forecastdata: forecastdata + forecastdataLow + forecastdataHigh
            })
        }

    });
}

module.exports = forecast