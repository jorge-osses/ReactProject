# Ecotomito - Ecommerce

Este proyecto se esta realizando con React Js, el cual está pensado para ser el ecommerce de la pagina [Ecotomito](https://ecotomito.com.ar) *página que realicé para trabajo final de Desarrollo Web*.
Ambos proyectos son trabajos finales de diferentes cursos realizado en **CODERHOUSE**.

___

## Mis Espectativas

Por el momento, independientemente de la Página estática de Ecotomito, éste ecommerce quedará funcionando de manera autónoma, redireccionando desde la página estática.

___

## Adentrando al proyecto

Estoy usando "*react-bootstrap*" en su mayoria para darle estilo.

### App.js

El archivo principal es App.js, de aqui se llaman los componentes,

#### + NavBar
#### + ItemListContainer
#### + ItemDetailContainer

Uso "*react-router-dom*" para rutear las urls y que cada componente sepa que tenga que aparecer

___

### NaviBar.js

La barra de navegacion hecha con ***react-bootstrap***, esta conformado por:

#### una Brand
Con el logo y nombre de la marca, que al clickearlo direcciona al inicio, donde muestra la lista general de los productos

#### Un Botón Toggle
Con el nombre de **Productos**, y muestra una lista de las categorias. Al Accionar cada una de las categorias, el panel de productos se acomoda filtrando los productos por categoria.

+ Pañales
+ Absorbentes
+ Covertores
+ Higiene femenino