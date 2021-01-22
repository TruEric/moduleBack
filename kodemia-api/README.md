# API espress + mongoose

## index.js
Este archivo tiene la tarea de levantar nuestra aplicacion

## server.js
Este archivo guarda la definicion del servidor
    - Que rutas van a existir
    - Que middlewares se van a usar
    - Se montan los routers al servidor

## models
Alberga nuestros modelos de base de datos
> Un modelo es una representacion de la coleccion y consta de un nombre de coleccion, y un eschema

## usecases
Alberga funciones que puede ejecutar el usuario en el sistema
>Agrupadas por entidades

## routes
Alberga las rutas de nustro servidor
>Estan agrupadas por entidades

## lib
Alberga codigo reutilzable a traves de todas las capas de la arquitectura

## Proceso de desarrollo
Esta es el proceso que debemos seguir cuando necesistamos agregr un nuevo endpoint a nustra API

1.- Modelos: asegurarnos de tener el acceso a datos que necesitamos
2.- useCase: asegurarnos de tener las funciones necesarias para la tarea
3.- Router: asegurarnos de tener la ruta(s) necesarias. (si no la tenemos, se debe crear)

