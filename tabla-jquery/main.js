$('#crear-tabla').click(evento => {
    // creamos el elemento <table>
    var tabla = $('<table>');
    // creamos el elemento <tr>
    var fila = $('<tr>');
    // pegamos a la fila un elemento <td> con texto columna x
    fila.append($('<td>', {text: 'columna 1'}));
    fila.append($('<td>', {text: 'columna 2'}));
    fila.append($('<td>', {text: 'columna 3'}));
    // pegamos a la tabla la fila
    tabla.append(fila);
    
    // creamos el elemento <tr>
    fila = $('<tr>');
    // pegamos a la fila un elemento <td> con texto columna x
    fila.append($('<td>', {text: 'columna 1'}));
    fila.append($('<td>', {text: 'columna 2'}));
    fila.append($('<td>', {text: 'columna 3'}));
    // pegamos a la tabla la fila
    tabla.append(fila);
    
    // creamos el elemento <tr>
    fila = $('<tr>');
    // pegamos a la fila un elemento <td> con texto columna x
    fila.append($('<td>', {text: 'columna 1'}));
    fila.append($('<td>', {text: 'columna 2'}));
    fila.append($('<td>', {text: 'columna 3'}));
    // pegamos a la tabla la fila
    tabla.append(fila);
    
    // creamos el elemento <tr>
    fila = $('<tr>');
    // pegamos a la fila un elemento <td> con texto columna x
    fila.append($('<td>', {text: 'columna 1'}));
    fila.append($('<td>', {text: 'columna 2'}));
    fila.append($('<td>', {text: 'columna 3'}));
    // pegamos a la tabla la fila
    tabla.append(fila);
    
    // creamos el elemento <tr>
    fila = $('<tr>');
    // pegamos a la fila un elemento <td> con texto columna x
    fila.append($('<td>', {text: 'columna 1'}));
    fila.append($('<td>', {text: 'columna 2'}));
    fila.append($('<td>', {text: 'columna 3'}));
    // pegamos a la tabla la fila
    tabla.append(fila);

    // modificamos el html del div con id="tabla"
    $('#tabla').html(tabla);
});