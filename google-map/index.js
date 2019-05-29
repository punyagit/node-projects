let Config = require('../config/config.json')

fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&destination=Universal+Studios+Hollywood&key=${Config.Key}`)
    .then(data => console.log(data))