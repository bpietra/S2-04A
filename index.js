var http = require('http');
var dt1 = require('./cadastro');
var dt2 = require('./login');
var dt3 = require('./paginainicial');
var dt4 = require('./agendamento');
var dt5 = require('./myasyncmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("cadastro:" + dt1.myDateTime() + "<br>" );
  res.write("login:" + dt2.myDateTime() + "<br>" );
  res.write("home:" + dt3.myDateTime() + "<br>" );

  res.end();

}).listen(5004);



