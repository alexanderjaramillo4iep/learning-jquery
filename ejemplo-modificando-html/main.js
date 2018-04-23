console.log('está funcionando!!');
/**
 * modificando el contenido del
 * elemento que tiene id prueba
 * */
$('#prueba').html('ahora si está funcionando jquery');
$('#boton-prueba').click(evento => {
	alert('hiciste click!!');
	var parrafo = $('<p>', {text: "esto es un párrafo creado desde jquery"});
	parrafo.appendTo("#prueba");
	var miNombre = $('<p>', {text: "Alexander Jaramillo"});
	miNombre.appendTo('#prueba');
});