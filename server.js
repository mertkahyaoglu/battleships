var express    = require('express'),
    app        = express(),
    path       = require('path'),
    port       = process.env.PORT || 3000,
    server     = app.listen(port),
    io         = require('./lib/sockets').listen(server);

app.use(express.static(path.join(__dirname, 'public')));
app.use('/build', express.static(path.join(__dirname, 'build')));
app.use('/', require('./lib/routes').router);

console.log('---Server started at port: '+ port +"---");
