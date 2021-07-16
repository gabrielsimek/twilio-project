
const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const fetch = require('node-fetch')
const { urlencoded } = require('body-parser');
const { createResponse } = require('./createResponse.js')
const { getSearchParams } = require('./getSearchParams.js')


const app = express();
app.use(urlencoded({ extended: false }));

const URL = 'https://project-scrape.herokuapp.com/api/v1/results';

app.post('/sms', async (req, res) => {
  
  const params = getSearchAndCity(req.body.Body)
  const twiml = new MessagingResponse();
 
  const response =  await fetch(`${URL}/${params[0]}/${params[1]}`, {
     method: 'GET'
})

const items = await response.json()
const slicedItems = items.slice(0, 3)
const message = createResponse(slicedItems, 'chair', 'portland')
console.log(message)

  twiml.message(message);

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

http.createServer(app).listen(80, () => {
  console.log('Express server listening on port 80');
});