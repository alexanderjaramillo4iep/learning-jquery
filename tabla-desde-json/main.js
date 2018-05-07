var apiPath = "http://localhost:3000";

/**
 * Definición de los datos que tendrá la tabla
 */
var getData = (responseFunction) =>
  $.ajax({ url: `${apiPath}/users` }).done(response => {
    console.log(response);
    responseFunction(response);
  });

var createTable = () => 
  getData(datos => {
    /**
     * Creamos la tabla
     */
	var table = $("<table>");
	table.addClass('table');
    // Definimos el título o leyenda de la tabla
    table[0].createCaption().innerHTML = datos.name;

    /**
     * Cabecera de la tabla
     */
    var tr = $("<tr>");
    // para cada propiedad del primer dato
    $.each(datos.data[0], (property, value) => {
      // pegamos cada columna a la fila de la cabecera
      tr.append($("<th>", { text: property }));
    });
    // pegamos la fila (cabecera) a la tabla
    table.append(tr);

    /**
     * Cuerpo de la tabla (se construye con cada elemento dentro de data)
     */
    $.each(datos.data, (index, item) => {
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
setTimeout(() => {
	createTable();
}, 1000);
