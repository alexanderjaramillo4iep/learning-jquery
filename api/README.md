# API de ejemplo para probar ajax de jquery

## nodemon tiene problemas con la recarga
El problema se presenta con xxx yyy en linux

Al recargar el servidor nodemon, dice que el puerto está ocupado

## Solución temporal
La solución temporal es matar el proceso por consola

Para ver el proceso corriendo en puerto 3000
<code>sudo fuser 3000/tcp</code>

Matar proceso utilizamos -k así:
<code>sudo -k fuser 3000/tcp</code>