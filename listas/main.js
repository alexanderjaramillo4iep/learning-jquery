console.log("está funcionando!!");
$("#prueba").html("Está funcionando jquery!!");

$('#crear-lista').click(evento => {
	var elemento = $('<li>', {text: "elemento 1"});
	var lista = $("<ul>");
	lista.append(elemento);
	lista.appendTo('#prueba');
});