const request = require ('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/8d21510e4789bd96248c4afc3fcd9932/' + latitude + ',' + longitude
    request ({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to service', undefined) 
        } else if (body.error) {
            callback('Unable to reach, try again!', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast