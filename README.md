// README.md
# Project Support
### Introduccion
Este es un proyecto de codigo abierto para que las personas puedan practicar el consumo de una api y poder ver la estructura inicial.
En este proyecto se utiliza typescript y tambien un sistema de rutas pata mayor claridad.
### Funcionalidad
* Tomar una lista de peliculas precargadas
* Agregar nuevas peliculas
  
### Inicio rapido
* Clona el repositorio  [aqui](https://github.com/EmmanuelSkapple/dummy-api.git).
* La rama main es la version mas estable
*Instala las dependencias:
   ```bash
   npm install
   ```
   o
   ```bash
   yarn install
   ```
* La base de datos es una simple Firestore pero puedes agregar la tuya propia, se razonable con las solicitudes ya que tiene bloqueo despues de 5mil peticiones al mes

### Uso
* Para iniciar la aplicacion corre:
   ```bash
   npm run dev
   ```

### API Endpoints
| HTTP Verbs | Endpoints | Action | Data |
| --- | --- | --- | --- |
| POST | /movies/add | Para agregar una nueva pelicula| MovieData|
| GET | /movies/get | Para tomar todas las peliculas |No aplica |

### MovieData para agregar
```typescript
interface moviesTypes {
    title: string,
    year: string,
    rating: string,
    image: string,
    description?: string
}
```

### Technologies Used
* [NodeJS](https://nodejs.org/) Este es un entorno de ejecución multiplataforma construido sobre el motor JavaScript V8 de Chrome que se utiliza para ejecutar códigos JavaScript en el servidor. Permite la instalación y gestión de dependencias y comunicación con bases de datos.
* [ExpressJS](https://www.expresjs.org/) Este es un framework para aplicaciones nodejs
* [Firestore](https://firebase.google.com/docs/firestore?hl=es-419/) Esta es una base de datos de Google, puedes usar su capa gratuita para tu proyecto personal
### Authors
* [Emmanuel Skapple](https://github.com/EmmanuelSkapple)
### License
[MIT](https://choosealicense.com/licenses/mit/)
