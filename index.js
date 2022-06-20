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







    



