const Discord = require('discord.js')
const client = new Discord.Client()
const lfgSchema = require('./schemas/lfg-schema')

const config = require('./config.json')
const mongo = require('./mongo')

// code snippet for all embeds, not sure how many
// client.on('message', (msg) => {
//    msg.embeds.forEach((embed) => {
//
//    });
//    msg.reply("Embed sent.")
//})

client.on('message', async (msg) => {
    if (typeof msg.embeds[0] === "undefined") {
        console.log('no json obj')
    }
    else {
        const plfgStartTime = msg.embeds[0].timestamp
        const plfgName = msg.embeds[0].fields[0].value
        const plfgTime = msg.embeds[0].fields[1].value
        const plfgID = msg.embeds[0].fields[2].value
        const plfgMembers = msg.embeds.fields[3].value
        console.log(plfgName,plfgTime,plfgID,plfgStartTime)
        await mongo().then(async (mongoose) => {
            try {
                 await lfgSchema.findOneAndUpdate({
                     _id: plfgID
                 },
                 {
                    _id: plfgID,
                    lfgTime: plfgTime,
                    lfgName: plfgName,
                    lfgStartTime: plfgStartTime,
                    lfgMembers: plfgMembers
                },
                {upsert:true,
                })
            } finally 
            {mongoose.connection.close}
        })
        //attempt to set function to wait 5s to query database
        setTimeout(() => 
        await mongo().then(async (mongoose) => {
            try {
                 const result = await lfgSchema.findOne({
// need to define variables to store data
                 }, 
                 {
                     sort:{lfgStartTime:-1}})
            } finally 
// try and send channel message from here
            {mongoose.connection.close}
        })
        , 5000)
    }
})
client.on('ready', async () => {
    console.log('the client is ready')
    await mongo().then(mongoose => {
        try {
            console.log('Connected to Mongo!')
        } catch(e) {
            console.log('error, not connected')
        } finally {
            mongoose.connection.close()
        }
    })
})

client.login(config.token)