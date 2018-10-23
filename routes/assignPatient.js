var express = require('express');
var router = express.Router();


router.get('/assignpatient', function(req, res, next) {
    res.locals.connection.query('select * from assignPatient', function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
  });

router.post('/new', function(req, res, next) {
    var user = req.body;
      res.locals.connection.query('update patientrecords set (patientNo,seenBy) values("'+req.body.patientNo+'","'+req.body.seenBy+'")', function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
});
module.exports = router;