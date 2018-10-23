var express = require('express');
var router = express.Router();


router.get('/patientClarking', function(req, res, next) {
  res.locals.connection.query('select * from patientrecords', function (error, results, fields) {
      if(error) throw error;
      res.send(JSON.stringify(results));
  });
});


router.post('/new1', function(req, res, next) {
  var user = req.body;
    res.locals.connection.query('insert into diagnosis(weight,height,headcircumference,muac) values("'+req.body.weight+'","'+req.body.height+'","'+req.body.headcirCumference+'","'+req.body.muac+'")', function (error, results, fields) {
      if(error) throw error;
      res.send(JSON.stringify(results));
  });
});


router.post('/new2', function(req, res, next) {
  var user = req.body;
    res.locals.connection.query('insert into diagnosis(temprature,bloodpressure,respiratory,pulse) values("'+req.body.temprature+'","'+req.body.bloodpressure+'","'+req.body.respiratory+'","'+req.body.pulse+'")', function (error, results, fields) {
      if(error) throw error;
      res.send(JSON.stringify(results));
  });
});

router.post('/new3', function(req, res, next) {
  var user = req.body;
    res.locals.connection.query('insert into diagnosis(nutrition,immunization,development,pbnh) values("'+req.body.nutrition+'","'+req.body.immunization+'","'+req.body.development+'","'+req.body.pbnh+'")', function (error, results, fields) {
      if(error) throw error;
      res.send(JSON.stringify(results));
  });
});

router.post('/new4', function(req, res, next) {
  var user = req.body;
    res.locals.connection.query('insert into diagnosis(generalexamination,cvs,respiratory,cns,mss,abdomen) values("'+req.body.generalexamination+'","'+req.body.cvs+'","'+req.body.respiratory+'","'+req.body.cns+'","'+req.body.mss+'","'+req.body.abdomen+'")', function (error, results, fields) {
      if(error) throw error;
      res.send(JSON.stringify(results));
  });
});

router.post('/new5', function(req, res, next) {
  var user = req.body;
    res.locals.connection.query('insert into diagnosis(problem1,problem2,problem3,problem4,problem5) values("'+req.body.problem1+'","'+req.body.problem2+'","'+req.body.problem3+'","'+req.body.problem4+'","'+req.bodyproblem5+'")', function (error, results, fields) {
      if(error) throw error;
      res.send(JSON.stringify(results));
  });
});

router.post('/new6', function(req, res, next) {
  var user = req.body;
    res.locals.connection.query('insert into diagnosis(investigation,sample,labname) values("'+req.body.investigation+'","'+req.body.sample+'","'+req.body.labname+'")', function (error, results, fields) {
      if(error) throw error;
      res.send(JSON.stringify(results));
  });
});

router.post('/new7', function(req, res, next) {
  var user = req.body;
    res.locals.connection.query('insert into diagnosis(pdiagnosis1,pdiagnosis2,pdiagnosis3,pdiagnosis4,pdiagnosis5) values("'+req.body.pdiagnosis1+'","'+req.body.pdiagnosis2+'","'+req.body.pdiagnosis3+'","'+req.body.pdiagnosis4+'","'+req.body.pdiagnosis5+'")', function (error, results, fields) {
      if(error) throw error;
      res.send(JSON.stringify(results));
  });
});

router.post('/new8', function(req, res, next) {
  var user = req.body;
    res.locals.connection.query('insert into diagnosis(AddedCare) values("'+req.body.AddedCare+'")', function (error, results, fields) {
      if(error) throw error;
      res.send(JSON.stringify(results));
  });
});

router.post('/new9', function(req, res, next) {
  var user = req.body;
    res.locals.connection.query('insert into diagnosis(drugs,price,dosage) values("'+req.body.drugs+'","'+req.body.price+'","'+req.body.dosage+'")', function (error, results, fields) {
      if(error) throw error;
      res.send(JSON.stringify(results));
  });
});

router.post('/new10', function(req, res, next) {
  var user = req.body;
    res.locals.connection.query('insert into diagnosis(partToDress,dresswith) values("'+req.body.PartToDress+'","'+req.body.dresswith+'")', function (error, results, fields) {
      if(error) throw error;
      res.send(JSON.stringify(results));
  });
});
router.post('/new11', function(req, res, next) {
  var user = req.body;
    res.locals.connection.query('insert into diagnosis(observationrequest) values("'+req.body.observationrequest+'")', function (error, results, fields) {
      if(error) throw error;
      res.send(JSON.stringify(results));
  });
});


// router.post('/new4', function(req, res, next) {
//   var user = req.body;
//     res.locals.connection.query('insert into diagnosis(weight,height,headcircumference,muac,temprature,bloodpressure,respiratory,pulse,nutrition,immunization,development,pbnh) values(,"'+req.body.temprature+'","'+req.body.bloodpressure+'","'+req.body.respiratory+'","'+req.body.pulse+'","'+req.body.nutrition+'","'+req.body.immunization+'","'+req.body.development+'","'+req.body.pbnh+'")', function (error, results, fields) {
//       if(error) throw error;
//       res.send(JSON.stringify(results));
//   });
// });

module.exports = router;
