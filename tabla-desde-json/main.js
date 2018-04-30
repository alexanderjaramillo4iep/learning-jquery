console.log("Jquery está funcionando!!");
$("#prueba").html("Está funcionando jquery!!");

const jsonPrueba = {
  data: [
    { nombre: "andrea", apellido: "lopez" },
    { nombre: "laura", apellido: "valencia" },
    { nombre: "andres", apellido: "loaiza" }
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
  $.each(jsonPrueba.data[0], (property, value) => {
    tr.append($("<th>", { text: property }));
  });
  table.append(tr);

  /**
   * Cuerpo de la tabla
   */
  $.each(jsonPrueba.data, (index, item) => {
    tr = $("<tr>");
    $.each(item, (property, value) => {
      tr.append($("<td>", { text: value }));
    });
    table.append(tr);
  });
  $("#tabla").html(table);
});
