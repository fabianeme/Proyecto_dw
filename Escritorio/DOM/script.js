/* "Calculadora" proyecto a futuro
let name = prompt("Ingresa tu nombre")
console.log("Hola " +name+ " esta es una sencilla calculadora en la que podras calcular en base a kms recorridos el precio a pagar")

let xpers = prompt("Cuantas personas viajaran?")

if (xpers > 1) {
    let divxpers = prompt("Queres dividir este viaje entre los integrantes del viaje si/no")
}

let cantdeviajes = 0

let generacionDeGNC = prompt("Eliga su generacion de gnc, g1=Generacion 1; g2=Generacion 2; g3=Generacion3")

let kms = prompt("Indique la cantidad de Kms a recorrer")

let generacionDeGNCelegida = [
    {generacion: "g1", mt3xkm: 0.9},
    {generacion: "g2", mt3xkm: 0.85},
    {generacion: "g3", mt3xkm: 0.7}
]

console.log(generacionDeGNCelegida.filter(generacion => generacionDeGNCelegida === generacion)) */ 

function mostrarNombre(nombre, apellido) {
    if (!nombre || !apellido) {
        console.log("Por favor ingresa tu nombre y apellido.")
    } else {
        console.log("Hola " + nombre +" " + apellido + "!")
    }   
}

let nombreIngresado = prompt("Hola, por favor ingresa tu nombre")
let appellidoIngresado = prompt("Tambein dejanos tu apellido por favor.")

mostrarNombre(nombreIngresado, appellidoIngresado);

/* Productos disponibles */

let productos = [
    {id:1, tipo:"aceite", nombre: "Mobil 20-50", precio: 700, stock: 0},
    {id:2, tipo:"aceite", nombre: "Mobil 10-30", precio: 750, stock: 46},
    {id:3, tipo:"aceite", nombre: "Mobil 15-40", precio: 900, stock: 30},
    {id:4, tipo:"aceite", nombre: "Mobil 10-40", precio: 1200, stock: 45},
    {id:5, tipo:"liqFreno", nombre: "Motul 660", precio: 1050, stock: 15},
    {id:6, tipo:"liqFreno", nombre: "Mobil dot 5.1", precio: 1300, stock: 1}
];

/* Elegir rango de productos */

let rangoProductos = prompt("Elegi el rango de productos Baratos/Caros")

alert("Acontinuacion te mostraremos los productos que cumplen con estos precios y de los cuales hay stock")

if (rangoProductos === "Caros") {

    let productosCaros =productos.filter(producto => producto.precio > 1000 && producto.stock >0)
    for (let producto of productosCaros) {
    console.log("El precio de "+producto.nombre+"+ es  IVA es $" + producto.precio * 1.21)}
    
} else { (rangoProductos === "Baratos")

    let productosBaratos =productos.filter(producto => producto.precio < 1000 && producto.stock >0)
    for (let producto of productosBaratos) {
    console.log("El precio de "+producto.nombre+" es IVA es $" + producto.precio * 1.21)
}
}

 /* Mostrar productos sin stock */

let stockProductos = productos.filter(producto => producto.stock < 1)
for (let productosinstock of stockProductos) {
    console.log("No stock de " + productosinstock)
}