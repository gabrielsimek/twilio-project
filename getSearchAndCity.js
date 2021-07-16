const getSearchAndCity = (message) => {
    const searchTerm = message.split(' ').slice(3, 4).join('')
    const city = message.split(' ').slice(5, 6 ).join('')
    return [searchTerm, city]
}
//I want a couch in portland
// const search = getSearchAndCity('I want a couch in portland')
module.exports = {
    getSearchAndCity
}
