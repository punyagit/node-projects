

let destinations = [
    [
        { origin: 19, destination: 11 },
        { origin: 11, destination: 7 },
        { origin: 7, destination: 3 }
    ],
    [
        { origin: 19, destination: 31 },
        { origin: 3, destination: 7 },
        { origin: 7, destination: 11 }
    ],
    [
        { origin: 19, destination: 1 },
        { origin: 11, destination: 3 },
        { origin: 3, destination: 7 }
    ]

]

Promise.all(destinations.map(destination => Promise.all(destination.map(findDifference)))).then(console.log)

function findDifference(obj) {
    return new Promise((resolve, reject) => {
        resolve(obj.origin + obj.destination)
    })
}

// let promisesArray = destinations.map(array => new Promise((resolve, reject) => {
//     Promise.all(array.map(element => findDifference(element)))
//         .then(resolve)
//         .catch(reject)
// })
// )


// Promise.all(promisesArray)
//     .then(function (results) {
//         console.log(results)
//     })
//     .catch(function (error) {
//         console.log(error)
//     })



