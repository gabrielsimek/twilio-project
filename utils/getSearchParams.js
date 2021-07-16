const getSearchParams = (message) => {
    const searchTerm = message.split(' ').slice(3, 4).join('')
    const city = message.split(' ').slice(5, 6 ).join('')
    return [searchTerm, city]
}

module.exports = {
    getSearchParams
}
