var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200).send({
    mensaje: 'hola',
    datos: [
      {usuario: 'trului', email: 'trului@prueba.com'},
      {usuario: 'regnaroki', email: 'regnarok@prueba.com'},
      {usuario: 'ltrudi', email: 'ltrudi@prueba.com'},
    ]
  });
});

module.exports = router;
