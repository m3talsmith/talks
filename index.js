var http    = require('http'),
    path    = require('path'),
    express = require('express'),
    logger  = require('morgan'),
    socket  = require('socket.io');

var app = express();
app
  .use(logger())
  .use(express.static(path.join(__dirname, 'talks')))
  .use(express.static(path.join(__dirname, 'public')))
  .use(function (request, response) {
    response.redirect('/404.html');
  });

var server = http.createServer(app);
server.listen(process.env.PORT || 3000);

var io = socket.listen(server);
