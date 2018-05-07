var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res
    .status(200)
    .send({
      name: "Productos",
      data: [
        { Producto: "pantalon blanco", Categoría: "ropa", Precio: "$60" },
        { Producto: "camisa negra", Categoría: "ropa", Precio: "$40" },
        { Producto: "zapatos rojos", Categoría: "zapatería", Precio: "$60" },
        { Producto: "pantalon blanco", Categoría: "ropa", Precio: "$60" },
        { Producto: "camisa negra", Categoría: "ropa", Precio: "$40" },
        { Producto: "zapatos rojos", Categoría: "zapatería", Precio: "$60" },
        { Producto: "pantalon blanco", Categoría: "ropa", Precio: "$60" },
        { Producto: "camisa negra", Categoría: "ropa", Precio: "$40" },
        { Producto: "zapatos rojos", Categoría: "zapatería", Precio: "$60" }
      ]
    });
});

module.exports = router;
