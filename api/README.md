# API de ejemplo para probar ajax de jquery

## nodemon tiene problemas con la recarga
El problema se presenta en linux con
node v9.4.0
npm v5.8.0
nodemon v^1.17.4

Al recargar el servidor nodemon, dice que el puerto está ocupado

## Solución temporal
La solución temporal es matar el proceso por consola

Para ver el proceso corriendo en puerto 3000
<code>sudo fuser 3000/tcp</code>

Matar proceso utilizamos -k así:
<code>sudo -k fuser 3000/tcp</code>