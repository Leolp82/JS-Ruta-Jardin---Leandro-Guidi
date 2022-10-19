alert("Bienvenido a Ruta Jardín! Por favor iniciá sesión.");
for (let conteo = 1; conteo <= 3; conteo++) {
    let user = prompt("Igresá tu usuario (Tutor123)");
    let password = prompt("Ingresá tu contraseña (Alagrandelepusecuca)");
    if ((user == "Tutor123") && (password == "Alagrandelepusecuca")) {
        alert("Bienvenido al Ruta Jardín " + user + "!!!")
        break;
    } else {
        alert("Usuario y/o contraseña incorrecta, volvé a intentar. Te quedan " + (3 - conteo) + " intentos");
    }
    if (3 - conteo == 0) {
        alert("Ponete en contacto con el administrador. Tu cuenta ha sido bloqueada");
    }
}
let resultado = 0;
function sumar(cantBebidas, cantComidas) {
    resultado = cantBebidas + cantComidas;
}
function mostrar(mensaje) {
    alert("El pedido consta de: " + resultado + " comidas más bebidas.");
}
sumar(parseInt(prompt("Ingresá la cantidad de bebidas que vas a querer ordenar (solo números)")), parseInt(prompt("Ingresá la cantidad de comidas que vas a querer ordenar (solo números)")));
mostrar(resultado);

for (const producto of productos)
    producto.sumarIva();

const pedido = prompt("Selecciona un producto del menú");
console.log(pedido);
/*productos.forEach((producto)=>console.log(producto.nombre));*/
const encontrado = productos.find((producto) => producto.nombre == pedido);
console.log(encontrado);
//sumar al carrito
const carrito = [];
for (let i = 1; i <= resultado; i++) {
    carrito.push(new Producto(prompt("Ingresá el producto n° " + i + " que querés comprar (textual del menú)")));
}
console.log(carrito);

//Al ver el array carrito, me lo trae al campo ID, no le encontre la vuelta para poder mandarlo a name y que trajera id y precio