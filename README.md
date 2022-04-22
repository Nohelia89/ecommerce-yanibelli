# IT Shop
## Soluciones Informaticas






>It Shop es una aplicación creada con la finalidad de obtener una solución de tipo >e-commerce para una tienda que se especialice en artículos informáticos. 
>Siendo la misma adaptable a otras áreas en caso de ser requerido.



## Funcionalidades

- Componente:Cart 
Ruta: /cart 
Funcionalidad: Visualizar productos seleccionados, descripción, precio total, cantidad. 
Se muestra el precio total de la compra y permite proceder a confirmar la misma a través de un botón o regresar a la pantalla principal en caso de querer seguir agregando productos.
Desde la misma se puede vaciar el carrito o eliminar puntualmente los items seleccionados. En caso de realizar la compra de más de un producto, se suman las cantidades del mismo.

- Componente: Item
Funcionalidad: Contiene la estructura de las tarjetas de producto mostrar en otros componentes.

- Componente:ItemCount
Funcionalidad: Contiene las operaciones vinculadas a la cantidad de productos. Controla cantidad sobre stock.

- Componente: ItemDetail
Funcionalidad: Contiene una tarjeta con la información detallada de cada producto. Además desde dicha tarjeta es posible agregar productos y cantidades al carrito.

- Componente: ItemList
Funcionalidad: Lista los productos. Realiza para esto llamadas al componente item.

- Componente: NavBar
Funcionalidad: Navegabilidad entre funcionalidades.

- Componente: User
Ruta: /user
Funcionalidad: Confirma la compra. Despliega un formulario en el que se ingresan los datos del cliente. Se conecta al servidor de Firebase, donde almacena la información obtenida en la base de datos del mismo (Items, cliente, fecha de compra, precio total). Devuelve en pantalla en forma de alert, el número de orden correspondiente a la compra realizada.
Actualización de stock posterior a la compra en la base de datos.


- Componente: Widget
Funcionalidad: El widget en el navbar nos muestra en simultáneo la cantidad de productos que hay en el carrito.


- Componente: ItemDetailContainer
Ruta: /product/id
Funcionalidad: Muestra en pantalla el detalle del producto solicitado.En caso de que el producto no exista, muestra un mensaje y habilita la redirección a la raíz.


- Componente: ItemListContainer
Ruta: /
Ruta: /category/:nomCategoría
Funcionalidad: Lista desde Firebase los productos existentes, filtra por categoría en caso de solicitarse. 
En caso de que se ingrese una url equivocada, la aplicación redirigirá a este componente.

- Context: CartContext
Funcionalidad: Funciones para manipulación de productos en el cart (agregar, limpiar carrito, total de productos en el carrito, precio total, eliminar item.)



## Tecnologías

- React
- Javascript
- NodeJs v16.14.2



## Código fuente / Versionado

El código fuente y versionado de la página se encuentra en un repositorio público en [GitHub](https://github.com/Nohelia89/ecommerce-yanibelli.git) 

## Librerías


| Librería | Link | Utilidad |
| ------ | ------ |------ |
| React Bootstrap| [https://es.reactjs.org/][PlDb] | Diseño, estilo de la aplicación web.
| Firebase | [https://firebase.google.com/][PlGh] | Almacenamiento de información. Reemplaza Backend.
|React Icons | [https://react-icons.github.io/react-icons/][PlGd] | Widget de carrito en Navbar.
| React Router DOM | [https://reactrouter.com/][PlOd] |Navegabilidad entre los componentes.


## Instalación

##### Tecnologías




Instalación React

```sh
npx create-react-app ecommerce
```

##### Librerías

Instalacion React-Bootstrap
```sh
 npm install react-bootstrap bootstrap@5.1.3

```
Instalacion Firebase
```sh
npm install firebase
```

Instalacion React Icons
```sh
npm install react-icons
```

Instalacion React Router Dom
```sh
npm i react-router-dom
```
##### Developer: 
Nohelia Yanibelli
