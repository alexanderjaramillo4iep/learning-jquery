var lista = {
  datos: [
    { nombre: "Alex", apellido: "Jaramillo" },
    { nombre: "Vanessa", apellido: "Borja" },
    { nombre: "Cristian", apellido: "Florez" },
    { nombre: "Adrian", apellido: "Arboleda" },
    { nombre: "Pepito", apellido: "Perez" }
  ]
};

function obtenerDatos(funRta) {
  $.ajax({ url: "http://172.29.63.51:3000/users" }).done(lista => {
    console.log(lista);
    funRta(lista);
  });
}

$("#crear-tabla").click(evento => {
  obtenerDatos(lista => {
    // creamos el elemento <table>
	var tabla = $("<table>");
	tabla.addClass("table");
	tabla.addClass("table-dark");
    tabla[0].createCaption().innerHTML = lista.nombre_tabla;
    // creamos el elemento <tr>
    var fila = $("<tr>");
    // pegamos a la fila un elemento <td> con texto columna x
    fila.append($("<th>", { text: "Producto" }));
    fila.append($("<th>", { text: "Categoría" }));
    fila.append($("<th>", { text: "Precio" }));
    // pegamos a la tabla la fila
    tabla.append(fila);

    $.each(lista.datos, function(i, dato) {
      // creamos el elemento <tr>
      fila = $("<tr>");
      // pegamos a la fila un elemento <td> con texto columna x
      fila.append($("<td>", { text: dato.producto }));
      fila.append($("<td>", { text: dato.categoria }));
      fila.append($("<td>", { text: dato.precio }));
      // pegamos a la tabla la fila
      tabla.append(fila);
    });

    // modificamos el html del div con id="tabla"
    $("#tabla").html(tabla);
  });
});
