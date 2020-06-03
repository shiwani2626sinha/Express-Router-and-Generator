//setting a server using express
/*
const express = require('express');
const http = require('http');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use((req,res, next)=>{
     console.log(req.headers);
     res.statusCode = 200;
     res. setHeader('Content-Type', 'text/html');
     res.end('<html><body><h1>This is an express Server</h1></body></html>'); 
});

const server = http.createServer(app);

server.listen(port, hostname, () =>{
    console.log(`Server running at http://${hostname}:${port}/`);
});*/

//setting a server using express but also serving up the static content

/*const express = require('express');
const http = require('http');
const morgan = require('morgan');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));  // it will log sufficient info
app.use(express.static(__dirname+ '/public'))  //folder from which static files will be served up

app.use((req,res, next)=>{
    
     res.statusCode = 200;
     res. setHeader('Content-Type', 'text/html');
     res.end('<html><body><h1>This is an express Server</h1></body></html>'); 
});

const server = http.createServer(app);

server.listen(port, hostname, () =>{
    console.log(`Server running at http://${hostname}:${port}/`);
});*/

//express  developing rest apis for endpoints

/*const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');


const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));  // it will log sufficient info
app.use(express.static(__dirname+ '/public'))  //folder from which static files will be served up
app.use(bodyParser.json());

app.all('/dishes' , (req,res,next) => { 
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');
    next();
});

app.get('/dishes', (req,res,next)=>{
    res.end('Will send all the dishes to you!');
});

app.post('/dishes',(req,res,next)=>{
    res.end('Will add the dish :'+ req.body.name +
     ' with details: '+ req.body.description);
});

app.put('/dishes',(req,res,next)=>{
    res.statusCode= 403;
    res.end('PUT operation not supported on /dishes');
});
app.delete('/dishes', (req,res,next)=>{
    res.end('Deleting all the dishes!');
});


app.get('/dishes/:dishId', (req,res,next)=>{
    res.end('Will send all the dish: ' + req.params.dishId+ ' to you!');
});

app.put('/dishes/:dishId',(req,res,next)=>{
 res.write('Updating the dish: '+req.params.dishId + '\n');
 res.end('Will update the dish: '+ req.body.name + ' with details: '+ req.body.description);
});

app.post('//dishes/:dishId',(req,res,next)=>{
    res.statusCode= 403;
    res.end('POST operation not supported on /dishes');
});
app.delete('/dishes/:dishId', (req,res,next)=>{
    res.end('Deleting the dish:'+req.params.dishId);
});


app.use((req,res, next)=>{
    
     res.statusCode = 200;
     res. setHeader('Content-Type', 'text/html');
     res.end('<html><body><h1>This is an express Server</h1></body></html>'); 
});

const server = http.createServer(app);

server.listen(port, hostname, () =>{
    console.log(`Server running at http://${hostname}:${port}/`);
});*/

//Express router design code

const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const dishRouter = require('./routes/dishRouter');
const promotionsRouter=require('./routes/promotionsRouter');
const leadersRouter=require('./routes/leadersRouter');
const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));  // it will log sufficient info
app.use(express.static(__dirname+ '/public'))  //folder from which static files will be served up
app.use(bodyParser.json());
app.use('/dishes', dishRouter);
app.use('/dishes/:dishId',dishRouter);
app.use('/promotions',promotionsRouter);
app.use('/prommotions/:promoId',promotionsRouter);
app.use('/leaders',leadersRouter);
app.use('/leaders/:leaderId',leadersRouter);



app.use((req,res, next)=>{
    
     res.statusCode = 200;
     res. setHeader('Content-Type', 'text/html');
     res.end('<html><body><h1>This is an express Server</h1></body></html>'); 
});

const server = http.createServer(app);

server.listen(port, hostname, () =>{
    console.log(`Server running at http://${hostname}:${port}/`);
});