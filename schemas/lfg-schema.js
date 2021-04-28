const mongoose = require('mongoose')

const lfgSchema = mongoose.Schema({
    _id: String,
    lfgTime: String,
    lfgName: String,
    lfgStartTime: Date,
    lfgMembers:String
})

module.exports = mongoose.model('lfg', lfgSchema)