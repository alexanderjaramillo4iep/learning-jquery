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

$("#boton-texto").click(evento => {
	var texto1 = $("#input-texto1").val();
	var texto2 = $("#input-texto2").val();

	var num1 = parseInt(texto1);
	var num2 = parseInt(texto2);

	$('#prueba').html(num1 + num2);
});