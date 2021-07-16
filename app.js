const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const fetch = require('node-fetch');
const { urlencoded } = require('body-parser');
const { createResponse } = require('./utils/createResponse.js');
const { getSearchParams } = require('./utils/getSearchParams.js');
const { checkValidMessage } = require('./utils/checkValidMessage.js')

const app = express();
app.use(urlencoded({ extended: false }));

const URL = 'https://project-scrape.herokuapp.com/api/v1/results';

app.post('/sms', async (req, res) => {
  let message;
  const params = getSearchParams(req.body.Body);
  const twiml = new MessagingResponse();

  try {
    if(checkValidMessage(req.body.Body)){
      const response =  await fetch(`${URL}/${params[0]}/${params[1]}`, {
        method: 'GET'
      });

      if(!response.status === (200 || 304)){
        console.log('hello')
        message = 'Please enter a valid search term or city'
        twiml.message(message);
        res.writeHead(200, { 'Content-Type': 'text/xml' });
        res.end(twiml.toString());
       
      } else {
        
        const items = await response.json();
        console.log(items)
        message = createResponse(items.slice(0, 5), 'chair', 'portland');
        twiml.message(message);
        res.writeHead(200, { 'Content-Type': 'text/xml' });
        res.end(twiml.toString());
      }

     
     

      
    } else {
      message = 'Please respond with "Looking for a <item> in <your city name> " to receive a lit of local listings '
      console.log(message);
      twiml.message(message);
      res.writeHead(200, { 'Content-Type': 'text/xml' });
      res.end(twiml.toString());
    }


    

   
  } 
  catch (error) {
    console.error(error);
  }
 
});

module.exports = {
    app
}