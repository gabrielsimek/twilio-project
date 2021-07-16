const createResponse = (items, searchTerm, city) => {
    const messageBody = items.reduce((accumulator, item) => {
      accumulator += 
        `
        ${item.title}:
        price: ${item.price} 
        link: 
           ${item.link} \n`;
      return accumulator;
    }, `Here are your results for ${searchTerm} in ${city}: \n`);
    return messageBody;
  };
  module.exports = {
    createResponse,
  };
  