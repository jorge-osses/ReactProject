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

___

## Lenguajes de programacion utilizados
 - HTML
 - CSS
 - JAVASCRIPT
 - REACT JS

 Base de datos usado:

 - Firebase

 ### `.env`
 Se agrega un archivo .env con los datos de Firebase para encriptar las credenciales de administración de Firebase

 ## .env de ejemplo: `.env.example` *Estos datos son de ejemplo, si estas con interes a mi proyecto y necesitas las credenciales me puedes contactar*

-   REACT_APP_apiKey=asadsvarfberasr
-   REACT_APP_authDomain=wsdvasdvasdvsdv.firebaseapp.com
-   REACT_APP_projectId=sdvasdvasdvasdv
-   REACT_APP_storageBucket=sadvasdvasdvasdv.appspot.com
-   REACT_APP_messagingSenderId=123546789
-   REACT_APP_appId=1:123456789:web:edvasd5646sdv65sdv

Luego en `firebase.js` se llaman a las variables de entorno de la siguiente forma

-   apiKey: process.env.REACT_APP_apiKey,
-   authDomain: process.env.REACT_APP_authDomian,
-   projectId: process.env.REACT_APP_projectId,
-   storageBucket: process.env.REACT_APP_storageBucket,
-   messagingSenderId: process.env.REACT_APP_messagingSenderId,
-   appId: process.env.REACT_APP_appId

### En el archivo `firebase.js` se inicializa firebase en la App
Se inicializa la *DataBase* e inicializan las credenciales de *Firebase*

___

Para crear un *Object* del producto deberá componerse de la siguiente manera:
+ `title:` nombre del producto
+ `id:` ID del producto creado por Firebase
+ `price:` precio del producto
+ `quantity:` Cantidad tomada desde el *ItemCount*
+ `color:` color del producto
+ `pictureUrl:` URL pública donde se toma la imagen
+ `stock:` cantidad disponible en la base de datos cagado
+ `description:` descripcion del producto para el *ItemDetail*
___

### App.js

El archivo principal es App.js, de aqui se routea todo el proyecto,

#### + NavBar
#### + ItemListContainer
#### + ItemDetailContainer
#### + Cart
#### + ContactForm
#### + DashBoardContainer

+ **‘/’** navega a `<ItemListContainer />`
+ **‘/category/:categoryId’** toma el ID de la categoria y filtra los productos donde se muestran en  `<ItemListContainer />`
+ **‘/detail/:paramId’** navega a `<ItemDetailContainer />`
+ **'/Cart'** se dirige al Carrito con los productos agregados
+ **'/Checkout'** es el segundo paso después de aceptar y seguir con la compra, donde te muestra un formulario donde ingresar los datos del comprador `<ContactForm />`
+ **'/Dashboard'** es un tablero donde se muestra todas las compras realizadas segun el email del comprador, en `<DashBoardContainer />` se mostraran todas las compras registradas en firebase


___

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
### ItemListContainer

Este contenedor se encarga de mostrar a un componente hijo `<ItemList>`, cual almacena una lista de los productos desglozando el mínimo necesario de las propiedades de cada producto. Mediante el uso de `Hook`, se muestran los productos según categoria seleccionada o muestra todos los productos.

### ItemDetailContainer

En este componente almacena como hijo al componente **ItemDetail** donde despliega el detalle de un producto. Éste se muestra cuando seleccionamos un producto. Con la ayuda de un `Hook`, toma el ID del producto selecionado y vuelca con una `props` toda la informacion necesaria para ampliar el producto.

#### ItemDetail

Es el contenedor donde despliega la informacion del producto detallada, y se le agrega como hijo el componente `ItemCount`, que éste tiene una función que incrementa y otra que decrementa la cantidad de productos a agregar al carrito, luego un boton que te agrega la cantidad y cambia a un boton de finalizar compra routeando a `(/cart)`. El contador se va aumentar hasta la cantidad que tenga como stock el producto. Todos los parametros se llaman mediante props.

#### ItemCount

Este componente almacena las funciones para agregar y substraer mostrando la el numero de la cantidad de productos a agregar al carrito

#### Cart

Este es el componente donde se van a listar los productos agregados desde el ItemDetail, se pueden eliminar productos individuales y el carrito entero. en el Botón *Comprar*, nos lleva a un Formulario de contacto.

#### ContactForm

Este Formulario con todos los campos obligatorios se encarga de cargar los datos del comprador y habilita el botón de *Confirmar compra*. Redireccionando al DashBoard

#### DashBoardContainer `Dashboard`

Al finalizar la compra, en este componente mostrara un listado de los productos comprados y cada compra que realizó el usuario con el mismo EMAIL.
