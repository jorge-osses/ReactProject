# Ecotomito - Ecommerce

Este proyecto se esta realizando con React Js, el cual está pensado para ser el ecommerce de la pagina [Ecotomito](https://ecotomito.com.ar) *página que realicé para trabajo final de Desarrollo Web*.
Ambos proyectos son trabajos finales de diferentes cursos realizado en **CODERHOUSE**.

___

## Mis Espectativas

Principalmente aprender a usar React Js. Por el momento, independientemente de la Página estática de [Ecotomito](https://ecotomito.com.ar), éste ecommerce quedará funcionando de manera autónomo, redireccionando desde la página estática.

___

# Proyecto

## Instalación y dependencias

El proyecto esta inicializado con `npx install create-react-app ecotomito`.

+ Estoy usando "*react-bootstrap*" en su mayoria para darle estilo. Para instalar las dependencias para utilizar **react-bootstrap**, en la consola, `npm install react-bootstrap bootstrap@5.1.3` o si prefieres también puedes usar `yarn`. Puedes acceder a la documentacion de [React-bootstrap](https://react-bootstrap.github.io/)
+ Para el *Routing* usé, `npm i react-router-dom` para crear los *path*, también usé `yarn add react-router-bootstrap` para poder usarlo con los ***Link*** de Boostrap.
+ Para agregar algunos **Iconos**, utilizo **Font Awesome** para React, instalandolo con `npm i --save @fortawesome/fontawesome-svg-core
  npm install --save @fortawesome/free-solid-svg-icons
  npm install --save @fortawesome/react-fontawesome`. o utilizando *yarn*, `yarn add @fortawesome/fontawesome-svg-core
  yarn add @fortawesome/free-solid-svg-icons
  yarn add @fortawesome/react-fontawesome`

### App.js

El archivo principal es App.js, de aqui se routea todo el proyecto,

#### + NavBar
#### + ItemListContainer
#### + ItemDetailContainer

+ **‘/’** navega a `<ItemListContainer />`
+ **‘/category/:categoryId’** toma el ID de la categoria y filtra los productos donde se muestran en  `<ItemListContainer />`
+ **‘/detail/:paramId’** navega a `<ItemDetailContainer />`


__

### NavBar.js

La barra de navegacion hecha con ***react-bootstrap***, y el rounting con ***react-router-bootstrap***. Está conformado por:

#### Una Brand
Con el logo y nombre de la marca, que al clickearlo direcciona `('/')` al inicio `<ItemListContainer />`, donde muestra la lista general de los productos.

#### Boton Productos
Direcciona a la ruta `('/')` al igual que la Brand, se dirige al `<ItemListContainer />`, listado de la totalidad de los productos.

#### Un Botón Toggle
Con el nombre de **Categorías**, y muestra una lista de las categorias. Al Accionar cada una de las categorias, donde se rutea a `('/category/:categoryId')` donde `:categoryId` es el ID de cada categoría, entónces el panel de productos se acomoda filtrando los productos de cada categoria seleccionada.

+ Pañales
+ Absorbentes
+ Covertores
+ Higiene femenino

#### `<CartWidget>`
Es un componente, el cual muestra un botón con un carrito y el número de productos agregado al carrito. El icono del carrito proviene de ***FontAwesome***

___

### product.js
En este archivo es donde se almacena la lista de productos mediante un *Array* de objetos con sus propiedades. Un *Array* de objetos, donde se almacena las categorias de los productos y una serie de funciones que retornan una **Promise** para simular el retardo de la red del llamado de una `API` real.

+ `getCategories`, devuelve el array donde estan almacenadas las categorias
+ `getProductById`, devuelve la categoria de producto segun el ID dado por parámetro
+ `getProducts`, es la función que se usa para listar todos los productos en **ItemList**
+ `getProductById`, retorna un producto según el ID ingresado por parámetro
+ `getItem`, devuelve un producto específico del Array, según su índice

___
### ItemListContainer

Este contenedor se encarga de mostrar a un componente hijo `<ItemList>`, cual almacena los productos.