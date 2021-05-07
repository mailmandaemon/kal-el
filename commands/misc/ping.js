module.exports = {
    commands: 'ping',
    minArgs: 0,
    macArgs: 0,
<<<<<<< HEAD
    callback: (message, arguments, text) => {
        message.reply('Pong!');
=======
    callback: (message, arguments, text, client) => {
        message.reply(`My ping is ${Math.round(client.ws.ping)}`);
>>>>>>> e5d1ba4da78084c244851555e5ccf1d9075bfff1
    }
}
