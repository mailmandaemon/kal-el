const mongoose = require('mongoose')

const lfgSchema = mongoose.Schema({
    _id: String,
    lfgTime: String,
    lfgName: String,
    lfgStartTime: Date
    // {
    //     type:Date,
    //     set: d => new Date(d*1000)
    // }
})

module.exports = mongoose.model('lfg', lfgSchema)