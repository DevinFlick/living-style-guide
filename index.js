var express       = require('express'),
    server        = express(),
    bodyParser    = require('body-parser'),
    port = process.env.PORT || 8080;

server.use(express.static(__dirname + '/dist'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:true}));

server.get('/', function (request, response){
  response.sendfile('dist/index.html', {root:__dirname});
});

server.listen(port, function (){
  console.log('Now listening on port ' + port);
});
