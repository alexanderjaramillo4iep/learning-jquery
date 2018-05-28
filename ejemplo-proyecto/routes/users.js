var express = require("express");
var router = express.Router();
var path = require('path');

/* GET html users listing. */
router.get("/", function(req, res, next) {
  res.sendFile(path.join(__dirname, '..', 'private', 'users.html'));
});

/* GET json users. */
router.get("/get", function (req, res, next) {
	res.status(200).send({ name: 'Usuarios', data: [
		{ Usuario: 'Prueba 1', Contraseña: '****123' },
		{ Usuario: 'Prueba 2', Contraseña: '****231' },
		{ Usuario: 'Prueba 3', Contraseña: '****312' }
	] });
});

/* GET a user. */
router.get("/get/:id", function(req, res, next) {
  const userId = req.params.id;
  res.status(200).send({ response: `are you request user ${userId}?` });
});

/* SAVE a user. */
router.post("/save", function(req, res, next) {
  var bodyParams = req.body;
  res.status(200).send({ response: bodyParams });
});

module.exports = router;
