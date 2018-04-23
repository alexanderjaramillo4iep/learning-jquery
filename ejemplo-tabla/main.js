console.log('está funcionando!!');
/**
 * modificando el contenido del
 * elemento que tiene id prueba
 * */
$('#prueba').html('ahora si está funcionando jquery');

//crear elemento table desde jquery
var tabla = $('<table>');
for(var j = 0; j < 5; j++) {
	//crear elemento tr desde jquery
	var fila = $('<tr>');

	//creando 10 columnas
	for(var i = 0; i < 10; i++) {
		//crear elemento td desde jquery
		var columna = $('<td>', {text: 'tabla de prueba'});

		//agregamos la columna a la fila
		fila.append(columna);
	}
	//agregamos la fila a la tabla
	tabla.append(fila);
}
/**
 * agregamos la tabla al elemento
 * que tiene id prueba en el html
 * */
tabla.appendTo('#prueba');