const products = [{ id: '1', name: 'GeForce RTX 3080 Ti', category:'graphics', price: 100, url: 'https://www.banifox.com/imagenes/img_contenido/productos/a/BFXEVV80.jpg', stock: 10 },
{ id: '2', name: 'ACER MONITOR', category:'monitor', price: 200, url: 'https://www.banifox.com/imagenes/img_contenido/productos/a/BFXACM46.jpg', stock: 5 },
{ id: '3', name: 'APPLE KEYBOARD MAC', category:'accesories', price: 100, url: 'https://www.banifox.com/imagenes/img_contenido/productos/a/BFXAPM03.jpg', stock: 4 },
{ id: '4', name: 'ASROCK PLACA A320M-HDV R4.0', category:'mother', price: 100, url:'https://www.banifox.com/imagenes/img_contenido/productos/a/BFXHR4.jpg', stock: 20 },
{ id: '5', name: 'KLIPX CAMARAS WEB KWC-500',category:'accesories', price: 450, url: 'https://www.banifox.com/imagenes/img_contenido/productos/a/BFXLOC15.jpg', stock: 2 }
]

export const gFetch = new Promise((resolve, reject) => {
  let condition = true
  if (condition) {
    setTimeout(() => resolve(products), 3000)

  } else {
    reject('400 error')
  }

})
