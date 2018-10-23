var express = require('express');
var router = express.Router();


//list patient records
router.get('/patientlist', function(req, res, next) {
    res.locals.connection.query('select * from patientrecords', function (error, results, fields) {
      if(error) throw error;
        res.send(JSON.stringify(results));
    });
  });

  router.get('/patientClarking', function(req, res, next) {
    res.locals.connection.query('select * from patientrecords where id=1 ', function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
  });

  router.get('/doctor', function(req, res, next) {
    res.locals.connection.query('select * from patientrecords where assigned_to = "Dr. Saada" ', function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
  });
  
  
  router.post('/new', function(req, res, next) {
    var user = req.body;
      res.locals.connection.query('insert into patientrecords(id,firstname,surname,gender,age,maritalstatus,DOB,tribe,religion, phoneNo,email,nationality,state,lga,occupation,address,kinName,kinRelationship,kinPhone,kinEmail,kinoccupation,kinAddress) values("'+req.body.id+'","'+req.body.firstname+'","'+req.body.surname+'","'+req.body.gender+'","'+req.body.age+'", "'+req.body.maritalstatus+'", "'+req.body.DOB+'", "'+req.body.tribe+'","'+req.body.religion+'" ,"'+req.body.phoneNo+'", "'+req.body.email+'", "'+req.body.nationality+'", "'+req.body.state+'","'+req.body.lga+'","'+req.body.occupation+'", "'+req.body.address+'", "'+req.body.kinName+'","'+req.body.kinRelationship+'","'+req.body.kinPhone+'","'+req.body.kinEmail+'","'+req.body.kinoccupation+'","'+req.body.kinAddress+'" )', function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
  });

  router.post('/upload', function(req, res, next) {
    var user = req.body;
      res.locals.connection.query('insert into patientrecords(passport) values("'+req.body.fd+'")', function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
  });

  // search for patient via username and first name
  router.get('/', function(req, res){
    var patientID = req.param('id');
    var patientFirstName = req.param('firstname');
    var patientSurname = req.param('surname');
    res.send(patientID + '' + '' )
  })

  router.post('/edit', function(req, res, next) {
    var user = req.body;
    res.locals.connection.query('update patientrecords set  firstname = "'+req.body.firstname+'",surname = "'+req.body.surname+'" where id = "'+req.body.id+'"', 
    function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
});


  router.post('/delete', function(req, res, next) {
    var user = req.body;
    res.locals.connection.query('delete from patientrecords where id= "'+req.body.id+'"', function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
      
      });
});

router.post('/assign', function(req, res, next) {
  var user = req.body;
  res.locals.connection.query('update patientrecords set  assigned_to = "'+req.body.assigned_to+'", date_assigned = "'+ req.body.date_assigned+'" where id = "'+req.body.id+'"', 
  function (error, results, fields) {
      if(error) throw error;
      res.send(JSON.stringify(results));
  });
});


  module.exports = router;
