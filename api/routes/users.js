var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res
    .status(200)
    .send({
      nombre_tabla: "Datos de productos",
      datos: [
        { producto: "pantalon blanco", categoria: "ropa", precio: "$60" },
        { producto: "camisa negra", categoria: "ropa", precio: "$40" },
        { producto: "zapatos rojos", categoria: "zapatería", precio: "$60" },
        { producto: "pantalon blanco", categoria: "ropa", precio: "$60" },
        { producto: "camisa negra", categoria: "ropa", precio: "$40" },
        { producto: "zapatos rojos", categoria: "zapatería", precio: "$60" },
        { producto: "pantalon blanco", categoria: "ropa", precio: "$60" },
        { producto: "camisa negra", categoria: "ropa", precio: "$40" },
        { producto: "zapatos rojos", categoria: "zapatería", precio: "$60" }
      ]
    });
});

module.exports = router;
