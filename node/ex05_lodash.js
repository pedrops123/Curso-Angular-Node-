const _ = require('lodash');

const obj = [
    {
        nome:'Pedro Furlan',
        nota:5
    },
    {
        nome:'Beatriz Vicente',
        nota:10
    },
    {
        nome:'Juan Carlos',
        nota:6
    }
]

const media = _.sumBy(obj,'nota') / obj.length

console.log(media)
