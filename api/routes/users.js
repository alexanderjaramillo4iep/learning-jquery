var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res
    .status(200)
    .send({
      name: "Usuarios",
      data: [
        { Usuario: "Pepito", Email: "Pepito@prueba.com", Documento: "123456" },
        { Usuario: "Rogancio", Email: "Rogancio@prueba.com", Documento: "129456" },
        { Usuario: "Cheroky", Email: "Cheroky@prueba.com", Documento: "123856" }
      ]
    });
});

module.exports = router;
