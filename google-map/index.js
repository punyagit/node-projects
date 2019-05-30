let Config = require('../config/config.json')


const googleMapsClient = require('@google/maps').createClient({
    key: Config.KEY,
    Promise: Promise
});

let destinations = [
    [
        { origin: "glenfield, Nsw", destination: "liverpool, NSw" },
        { origin: "Liverpool, Nsw", destination: "Rockdale, NSw" },
        { origin: "Rockdale, Nsw", destination: "kogarah, NSw" }
    ],
    [
        { origin: "glenfield, Nsw", destination: "Kogarah, NSw" },
        { origin: "Kogarah, Nsw", destination: "Rockdale, NSw" },
        { origin: "Rockdale, Nsw", destination: "Liverpool, NSw" }
    ],
    [
        { origin: "glenfield, Nsw", destination: "liverpool, NSw" },
        { origin: "Liverpool, Nsw", destination: "kogarah, NSw" },
        { origin: "kogarah, Nsw", destination: "rockdale, NSw" }
    ]

]

let promisesArray = destinations.map(array => new Promise((resolve, reject) => {
    Promise.all(array.map(element => findDifference(element)))
        .then(resolve)
        .catch(reject)
})
)

Promise.all(promisesArray)
    .then(function (results) {
        console.log(results)
    })
    .catch(function (error) {
        console.log(error)
    })



function findDifference(obj) {
    return new Promise((resolve, reject) => {
        googleMapsClient.directions(obj).asPromise()
            .then(data => resolve(data.json.routes[0].legs[0].distance["value"]))
    })
}


