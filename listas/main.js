console.log("está funcionando!!");
$("#prueba").html("Está funcionando jquery!!");

$('#crear-lista').click(evento => {
	var lista = $("<ul>");
	lista.append($("<li>", { text: "elemento 1" }));
	lista.append($("<li>", { text: "elemento 2" }));
	lista.appendTo('#prueba');
});