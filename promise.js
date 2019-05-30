

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


// let promisesArray = destinations.map(destination => {
//     return new Promise((resolve, reject) => {
//         resolve(destination.map(obj => {
//             return new Promise((resolve, reject) => {
//                 findDifference(obj)
//                     .then(data => resolve(data))
//             })

//         }))


//     })

// })

// Promise.all(promisesArray)
//     .then(function (results) {
//         console.log(results[0][0].Promise)
//     })
//     .catch(function (error) {
//         console.log(error)
//     })



function findDifference(obj) {
    return new Promise((resolve, reject) => {
        resolve(obj.origin + obj.destination)
    })
}