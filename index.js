/*
//Ingreso de usuario
let idUsuario = prompt("ingrese su DNI / ID Usuario")
alert(`Usuario n° ${idUsuario}`)

//Contraseña de usuario
let contraUsuario = prompt("Ingrese su contraseña")
alert(`Usuario n° ${idUsuario} contraseña correcta`)

//Cantidad de facturas que quiere pagar
let cantidadFacturas = parseInt(prompt('Ingrese la cantidad de facturas a pagar (maximo 5)'))

//No se permite que el usuario ingrese datos no validos
while (cantidadFacturas > 5 || cantidadFacturas < 1){
    alert('Ingreso mal el valor o excedio el limite de facturas')
    cantidadFacturas = parseInt(prompt('Ingrese la cantidad de facturas a pagar (maximo 5)'))
}

let impTotal = 0

for (let i = 1; i<=cantidadFacturas; i++){
    let importe = parseFloat(prompt(`Esta pagando ${cantidadFacturas} facturas.
    \n El valor hasta el momento es de: $${impTotal}.
    \n Ingrese el importe de la factura n° ${i}`))
    impTotal = parseFloat(impTotal + importe)
}

function pago(){
    let medioPago = (prompt(`Usted va a abonar la cantidad de $${impTotal} desea hacerlo con: 
    \n 1-Debito. (10% de descuento)
    \n 2-Credito (1 cuota con recargo del 15%).`))
    if(medioPago == '1' || medioPago =='debito' || medioPago == 'Debito' || medioPago == 'DEBITO'){
        alert('Tiene 10% de descuento')
        let descuento = impTotal *0.10
        let totalDescuento = impTotal - descuento
        alert(`Usted va a pagar: $${totalDescuento} si esta de acuerdo toque en "Aceptar" y el pago se realiza al instante`)
    }else if (medioPago == '2' || medioPago == 'credito' || medioPago == 'Credito' || medioPago == 'CREDITO' ){
    alert('Tiene recargo del 10%')
    let recargo = impTotal *0.15
    let totalRecargo = impTotal + recargo
    alert(`Usted va a pagar: $${totalRecargo} si esta de acuerdo toque en "Aceptar" y el pago se realiza al instante`)
    }
}pago()

alert(`Su pago ha sido realizado con exito con la cuenta de ahorro vinculada a su cuenta, muchas gracias`)
*/
/*
//Ingreso de usuario
let idUsuario = prompt("ingrese su nombre por favor")
alert(`Bienvenido ${idUsuario} a rotiseria La Isla`)

function ordenComida(){
    let eleccionComida = (prompt(`A continuacion, elija lo que va a llevar
        \n 1-Pizza
        \n 2-Empanada
        \n 3-Hamburguesa
        \n 4-Tarta`))

        if(eleccionComida == "1" || eleccionComida == "pizza" || eleccionComida == "Pizza" || eleccionComida == "PIZZA"){
            alert("Usted esta por elegir pizza, el valor es $750")
            pagoComida()
            finPedido()
        } else if(eleccionComida == "2" || eleccionComida == "empanada" || eleccionComida == "Empanada" || eleccionComida == "EMPANADA"){
            alert("Usted esta por elegir empanada, el valor es $150")
            pagoComida()
            finPedido()
        } else if(eleccionComida == "3" || eleccionComida == "hamburguesa" || eleccionComida == "Hamburguesa" || eleccionComida == "HAMBURGUESA"){
            alert("Usted esta por elegir hamburguesa, el valor es $500")
            pagoComida()
            finPedido()
        } else if(eleccionComida == "4" || eleccionComida == "tarta" || eleccionComida == "Tarta" || eleccionComida == "TARTA"){
            alert("Usted esta por elegir tarta, el valor es $400")
        pagoComida()
        finPedido()}

} ordenComida()

function pagoComida(){
    
    let pago = parseInt(prompt(`A continuacion, elija el metodo de pago:
    \n 1-Transferencia.
    \n 2-Credito (1 pago).
    \n 3-Debito.
    \n 4-Mercado pago.
    \n *TARJETA DE CREDITO Y MERCADO PAGO TIENEN 15% DE INTERES*`))
    
    if (pago == "1" || pago == "Transferencia" || pago == "transferencia" || pago == "TRANSFERENCIA"){
        alert("Tiene un 5% de descuento")
        let montoDescuento = parseFloat(prompt('Ingrese el monto a pagar.'))
        let descuento = montoDescuento *0.05
        let totalDescuento = montoDescuento - descuento
        alert("Su pago ha sido realizado con exito, muchas gracias")
    } else if(pago == "2" || pago == "credito" || pago == "Credito" || pago == "CREDITO"){
        alert('Tiene recargo del 15%')
        let montoRecargo = parseFloat(prompt('Ingrese el monto a pagar.'))
        let recargo = montoRecargo * 0.15
        let totalRecargo = montoRecargo + recargo
        alert("Su pago ha sido realizado con exito, muchas gracias")
    } else if(pago == "3" || pago == "debito" || pago == "Debito" || pago == "DEBITO"){
        alert("Tiene un 5% de descuento")
        let montoDescuento = parseFloat(prompt('Ingrese el monto a pagar.'))
        let descuento = montoDescuento *0.05
        let totalDescuento = montoDescuento - descuento
        alert("Su pago ha sido realizado con exito, muchas gracias")
    } else if(pago == "4" || pago == "mercado pago" || pago == "Mercado pago" || pago == "Mercado Pago" || pago == "MERCADO PAGO"){
        alert('Tiene recargo del 15%')
        let montoRecargo = parseFloat(prompt('Ingrese el monto a pagar.'))
        let recargo = montoRecargo * 0.15
        let totalRecargo = montoRecargo + recargo
        alert("Su pago ha sido realizado con exito, muchas gracias")
    } else {
        alert("Ingrese una opcion valida!!")
        pagoComida()}
} 
pagoComida()

function finPedido(){
    let pregunta = parseInt(prompt(`¿Desea hacer otro pedido?
    \n 1-Si
    \n 2-No`))
    if (pregunta == "1" || pregunta =="si" || pregunta == "Si" || pregunta == "SI"){
        ordenComida()
    } else if(pregunta == "2" || pregunta =="no" || pregunta == "No" || pregunta == "NO"){
        alert("Muchas gracias, vuelva prontos! xd")
    } else {
        alert("Ingrese una opcion valida!!")
        finPedido()
    }
}
    
class Adicionales {
    constructor(adicional, precio) {
        this.adicional = adicional
        this.precio = precio
    }
}

const mensaje = (laIsla) => {
    alert("el combo de " + rotiseria.adicional + "cuesta" + rotiseria.precio)
}

const totalPrecio = () => {
    let sumaTotal = 0
    carrito.forEach ((producto) => {
        sumaTotal += producto.precio
    })
    return sumaTotal
}

const comboPizz = new Adicionales("Especial", 1000)
const comboEmpa = new Adicionales("XL", 200)
const comboHamb = new Adicionales("Monstruo", 800)
const comboPapas = new Adicionales("Papas Fritas", 400)

const carrito = []

const combosAdicionales = () => {
    const comElegido = prompt(`Elija sus adicionales:
    \n Combo de pizza especial
    \n Combo de empanada XL
    \n combo de hamburguesa monstruo
    \n combo de papas Fritas`).toLowerCase()
}
console.log(comElegido)
    

switch (comElegido){
    case "Pizza especial":
        mensaje (comboPizz)
        carrito.push(comboPizz)
        break
    case "Empanada XL":
        mensaje (comboEmpa)
        carrito.push(comboEmpa)
        break
    case "Hamburguesa monstruo":
        mensaje (comboHamb)
        carrito.push(comboHamb)
        break
    case "Papas fritas":
        mensaje (comboPapas)
        carrito.push(comboPapas)
        break
    default:
        alert("Ingrese una opcion valida")
        break
} if(confirm("Desea agregar otro producto")){
    combosAdicionales()
} else {
    alert("El total es de " + " " + "$" + totalPrecio())
    console.log(carrito)
} combosAdicionales()*/


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
const hamburguesaBuscada = hamburguesas.find(hamburguesa.id === comidaSeleccionada)
const empanadaBuscada = empanadas.find(empanada.id === comidaSeleccionada)
const tartaBuscada = tartas.find(tarta.id === comidaSeleccionada)

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

