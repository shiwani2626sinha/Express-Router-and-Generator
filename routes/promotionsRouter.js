const express =require('express');
const bodyParser=require('body-parser');

const promotionsRouter= express.Router();

promotionsRouter.use(bodyParser.json());

promotionsRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('will send all the promotions to you');
})
.post((req, res, next) => {
    res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete((req, res, next) => {
    res.end('Deleting all promotions');
});

promotionsRouter.route('/:promoId')
.all((req,res,next)=>{
    res.statusCode =200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get( (req,res,next)=>{
    res.end('Will send the details of promotion: ' + req.params.promoId+ ' to you!');
})

.put((req,res,next)=>{
 res.write('Updating the promotion: '+req.params.promoId + '\n');
 res.end('Will update the promotion: '+ req.body.name + ' with details: '+ req.body.description);
})

.post((req,res,next)=>{
    res.statusCode= 403;
    res.end('POST operation not supported on /promotion/'+req.params.promoId);
})
.delete((req,res,next)=>{
    res.end('Deleting the promoId:'+req.params.promoId);
});

module.exports = promotionsRouter;