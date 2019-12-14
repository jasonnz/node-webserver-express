const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiamFzb25ueiIsImEiOiJjazFnNXN5OHQweWptM2JvMzJzMHc4bnd0In0.kpBZW4dEbHjjCkxke07lnw&limit=1'

    // console.log('Called');

    request({ url , json: true }, (error, {body}) => {

        if (error) {
            callback('There was an connecting accessing the geocode API!!', undefined)
        } else if (body.features.length === 0) {
            callback('There was an error accessing the geocode API!!', undefined)
        } else {
            
            callback(undefined, {
                lattitude: body.features[0].center[1],
                longtitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }

    })
}

module.exports = geocode