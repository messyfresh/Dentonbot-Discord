// Dependencies
const Discord = require('discord.js')
const debug = require('debug')('Dentonbot:app')
const guildHandler = require('./handlers/guildHandler')
const messageHandler = require('./handlers/messageHandler')

// Config
const conf = require('./conf/conf.json')

const client = new Discord.Client()

client.on('ready', () => {
  debug('Connected to ' + client.guilds.array())
  guildHandler(client)
})

client.on('message', msg => {
  // Pass message to handler... to be handled...
  messageHandler(msg)
})

client.on('disconnect', () => {
  process.exit()
})

client.login(conf.discord.bot.token)
  .then((result) => {
    debug('Login Result: ', result)
  })
  .catch(error => {
    debug(error)
  })
