// Helper commands for handling messages

const debug = require('debug')('Dentonbot:messageHandlerHelper')

// Gets first mention from a message and return it
function getFirstMention (msg) {
  let mention = msg.mentions.users.array()
  return mention[0]
}

// Get all mentions from a message and return them
function getMentions (msg) {
  return msg.mentions.users.array()
}

// Split msg.contents into an array and store as a property of msg
function setMsgArray (msg) {
  // Split msg into array
  try {
    msg.msgArray = msg.content.split(' ')
    return msg
  } catch (err) {
    debug(err)
  }
}

module.exports.getFirstMention = getFirstMention
module.exports.getMentions = getMentions
module.exports.setMsgArray = setMsgArray
