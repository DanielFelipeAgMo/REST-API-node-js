Con el comando npm init --yes creamos el package json para la descripción del proyecto

instalamos nuestros paquetes con npm i express morgan
express es un framework del lado servidor para escribir código de forma sencilla  y morgan es un middleware que procesa datos antes que el servidor lo reciba y nos pinta por consola las peticiones realizadas

creamos el servidor
luego lo lanzamos con  node src/index.js

vamos a un navegador http://localhost:3000

con el comando npm i nodemon -D instalamos nodemon para ejecutarlo como dependencia de desarrollo

npm run dev para lanzar el servicio

para las peticiones de tipo delete utilizaremos underscore.js lo instalamos con npm i underscore y para utilizarlo como cualquier otra dependencia simplemente lo requerimos

Podemos consumir apis dentro de apis para esto instalamos un módulo llamado fetch, esto lo hacemos con npm i node-fetch
como es un recurso externo será asincrona y por ello se debe trabajar con el async
