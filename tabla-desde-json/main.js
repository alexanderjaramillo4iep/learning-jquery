console.log("Jquery está funcionando!!");
$("#prueba").html("Está funcionando jquery!!");

/**
 * Definición de los datos que tendrá la tabla
 */
const jsonPrueba = {
  data: [
    { nombre: "adrian", apellido: "arboleda" },
    { nombre: "daniela", apellido: "zapata" },
    { nombre: "ana", apellido: "ruiz" }
  ]
};

$("#crear-tabla").click(evento => {
  /**
   * Creamos la tabla
   */
  var table = $("<table>");
  // Definimos el título o leyenda de la tabla
  table[0].createCaption().innerHTML = "tabla creada desde un json en jquery";

  /**
   * Cabecera de la tabla
   */
  var tr = $("<tr>");
  // para cada propiedad del primer dato
  $.each(jsonPrueba.data[0], (property, value) => {
	  // pegamos cada columna a la fila de la cabecera
    tr.append($("<th>", { text: property }));
  });
  // pegamos la fila (cabecera) a la tabla
  table.append(tr);

  /**
   * Cuerpo de la tabla (se construye con cada elemento dentro de data)
   */
  $.each(jsonPrueba.data, (index, item) => {
    tr = $("<tr>");
    // para cada propiedad, valor; del elemento actual (el item)
    $.each(item, (property, value) => {
		// pegamos cada propiedad como columna
      tr.append($("<td>", { text: value }));
	});
	// pegamos cada fila en la tabla
    table.append(tr);
  });
  /**
   * Decimos que el nuevo html del elemento con id="tabla"
   * será la tabla que acabamos de crear
   */
  $("#tabla").html(table);
});
