const checkValidMessage = (message) => {
    const splitMessage = message.split(' ')
    if(splitMessage.slice(0, 3).join(' ').toLowerCase() === 'looking for a' && splitMessage[4].toLowerCase() === 'in') return true
    return false
}

module.exports = {
    checkValidMessage
}
