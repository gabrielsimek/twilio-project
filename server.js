const http = require("http");
const express = require("express");
const MessagingResponse = require("twilio").twiml.MessagingResponse;
const fetch = require("node-fetch");
const { urlencoded } = require("body-parser");
const { createResponse } = require("./utils/createResponse.js");
const { getSearchParams } = require("./utils/getSearchParams.js");
const { checkValidMessage } = require("./utils/checkValidMessage.js");

const app = express();
app.use(urlencoded({extended: false,}));
//double check this
const URL = "https://project-scrape.herokuapp.com/api/v1/results";

app.post("/sms", async (req, res) => {
  let message;
  const [searchTerm, city] = getSearchParams(req.body.Body);
  console.log(searchTerm, city)
  const twiml = new MessagingResponse();

  try {
    if (checkValidMessage(req.body.Body)) {
      const response = await fetch(`${URL}/${searchTerm}/${city}`, {
        method: "GET",
      });

      if (!response.status === (200 || 304)) {
        message = "Please enter a valid search term or city";
        twiml.message(message);
      } else {
        const items = await response.json();
        const 
        message = createResponse(items.slice(0, 5), searchTerm, city);
        twiml.message(message);
      }
    } else {
      message = 'Please respond with "Looking for a <item> in <your city name> " to receive a lit of local listings ';
      twiml.message(message);
    }
    res.writeHead(200, {
      "Content-Type": "text/xml",
    });
    res.end(twiml.toString());
  } catch (error) {
    console.error(error);
  }
});

const PORT = process.env.PORT || 80;
http.createServer(app).listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
