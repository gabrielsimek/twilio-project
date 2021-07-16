
const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const fetch = require('node-fetch');
const { urlencoded } = require('body-parser');
const { createResponse } = require('./createResponse.js');
const { getSearchParams } = require('./getSearchParams.js');
const { checkValidMessage } = require('./checkValidMessage.js')

const app = express();
app.use(urlencoded({ extended: false }));
const PORT = process.env.PORT || 80;
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

      const items = await response.json().slice(0, 5);
      message = createResponse(items, 'chair', 'portland');
      console.log(message);

      
    } else {
      message = 'Please respond with "Looking for a <item> in <your city name> " to receive a lit of local listings '
    }


    

    
    twiml.message(message);
    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
  } 
  catch (error) {
    console.error(error);
  }
 
});

http.createServer(app).listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
