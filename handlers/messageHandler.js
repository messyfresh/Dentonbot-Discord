// Primary message handler file, links to all other commands handlers

const debug = require('debug')('Dentonbot:messageHandler')
const messageHandlerHelper = require('./messageHandlerHelpers')
const settings = require('../settings.json')

function handleMessage (msg, client) {
  // Stop if prefix isn't there or bot isn't mentioned first
  try {
    let firstMention = messageHandlerHelper.getFirstMention(msg)
    let msgPrefix = msg.content.startsWith(settings.msgPrefix)
    if (firstMention) {
      debug('mention found, continuing')
    } else if (!firstMention && msgPrefix) {
      debug('"!ab" prefix found, continuing')
    }
  } catch (err) {
    debug(err)
  }
}

module.exports = handleMessage
