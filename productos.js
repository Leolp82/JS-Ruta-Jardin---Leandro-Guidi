class Producto {
    constructor(id, nombre, precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = parseFloat(precio);
    }
    sumarIva(){
        this.precio = this.precio * 1.21;
    }
}

const productos = [];
productos.push(new Producto(1,"Espresso","200"));
productos.push(new Producto(2,"Ristretto","180"));
productos.push(new Producto(3,"Lungo","200"));
productos.push(new Producto(4,"Espresso doble","220"));
productos.push(new Producto(5,"Americano","210"));
productos.push(new Producto(6,"Cortado","250"));
productos.push(new Producto(7,"Flat White","260"));
productos.push(new Producto(8,"Capuccino","250"));
productos.push(new Producto(9,"Latte","240"));
productos.push(new Producto(10,"Americano frío","200"));
productos.push(new Producto(11,"Capuccino frío","180"));
productos.push(new Producto(12,"Flat frío","200"));
productos.push(new Producto(13,"Latte frío","220"));
productos.push(new Producto(14,"Te Verde Jardin","150"));
productos.push(new Producto(15,"Te Negro Early Gray","160"));
productos.push(new Producto(16,"Te Tipo Chai","200"));
productos.push(new Producto(17,"Te Rojo","160"));
productos.push(new Producto(18,"Tazas de Te","550"));
productos.push(new Producto(19,"Infusores de Te","400"));
productos.push(new Producto(20,"Latas de te en hebras","350"));
productos.push(new Producto(21,"1/4 Cafe Negro","650"));
productos.push(new Producto(22,"Lemon Pie","750"));
productos.push(new Producto(23,"Tofucota","650"));
productos.push(new Producto(24,"Matilda","730"));
productos.push(new Producto(25,"Medialunas","400"));
productos.push(new Producto(26,"Pain au Chocolat","500"));
productos.push(new Producto(27,"Cremona","430"));
productos.push(new Producto(28,"Roll de Canela","380"));
productos.push(new Producto(29,"Chipa (3 unidades)","250"));
productos.push(new Producto(30,"Tostadas con Mermelada (2 unidades)","280"));
productos.push(new Producto(31,"Alfajor de maicena","310"));
productos.push(new Producto(32,"Alfajor MDQ","320"));
productos.push(new Producto(33,"Alfajor de Frambuesa","330"));
productos.push(new Producto(34,"Muffin","350"));
productos.push(new Producto(35,"Cookie","250"));
productos.push(new Producto(36,"Apple Pie","420"));
productos.push(new Producto(37,"Pastrafrola","380"));
productos.push(new Producto(38,"Brownie","420"));

