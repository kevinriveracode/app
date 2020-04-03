var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.get('/', function(req, res, next) {
  console.log('New Connection');
  res.render('index', { title: 'Express' });
});

router.post('/send-message', function(req, res, next) {
  console.log('Email Send');
  let transporter = nodemailer.createTransport({
    service:'Gmail',
    auth: {
      user: 'dev360.vlc@gmail.com',
      pass: '23324123Ff*'
    }
  });
  let options = {
    from: req.body.email,
    to: 'dev360.vlc@gmail.com',
    subject:req.body.about,
    text:req.body.name+':\n'+req.body.message+'\n'+req.body.email
  };
  transporter.sendMail(options,(error,info)=>{
    if(error){
      console.log(error);
      return;
    }else{
      res.status(200).jsonp(req.body);
    }
  });
});

module.exports = router;
