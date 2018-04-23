console.log("está funcionando!!");
$("#prueba").html("Está funcionando jquery!!");

$('#crear-lista').click(evento => {
	var lista = $("<ul>");
	var elemento = $('<li>', {text: "elemento 1"});
	lista.append(elemento);
	lista.appendTo('#prueba');
});