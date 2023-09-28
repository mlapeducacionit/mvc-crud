# Para arrancar un proyecto de Node

```sh
touch server.js # Creo archivo server
npm init -y # Inicializo un proyecto de NPM (Node Package Manager)
npm i nodemon -D # Instalo como dependencia de desarrollo (-D)
npm i express # Nos permite desarrollo de manera sencilla un servidor web.
```

```json
"scripts": {
    "start": "node server.js", /* Para producción */
    "dev": "nodemon server.js" /* Para desarrollar */
},
```
> Arrancar el servidor de desarrollo

```sh
npm run dev
```

> Detener el servidor de desarrollo

CTRL + C

## Para poder trabajar con variables de entorno
Utilizamos la librería DOTENV

<https://www.npmjs.com/package/dotenv>

```sh
npm i dotenv -D # El flag -D nos indica que va a ser una depedencia de desarrollo
```

> Para utilizar dotenv necesito crear 2 archivos.

1. .env || => No se comparte. O sea se coloca en el .gitignore
2  .env.example || => Este se comparte pero se dejan las variables vacías.

> Incomporación de dotenv en el proyecto

```sh
import 'dotenv/config'
```
> Uso la variables definida en el .env

```js
process.env.VARIABLE_DEFINIDA
process.env.PORT // <= Ejemplo
```
