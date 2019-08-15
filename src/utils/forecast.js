const request = require('request')

const forecast = (long, lat, callback) => {
    const url = `https://api.darksky.net/forecast/9957230802f25a22630c6bde1120976e/${lat},${long}?units=si`

request({ url, json: true }, (error, { body } ) => {
    if (error){
        callback('Unable to connect to weather service', undefined)
    } else if (body.error) {
        callback('Unable to find location', undefined);
    } else {
        callback(undefined, body.daily.data[0].summary + " It is currently " + body.currently.temperature + " degrees out. There is "+body.currently.precipProbability*100 + "% chance of rain.");
    }
    
})
}

module.exports = forecast