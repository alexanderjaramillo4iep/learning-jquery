var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
	res
		.status(200)
		.send({
			name: "Clientes",
			data: [
				{ Nombre: "Pepito Perez", Email: "Pepito@prueba.com", Teléfono: "123 4561" },
				{ Nombre: "Rogancio Sabroso", Email: "Rogancio@prueba.com", Teléfono: "129 4566" },
				{ Nombre: "Cheroky Lopez", Email: "Cheroky@prueba.com", Teléfono: "123 8562" }
			]
		});
});

module.exports = router;
