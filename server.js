
const http = require('http');
const app = require('./app.js')
const PORT = process.env.PORT || 80;


http.createServer(app).listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
