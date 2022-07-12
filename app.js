/*
//Ingreso de usuario
let idUsuario = prompt("ingrese su nombre por favor")
alert(`Bienvenido ${idUsuario} a rotiseria La Isla`)
alert(`${idUsuario}, a continuacion, se le mostraran los Numeros de Identificacion de comida, elija uno por favor.`)


//Esta clase de Productos es la base para cargar los mismos.
class Productos {
    constructor (nombre, id, precio, tipo, stock) {
        this.nombre = nombre
        this.id = id
        this.precio = precio
        this.tipo = tipo
        this.stock = stock
    }

    vender (cantidad) {
        this.stock = this.stock - cantidad
    }
}

//Inicializo los arrays para las categorias de comidas.
const pizzas = []
const hamburguesas = []
const empanadas = []
const tartas = []

//Pizzas.
pizzas.push(new Productos("Pizza Especial", 1, 1000, "Especial", 50))
pizzas.push(new Productos("Pizza Tomate y Huevo", 2, 1050, "Especial TyH", 30))
pizzas.push(new Productos("Pizza Muzzarella a la piedra", 3, 900, "Muzza Piedra", 70))
pizzas.push(new Productos("Pizza Rucula", 4, 950, "Rucula", 10))
pizzas.push(new Productos("Pizza Calabresa", 5, 1100, "Calabresa", 50))
pizzas.push(new Productos("Pizza Especial La Isla", 6, 1500, "Especial Isla", 100))
//Hamburguesas.
hamburguesas.push(new Productos("Hamburguesa Monstruo", 7, 930, "Monstruo", 80))
hamburguesas.push(new Productos("Hamburguesa Doble XXL", 8, 1200, "2XXL", 80))
hamburguesas.push(new Productos("Hamburguesa Americana", 9, 1100, "Americana", 80))
hamburguesas.push(new Productos("Hamburguesa Monstruo Big", 10, 1500, "Monstruo Big", 80))
//Empanadas.
empanadas.push(new Productos("Empanada Vacio", 11, 220, "Empanada de Vacio", 200))
empanadas.push(new Productos("Empanada Verdura", 12, 200, "Empanada de Verdura", 200))
empanadas.push(new Productos("Empanada Pollo", 13, 200, "Empanada de Pollo", 200))
empanadas.push(new Productos("Empanada Humita", 14, 210, "Empanada de Humita", 200))
empanadas.push(new Productos("Empanada JyQ", 15, 200, "Empanada de Jamon y Queso", 200))
//Tartas.
tartas.push(new Productos("Tarta Verdura", 16, 500, "Tarta de verdura", 50))
tartas.push(new Productos("Tarta Humita", 17, 500, "Tarta de humita", 50))
tartas.push(new Productos("Tarta JyQ", 18, 500, "Tarta de JyQ", 50))
tartas.push(new Productos("Tarta sin TACC", 19, 500, "Tarta sin tacc", 50))

//Recorro los arrays para mostrar los productos al usuario.
for (const pizza of pizzas) {
    alert("ID (" + pizza.id + ") - " + pizza.nombre);
}

for (const hamburguesa of hamburguesas) {
    alert("ID (" + hamburguesa.id + ") - " + hamburguesa.nombre);
}

for (const empanada of empanadas) {
    alert ("ID (" + empanada.id + ") - " + empanada.nombre);
}

for (const tarta of tartas) {
    alert ("ID (" + tarta.id + ") - " + tarta.nombre);
}

//Funcion para calcular el precio final de la compra
function calcularPrecio (precioComida, cantidadComida, costoEnvio) {
    return ((precioComida * 1.21) * cantidadComida) + costoEnvio
}

//Solicito al usuario la identificación de la comida y la almaceno en una nueva variable con la comida seleccionada.
let comidaSeleccionada = parseInt(prompt("Ingrese el ID de la comida que desea pedir: "))
const pizzaBuscada = pizzas.find(pizza => pizza.id === comidaSeleccionada)
const hamburguesaBuscada = hamburguesas.find( hamburguesa => hamburguesa.id === comidaSeleccionada)
const empanadaBuscada = empanadas.find(empanada => empanada.id === comidaSeleccionada)
const tartaBuscada = tartas.find(tarta => tarta.id === comidaSeleccionada)

//Solicito al usuario la cantidad de comida.
let cantidad = parseInt(prompt("Ingrese la cantidad de unidades que quiere de la comida seleccionada"))

//Costo de envio producto.
const envio = 500

//Salida de la consola indicando el precio final de la compra segun la comida elegida.
if (comidaSeleccionada <= 0) {
    alert("Ingresa un Id Valido, por favor")
} else if (comidaSeleccionada <= 6) {
    alert("El precio final de tu compra es: $" + calcularPrecio(pizzaBuscada.precio, cantidad, envio))
    alert("Espero que lo disfrutes, La isla.")
    pizzaBuscada.vender(cantidad)
} else if (comidaSeleccionada <=10) {
    alert("El precio final de tu compra es: $" + calcularPrecio(hamburguesaBuscada.precio, cantidad, envio))
    alert("Espero que lo disfrutes, La isla.")
    hamburguesaBuscada.vender(cantidad)
} else if (comidaSeleccionada <= 15) {
    alert("El precio final de tu compra es: $" + calcularPrecio(empanadaBuscada.precio, cantidad, envio))
    alert("Espero que lo disfrutes, La isla.")
    empanadaBuscada.vender(cantidad)
} else if (comidaSeleccionada <= 19) {
    alert("El precio final de tu compra es: $" + calcularPrecio(tartaBuscada.precio, cantidad, envio))
    alert("Espero que lo disfrutes, La isla.")
    tartaBuscada.vender(cantidad)
} else {
    alert ("Ingresa un ID valido, por favor.")
}
*/

const contenedorProductos = document.getElementById('contenedor-productos')

//TERCER PASO

const contenedorCarrito = document.getElementById('carrito-contenedor')
//SEXTO PASO
const botonVaciar = document.getElementById('vaciar-carrito')
//SEXTIMO PASO, MODIFICAR LOS CONTADORES
const contadorCarrito = document.getElementById('contadorCarrito')

//OCTAVO PASO
const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')

let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})
//SEXTO PASO
botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})

//PRIMER PRIMER PASO, INYECTAR EL HTML
stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img src=${producto.img} alt= "">
    <h3>${producto.nombre}</h3>
    <p class="precioProducto">Precio:$ ${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>

    `
    contenedorProductos.appendChild(div)

    //2 - SEGUNDO PASO, LUEGO DE QUE INSERTEMOS EL HTML EN EL DOM:
    const boton = document.getElementById(`agregar${producto.id}`)
    //Por cada elemento de mi array, creo un div, lo cuelgo, le pongo un id particular, una vez colgado
    //le hago un get element by id (el de agregar) Obtengo el elemento y a dicho elemento le agregamos
    //el add event listener

    boton.addEventListener('click', () => {
        //esta funcion ejecuta el agregar el carrito con la id del producto
        agregarAlCarrito(producto.id)
        //
    })
})

// 1- PRIMER PASO

//AGREGAR AL CARRITO
const agregarAlCarrito = (prodId) => {

    //PARA AUMENTAR LA CANTIDAD Y QUE NO SE REPITA
    const existe = carrito.some (prod => prod.id === prodId) //comprobar si el elemento ya existe en el carro

    if (existe){ //SI YA ESTÁ EN EL CARRITO, ACTUALIZAMOS LA CANTIDAD
        const prod = carrito.map (prod => { //creamos un nuevo arreglo e iteramos sobre cada curso y cuando
            // map encuentre cual es el q igual al que está agregado, le suma la cantidad
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else { //EN CASO DE QUE NO ESTÉ, AGREGAMOS EL CURSO AL CARRITO
        const item = stockProductos.find((prod) => prod.id === prodId)//Trabajamos con las ID
        //Una vez obtenida la ID, lo que haremos es hacerle un push para agregarlo al carrito
        carrito.push(item)
    }
    //Va a buscar el item, agregarlo al carrito y llama a la funcion actualizarCarrito, que recorre
    //el carrito y se ve.
    actualizarCarrito() //LLAMAMOS A LA FUNCION QUE CREAMOS EN EL TERCER PASO. CADA VEZ Q SE 
    //MODIFICA EL CARRITO
}
//agregarAlCarrito(1) //Le pasamos el ID por parametro. Tenemos que asigarle como evento esta funcion al boton
//con el id de su producto correspondiente

// 5 - QUINTO PASO
const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item) //Busca el elemento q yo le pase y nos devuelve su indice.

    carrito.splice(indice, 1) //Le pasamos el indice de mi elemento ITEM y borramos 
    // un elemento 
    actualizarCarrito() //LLAMAMOS A LA FUNCION QUE CREAMOS EN EL TERCER PASO. CADA VEZ Q SE 
    //MODIFICA EL CARRITO
    console.log(carrito)
}

const actualizarCarrito = () => {
    //4- CUARTO PASO
    //LOS APPENDS SE VAN ACUMULANDO CON LO QE HABIA ANTES
    contenedorCarrito.innerHTML = "" //Cada vez que yo llame a actualizarCarrito, lo primero q hago
    //es borrar el nodo. Y despues recorro el array lo actualizo de nuevo y lo rellena con la info
    //actualizado
    //3 - TERCER PASO. AGREGAR AL MODAL. Recorremos sobre el array de carrito.

    //Por cada producto creamos un div con esta estructura y le hacemos un append al contenedorCarrito (el modal)
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `

        contenedorCarrito.appendChild(div)
        
        localStorage.setItem('carrito', JSON.stringify(carrito))

    })
    //SEPTIMO PASO
    contadorCarrito.innerText = carrito.length // actualizamos con la longitud del carrito.
    //OCTAVO PASO
    console.log(carrito)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
    //Por cada producto q recorro en mi carrito, al acumulador le suma la propiedad precio, con el acumulador
    //empezando en 0.

}




