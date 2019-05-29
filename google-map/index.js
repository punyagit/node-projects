let Config = require('../config/config.json')
const https = require('http');

const googleMapsClient = require('@google/maps').createClient({
    key: Config.KEY,
    Promise: Promise
});

let destinations = [
    { origin: "glenfield, Nsw", destination: "liverpool, NSw" },
    { origin: "Liverpool, Nsw", destination: "Rockdale, NSw" },
    { origin: "kogarah, Nsw", destination: "clovelly, NSw" },
]

let promisesArray = destinations.map(destination => {
    // make a new promise for each element of cities
    return new Promise((resolve, reject) => {
        googleMapsClient.directions(destination)
            .asPromise()
            .then(data => {
                //console.log(data.json.routes[0].legs[0].distance)
                //console.log(data.json.routes[0].legs[0].duration)
                resolve(data.json.routes[0].legs[0].distance["value"])
            }

            )



    })
})

Promise.all(promisesArray)
    .then(function (results) {
        console.log(typeof (results[0]))
    })
    .catch(function (error) {
        console.log(error)
    })


// googleMapsClient.directions()
//     .asPromise()
//     .then(data => {
//         console.log(data.json.routes[0].legs[0].distance)
//         console.log(data.json.routes[0].legs[0].duration)
//     }

//     )

