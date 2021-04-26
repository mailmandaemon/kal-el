const Discord = require('discord.js')
const client = new Discord.Client()
const lfgSchema = require('./schemas/lfg-schema')

const config = require('./config.json')
const mongo = require('./mongo')

//client.on('message', (msg) => {
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
                    lfgStartTime: plfgStartTime
                },
                {upsert:true,
                })
            } finally 
            {mongoose.connection.close}
        })
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