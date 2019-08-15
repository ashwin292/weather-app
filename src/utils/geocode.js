const request = require('request')

const geocode = (place, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=pk.eyJ1IjoiYXNod2luMjkyIiwiYSI6ImNqeXlsNmJvajFpY2YzbXJybmMwZHdjNWEifQ.wInrS_LiwM5YJ5H0goHC1w&limit=1`

request({ url, json: true}, (error,{ body }) => {
    if (error){
        callback('Unable to connect to geolocation service', undefined)
    } else if (body.features.length === 0) {
        callback('Unable to find location', undefined);
    } else {
        callback(undefined, {
            latitude: body.features[0].center[1],
            longitude: body.features[0].center[0],
            location: body.features[0].place_name
        })
    }
   
})
}

module.exports = geocode