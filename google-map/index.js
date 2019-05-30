let Config = require('../config/config.json')


const googleMapsClient = require('@google/maps').createClient({
    key: Config.KEY,
    Promise: Promise
});
// let destinations = [
//     [
//         { origin: "glenfield, Nsw", destination: "liverpool, NSw" },
//         { origin: "Liverpool, Nsw", destination: "Rockdale, NSw" },
//         { origin: "Rockdale, Nsw", destination: "kogarah, NSw" }
//     ],
//     [
//         { origin: "glenfield, Nsw", destination: "Kogarah, NSw" },
//         { origin: "Kogarah, Nsw", destination: "Rockdale, NSw" },
//         { origin: "Rockdale, Nsw", destination: "Liverpool, NSw" }
//     ],
//     [
//         { origin: "glenfield, Nsw", destination: "liverpool, NSw" },
//         { origin: "Liverpool, Nsw", destination: "kogarah, NSw" },
//         { origin: "kogarah, Nsw", destination: "rockdale, NSw" }
//     ]

// ]


let destinations = [
    [
        { origin: "x", destination: "y" },
        { origin: "y", destination: "z" },
        { origin: "z", destination: "A" }
    ],
    [
        { origin: "x", destination: "A" },
        { origin: "A", destination: "z" },
        { origin: "z", destination: "y" }
    ],
    [
        { origin: "x", destination: "y" },
        { origin: "y", destination: "A" },
        { origin: "A", destination: "z" }
    ]

]

let promisesArray = destinations.map(destination => {
    // make a new promise for each element of cities
    let arr = []
    return new Promise((resolve, reject) => {
        destination.map(d => {

            googleMapsClient.directions(d)
                .asPromise()
                .then(data => {
                    arr.push(data.json.routes[0].legs[0].distance["value"])
                    return arr
                })
                .then(array => console.log(array))


        })
    })

})





// Promise.all(promisesArray)
//     .then(function (results) {
//         console.log(results)
//     })
//     .catch(function (error) {
//         console.log(error)
//     })


// googleMapsClient.directions()
//     .asPromise()
//     .then(data => {
//         console.log(data.json.routes[0].legs[0].distance)
//         console.log(data.json.routes[0].legs[0].duration)
//     }

//     )


// let promisesArray = destinations.map(destination => {
//     // make a new promise for each element of cities
//     return new Promise((resolve, reject) => {


//         googleMapsClient.directions(destination)
//             .asPromise()
//             .then(data => {
//                 //console.log(data.json.routes[0].legs[0].distance)
//                 //console.log(data.json.routes[0].legs[0].duration)
//                 resolve(data.json.routes[0].legs[0].distance["value"])
//             }

//             )


//     })



// })


