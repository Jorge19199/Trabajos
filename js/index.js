const baseDeDatos=[
    {
        tipo:['sudadera','invierno'],
        id:'1',
        nombre:'ALL STAR ZIPPER OFF-WHITE',
        precio:99,
        descripcion:'Sudaera ALL STAR ZIPPER OFF-WHITE NUDE PROJECT',
        imagen1:'../imgs/sudaderas/ALL STAR ZIPPER OFF-WHITE_99 1.png',
        imagen2:'../imgs/sudaderas/ALL STAR ZIPPER OFF-WHITE_99 2.png'

    },
    {
        tipo:['sudadera','invierno'],
        id:'2',
        nombre:'BOXY HOOD ASH NUDE PROJECT',
        precio:79,
        descripcion:'Sudaera BOXY HOOD ASH NUDE PROJECT',
        imagen1:'../imgs/sudaderas/BOXY HOOD ASH_79 1.png',
        imagen2:'../imgs/sudaderas/BOXY HOOD ASH_79 2.png'

    },
    {
        tipo:['sudadera','invierno'],
        id:'3',
        nombre:'CULTZIPPER MARSHMALLOW',
        precio:89,
        descripcion:'Sudaera CULTZIPPER MARSHMALLOW NUDE PROJECT',
        imagen1:'../imgs/sudaderas/CULTZIPPER MARSHMALLOW_89 1.png',
        imagen2:'../imgs/sudaderas/CULTZIPPER MARSHMALLOW_89 2.png'

    },
    {
        tipo:['sudadera','invierno'],
        id:'4',
        nombre:'LOGO JERSEY NAVY',
        precio:66,
        descripcion:'Sudaera LOGO JERSEY NAVY FAKE GODS',
        imagen1:'../imgs/sudaderas/LOGO JERSEY NAVY_66 1.png',
        imagen2:'../imgs/sudaderas/LOGO JERSEY NAVY_66 2.png'

    },
    {
        tipo:['sudadera','invierno'],
        id:'5',
        nombre:'STAR HOODIE BROWN',
        precio:74,
        descripcion:'Sudaera STAR HOODIE BROWN FAKE GODS',
        imagen1:'../imgs/sudaderas/STAR HOODIE BROWN_74 1.png',
        imagen2:'../imgs/sudaderas/STAR HOODIE BROWN_74 2.png'

    },
    {
        tipo:['sudadera','invierno'],
        id:'6',
        nombre:'VALENTINES ZIPPER HODDIE BLACK',
        precio:74,
        descripcion:'Sudaera VALENTINES ZIPPER HODDIE BLACK FAKE GODS',
        imagen1:'../imgs/sudaderas/VALENTINES ZIPPER HODDIE BLACK_74 1.png',
        imagen2:'../imgs/sudaderas/VALENTINES ZIPPER HODDIE BLACK_74 2.png'

    },
    {
        tipo:['sudadera','invierno'],
        id:'7',
        nombre:'I LOVE YOU ZIPPER HOODIE RED',
        precio:75,
        descripcion:'Sudaera I LOVE YOU ZIPPER HOODIE RED FAKE GODS',
        imagen1:'../imgs/sudaderas/I LOVE YOU ZIPPER HOODIE RED_75 1.png',
        imagen2:'../imgs/sudaderas/I LOVE YOU ZIPPER HOODIE RED_75 2.png'

    },
    {
        tipo:['sudadera','invierno'],
        id:'8',
        nombre:`VALENTINE'S 24 HOODIE BLACK`,
        precio:75,
        descripcion:`Sudaera VALENTINE'S 24 HOODIE BLACK FAKE GODS`,
        imagen1:'../imgs/sudaderas/VALENTINES 24 HOODIE BLACK_75 1.png',
        imagen2:'../imgs/sudaderas/VALENTINES 24 HOODIE BLACK_75 2.png'

    },
    {
        tipo:['sudadera','invierno'],
        id:'9',
        nombre:'KNITTED LOGO SWEATER BROWN',
        precio:67,
        descripcion:'Sudaera KNITTED LOGO SWEATER BROWN FAKE GODS',
        imagen1:'../imgs/sudaderas/KNITTED LOGO SWEATER BROWN_67 1.png',
        imagen2:'../imgs/sudaderas/KNITTED LOGO SWEATER BROWN_67 1.png'

    },
    {
        tipo:['camiseta','verano'],
        id:'10',
        nombre:'LOGO TEE NAVY',
        precio:40,
        descripcion:'Camiseta LOGO TEE NAVY FAKE GODS',
        imagen1:'../imgs/camisetas/LOGO TEE NAVY_40 1.png',
        imagen2:'../imgs/camisetas/LOGO TEE NAVY_40 2.png'

    },
    {
        tipo:['camiseta','verano'],
        id:'11',
        nombre:'PREMIUM TEE WHITE GREY',
        precio:40,
        descripcion:'Camiseta PREMIUM TEE WHITE GREY FAKE GODS',
        imagen1:'../imgs/camisetas/PREMIUM TEE WHITE GREY_40 1.png',
        imagen2:'../imgs/camisetas/PREMIUM TEE WHITE GREY_40 2.png'

    },
    {
        tipo:['camiseta','verano'],
        id:'12',
        nombre:'SNOWFLAKE TEE BLACK',
        precio:40,
        descripcion:'Camiseta SNOWFLAKE TEE BLACK FAKE GODS',
        imagen1:'../imgs/camisetas/SNOWFLAKE TEE BLACK_40 1.png',
        imagen2:'../imgs/camisetas/SNOWFLAKE TEE BLACK_40 2.png'

    }
];
let carrito=[];
const divisa='€';

const DOMProductos=document.querySelector('section');
const DOMcarrito=document.querySelector('#carrito');
const DOMTotal=document.querySelector('#total');
const DOMbotonVaciar=document.querySelector('#boton-vaciar');

function pintaArticulos(baseDeDatos){
    DOMProductos.innerHTML='';
    baseDeDatos.forEach(articulo => {
        /*<article>
            <div class="contenedor-imagen">
                <div class="imagen-contenedor">
                    <img class="imagen1" src="../imgs/sudaderas/ALL STAR ZIPPER OFF-WHITE_99 1.png" alt="Sudadera ALL STAR ZIPPER OFF-WHITE NUDE PROJECT">
                    <img class="imagen2" src="../imgs/sudaderas/ALL STAR ZIPPER OFF-WHITE_99 2.png" alt="Sudadera ALL STAR ZIPPER OFF-WHITE NUDE PROJECT">
                </div>
                <span class="descripcion">Sudaera ALL STAR ZIPPER OFF-WHITE NUDE PROJECT</span>    
            </div>
            <p>ALL STAR ZIPPER OFF-WHITE</p>
            <p>99€</p>
            <button class="btn btn-primary" marcador="1">+</button>
        </article>*/
        
        const miNodo=document.createElement('article');

            const miContenedorImagen=document.createElement('div');
            miContenedorImagen.classList.add('contenedor-imagen');

                const miImagenes=document.createElement('div');
                miImagenes.classList.add('imagenes');

                    const miImagen1=document.createElement('img');
                    miImagen1.classList.add('imagen1');
                    miImagen1.setAttribute('src',articulo.imagen1);
                    miImagen1.setAttribute('alt',articulo.descripcion);

                    const miImagen2=document.createElement('img');
                    miImagen2.classList.add('imagen2');
                    miImagen2.setAttribute('src',articulo.imagen2);
                    miImagen1.setAttribute('alt',articulo.descripcion);

                const miDescripcion=document.createElement('span');
                miDescripcion.classList.add('descripcion');
                miDescripcion.textContent=articulo.descripcion;

            const miNombre=document.createElement('p');
            miNombre.textContent=articulo.nombre;

            const miPrecio=document.createElement('p');
            miPrecio.textContent=`${articulo.precio}${divisa}`;
            
            const miBoton=document.createElement('button');
            miBoton.classList.add('btn','btn-primary');
            miBoton.setAttribute('marcador',articulo.id);
            miBoton.textContent='+';
            miBoton.addEventListener('click',()=>aniadirProductos(articulo));
        
        miImagenes.append(miImagen1);
        miImagenes.append(miImagen2);

        miContenedorImagen.append(miImagenes);
        miContenedorImagen.append(miDescripcion);

        miNodo.append(miContenedorImagen);
        miNodo.append(miNombre);
        miNodo.append(miPrecio);
        miNodo.append(miBoton);

        DOMProductos.append(miNodo);
        
    });
}

function pintaCarrito(){
    DOMcarrito.innerHTML='';

    const carritoSinRepetidos=new Set(carrito);
    carritoSinRepetidos.forEach(idProducto =>{
    /*<article>
            <img src="../imgs/sudaderas/ALL STAR ZIPPER OFF-WHITE_99 1.png" alt="Sudaera ALL STAR ZIPPER OFF-WHITE NUDE PROJECT">
            <p>1x</p>
            <p>ALL STAR ZIPPER OFF-WHITE</p>
            <p>99€</p>
            <button><img src="../imgs/iconos/papelera.png" alt="img papelera"></button>
    </article>*/
        
        const producto=getItem(idProducto); 
        console.log(producto);

        const numUnidadesProducto=getNumUnidades(idProducto);

        const precioTotalProducto=calculaTotalProducto(producto.precio,numUnidadesProducto);

        const miNodo=document.createElement('article');
            
            const miAgruparProducto=document.createElement('div')
            miAgruparProducto.classList.add('articuloCarrito');
    
                const miImagen=document.createElement('img');
                miImagen.setAttribute('src',producto.imagen1);
                miImagen.setAttribute('alt',producto.descripcion);

                const miCantidad=document.createElement('p');
                miCantidad.classList.add('cantidadProducto');
                miCantidad.textContent=numUnidadesProducto;

                const miNombre=document.createElement('p');
                miNombre.textContent=producto.nombre;

                const miPrecio=document.createElement('p');
                miPrecio.classList.add('totalPrecioProducto');
                miPrecio.textContent=`${precioTotalProducto}${divisa}`;

                const miBoton=document.createElement('button');
                miBoton.classList.add('btn','btn-danger','mx-5');
                miBoton.dataset.idProducto = producto.id;
                miBoton.style.marginLeft = '1rem';
                miBoton.textContent = 'X';
                miBoton.addEventListener('click',borraProducto);
            
            const miAgruparBotones=document.createElement('div');
            miAgruparBotones.classList.add('botonesAgruparCarrito');

                const miBotonRestar=document.createElement('button');
                miBotonRestar.classList.add('btn','btn-danger','mx-5');
                miBotonRestar.dataset.idProducto = producto.id;
                miBotonRestar.style.marginLeft = '1rem';
                miBotonRestar.textContent = '-';
                miBotonRestar.addEventListener('click',()=>restaProducto(producto));

                const miBotonSumar=document.createElement('button');
                miBotonSumar.classList.add('btn','btn-danger','mx-5');
                miBotonSumar.dataset.idProducto = producto.id;
                miBotonSumar.style.marginLeft = '1rem';
                miBotonSumar.textContent = '+';
                miBotonSumar.addEventListener('click',()=>aniadirProductos(producto));

        miAgruparProducto.append(miImagen);
        miAgruparProducto.append(miCantidad);
        miAgruparProducto.append(miNombre);
        miAgruparProducto.append(miPrecio);
        miAgruparProducto.append(miBoton);

        miNodo.append(miAgruparProducto);
        
        miAgruparBotones.append(miBotonRestar);
        miAgruparBotones.append(miBotonSumar);
        miNodo.append(miAgruparBotones);

        DOMcarrito.append(miNodo);
    });
    DOMTotal.textContent=calculaTotalCarrito();

    guardarCarritoEnLocalStorage();
}

//Obtiene producto de la base de datos
function getItem(id){
    return baseDeDatos.find(producto=>producto.id==id);
}

//Añade producto al carrito
function aniadirProductos(articulo){
    //alert(`Se ha añaiddo el producto: ${articulo.nombre}`);
    carrito.push(articulo.id);
    pintaCarrito();
}

//Resta un producto al carrito
function restaProducto(articulo){
    console.log('aa');
    const posicion=carrito.lastIndexOf(articulo.id);
    console.log(posicion);
    carrito.splice(posicion,1)
    pintaCarrito();
}

//Cuenta total unidades
function getNumUnidades(id){
    return carrito.filter(idProducto => idProducto == id).length;
}
//Calcula
function calculaTotalProducto(precioProducto,cantidadProducto){
    let total=0;
    console.log(precioProducto);
    console.log(cantidadProducto);
    return total=cantidadProducto*precioProducto;
}

function calculaTotalCarrito(){
    let total=0;
    let objProducto;
    for (const id of carrito) {
        precioProducto = getItem(id).precio;
        total += precioProducto;
    }

    return total;
}

//Borrar
function borraProducto(articulo){
    const idBorrar=articulo.target.dataset.idProducto;

    carrito=carrito.filter(id=>(id !=idBorrar))

    pintaCarrito();
}

function vaciaCarrito(){
    carrito=[];
    pintaCarrito();
}
//Eventos

DOMbotonVaciar.addEventListener('click',vaciaCarrito);

// LocalStorage

function guardarCarritoEnLocalStorage(){
    window.localStorage.setItem("carritoTienda",JSON.stringify(carrito));
}

function cargarCarritoDesdeLocalStorage(){
    if (window.localStorage.getItem("carritoTienda"))
        carrito=JSON.parse(window.localStorage.getItem("carritoTienda"));
}

//Navegador
function filtrarSudaderas(){
    if(!estadoFiltradoSudaderas){
        pintaArticulos(baseDeDatos.filter(producto=>producto.tipo[0]=='sudadera'));
        estadoFiltradoSudaderas=true;
    }else{
        pintaArticulos(baseDeDatos);
        estadoFiltradoSudaderas=false;
    }
}
function filtrarCamisetas(){
    if(!estadoFiltradoCamisetas){
        pintaArticulos(baseDeDatos.filter(producto=>producto.tipo[0]=='camiseta'));
        estadoFiltradoCamisetas=true;
    }else{
        pintaArticulos(baseDeDatos);
        estadoFiltradoCamisetas=false;
    }
}

const filtradoSudaderas=document.querySelector('#filtradoSudaderas');
let estadoFiltradoSudaderas=false;
filtradoSudaderas.addEventListener('click',filtrarSudaderas);

const filtradoCamisetas=document.querySelector('#filtradoCamisetas');
let estadoFiltradoCamisetas=false;
filtradoCamisetas.addEventListener('click',filtrarCamisetas);

//Inicio

window.addEventListener('load',cargarCarritoDesdeLocalStorage);
window.addEventListener('load',()=>pintaArticulos(baseDeDatos));
window.addEventListener('load',pintaCarrito);
