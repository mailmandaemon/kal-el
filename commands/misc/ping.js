module.exports = {
    commands: 'ping',
    minArgs: 0,
    macArgs: 0,
    callback: (message, arguments, text) => {
        message.reply('Pong!');
    },
}
