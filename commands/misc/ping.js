module.exports = {
    commands: 'ping',
    minArgs: 0,
    macArgs: 0,
    callback: (message, arguments, text, client) => {
        message.reply(`My ping is ${Math.round(client.ws.ping)}`);
    }
}
