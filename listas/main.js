console.log("está funcionando!!");
$("#prueba").html("Está funcionando jquery!!");

$('#crear-lista').click(evento => {
	var lista = $("<ul>");
	for(var i = 1; i < 101; i++) {
		lista.append($("<li>", { text: "elemento " + i }));
	}
	lista.appendTo('#prueba');
});

$("#nuevo-elemento").click(evento => {
	var lista = $("#lista-tareas");
	var texto = $("#nueva-tarea").val();
	lista.append($('<li>', {text: texto}));
});