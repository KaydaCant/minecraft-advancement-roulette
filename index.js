import http from 'http';
import express from 'express';
import path from 'path';
import errorhandler from 'errorhandler'
import { getList } from './scripts/request_advancement.js';

const __dirname = path.resolve();

// make express website
const app = express();

// ...
app.use(errorhandler({ dumpExceptions: true, showStack: true })); 
app.use(express.json());
app.use(express.static("express"));

app.use('/scripts', express.static(__dirname + '/scripts'));
app.use('/json', express.static(__dirname + '/json'));

// make / return indx.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/web/index.html');
});

app.get('/list', (req, res) => {
    var seed = req.query.seed;
    var list = getList(seed);

    res.send(list);
});

const server = http.createServer(app);
const port = 3000;
server.listen(port)

console.debug('Server listening on port ' + port);