var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/usersList', function(req, res, next) {
  res.locals.connection.query('select * from members', function (error, results, fields) {
      if(error) throw error;
      res.send(JSON.stringify(results));
  });
});


router.post('/new', function(req, res, next) {
  var user = req.body;
    res.locals.connection.query('insert into members(name,email) values("'+req.body.name+'","'+req.body.email+'")', function (error, results, fields) {
      if(error) throw error;
      res.send(JSON.stringify(results));
  });
});

router.get('/edit', function(req, res, next) {
  res.locals.connection.query('update members set name = "'+req.body.name+'", email = "'+req.body.email+'" where id = "'+req.body.id+'"', function (error, results, fields) {
      if(error) throw error;
      res.send(JSON.stringify(results));
  });
});

router.get('/delete', function(req, res, next) {
  var user = req.body;
  res.locals.connection.query('DELETE from members where name = '+req.body.name+'', function (error, results, fields) {
      if(error) throw error;
      res.send(JSON.stringify(results));
  });
});

module.exports = router;
