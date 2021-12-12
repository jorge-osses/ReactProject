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

### App.js

El archivo principal es App.js, de aqui se llaman los componentes,

#### + NavBar
#### + ItemListContainer
#### + ItemDetailContainer

Uso "*react-router-dom*" para rutear las urls y que cada componente sepa que tenga que aparecer

___

### NaviBar.js

La barra de navegacion hecha con ***react-bootstrap***, y el rounting con ***react-router-bootstrap***. Está conformado por:

#### una Brand
Con el logo y nombre de la marca, que al clickearlo direcciona al inicio, donde muestra la lista general de los productos

#### Un Botón Toggle
Con el nombre de **Productos**, y muestra una lista de las categorias. Al Accionar cada una de las categorias, el panel de productos se acomoda filtrando los productos por categoria.

+ Pañales
+ Absorbentes
+ Covertores
+ Higiene femenino

#### <CartWidget>
Es un componente, el cual muestra un botón con un carrito y el número de productos agregado al carrito

___