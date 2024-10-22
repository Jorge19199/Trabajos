const DOMGlobal=document.querySelector('fieldset');
const DOMContenido=document.querySelectorAll('.contenido div');
const DOMDivBoton=document.querySelector('#divBoton');

let usuarios=[];
let ultimoUsuario;
//Muestra los campos de inicio de sesion y le añade sus restricciones
function inicioSesion(){
    const DOMLegend=document.querySelector('legend');
    DOMLegend.textContent='Inicio Sesion';

    
    //Crea elementos
    //----------
    let DOMBototonIniciarSesion=document.createElement('input');
    DOMBototonIniciarSesion.setAttribute('type','submit');
    DOMBototonIniciarSesion.setAttribute('value','Enviar');
    DOMBototonIniciarSesion.classList.add('enviar');
    DOMBototonIniciarSesion.classList.add('iniciarSesion');

    let DOMRegistrame=document.createElement('p');
    DOMRegistrame.style.cursor="pointer";
    DOMRegistrame.textContent='¿No tienes cuenta? Registrarme';

    DOMDivBoton.append(DOMBototonIniciarSesion);
    DOMDivBoton.append(DOMRegistrame);
    //----------
    //Resetea los inputs al cambiar de la pantalla de registro a la de inicio
    DOMRegistrame.addEventListener('click',()=>{
        DOMContenido.forEach(input=>{
            if(input.querySelector('textarea')){
                const DOMInput=input.querySelector('textarea');
                DOMInput.value='';
            }else if(input.querySelector('select')){
                const DOMInput=input.querySelector('select');
                DOMInput.selectedIndex=-1;
            }else if(input.querySelector('#idRecordar')){
                const DOMInput=input.querySelector('input');
                DOMInput.checked=false;
            }else{
                const DOMInput=input.querySelector('input');
                DOMInput.value='';
            }
        })
    });

    //Oculta los elemento q solo salen en registro y los demas los visualiza y le pone sus clases
    DOMContenido.forEach(input=>{
        if(!input.className.includes('inicioSesion'))
            input.style.display='none';
        else{
            input.style.display='block';
            if(!input.className.includes('recordar')){
                const DOMLabel=input.querySelector('label');
                if(!DOMLabel.includes)
                DOMLabel.classList.add('required');
                
                const DOMInput=input.querySelector('input');
                DOMInput.classList.add('obligatorio');
                DOMInput.setAttribute('required','required');
            }
        }
    })

    //borra el p de Inicia sesion
    DOMRegistrame.addEventListener('click',()=>{
        DOMDivBoton.innerHTML='';
        registro();
    });

    //si el email y la contraseña coinciden con las de un usuario inicia sesion
    DOMBototonIniciarSesion.addEventListener('click',e=>{
        const contra=document.querySelector('#idContrasena').value;
        const gmail=document.querySelector('#idEmail').value;
        const encontrado=!!usuarios.find(usuario=>usuario.email===gmail && usuario.contrasenia===contra);
        if(encontrado){
            alert('Bienvenido');
        }else{
            alert('Usuario no encontrado en la base de datos o contraseña incorrecta');
            e.preventDefault();
        }
    });

    //Ver la contraseña
    const contra=document.querySelector('#idContrasena');
    contra.addEventListener('mouseover',()=>verContra(contra));
    contra.addEventListener('mouseout',()=>ocultarContra(contra));

    //al hacer el submit si el boton de recordar usuario esta activo guarda el usuario si no una cadena vacia
    const recordarUsuario=document.querySelector('#idRecordar');
    const miBotonIniciar=DOMDivBoton.querySelector('.iniciarSesion');
    miBotonIniciar.addEventListener('click',()=>{
        recuerdaUsuario(recordarUsuario);
        window.localStorage.setItem('usuarioRecordado',JSON.stringify(ultimoUsuario));
    });

    //muestra el usuario en los inputs
    const email=document.querySelector('#idEmail');
    if(!ultimoUsuario){
        email.value="";
        contra.value="";
    }else{
        email.value=ultimoUsuario.email;
        contra.value=ultimoUsuario.contrasenia;
    }
}
//Muestra los campos de registro y les añade sus restricciones
function registro(){
    const DOMLegend=document.querySelector('legend');
    DOMLegend.textContent='Registrarme';

    //Crea elementos
    //----------
    let DOMBototonRegistrar=document.createElement('input');
    DOMBototonRegistrar.setAttribute('type','submit');
    DOMBototonRegistrar.setAttribute('value','Enviar');
    DOMBototonRegistrar.classList.add('enviar');
    DOMBototonRegistrar.classList.add('registrar');

    let DOMIniciarSesion=document.createElement('p');
    DOMIniciarSesion.style.cursor="pointer";
    DOMIniciarSesion.textContent='¿Ya tienes cuenta? Iniciar Sesion';

    DOMDivBoton.append(DOMBototonRegistrar);
    DOMDivBoton.append(DOMIniciarSesion);
    //----------
    //Resetea los inputs al cambiar de la pantalla de inicio a la de registro
    DOMIniciarSesion.addEventListener('click',()=>{
        DOMContenido.forEach(input=>{
            if(input.querySelector('textarea')){
                const DOMInput=input.querySelector('textarea');
                DOMInput.value='';
            }else if(input.querySelector('select')){
                const DOMInput=input.querySelector('select');
                DOMInput.selectedIndex=-1;
            }else{
                const DOMInput=input.querySelector('input');
                DOMInput.value='';
            }
        })
    });
    //Oculta los elemento q solo salen iniciar sesion y los demas los visualiza y le pone sus clases
    DOMContenido.forEach(contenedor=>{
        if(!contenedor.className.includes('registro')){
            contenedor.style.display='none';
        }else{
                contenedor.style.display='block';
                if(contenedor.querySelector('textarea')){
                    const DOMTextArea=contenedor.querySelector('textarea');
                    DOMTextArea.classList.add('obligatorio');
                    DOMTextArea.setAttribute('required','required');
                    
                }else if(contenedor.querySelector('select')){
                    const DOMTextArea=contenedor.querySelector('select');
                }else{
                    const DOMLabel=contenedor.querySelector('label');
                    DOMLabel.classList.add('required');
                
                    const DOMInput=contenedor.querySelector('input');
                    DOMInput.classList.add('obligatorio');
                    DOMInput.setAttribute('required','required');
                }
            
        }
    })

    //borra el p de Registra sesion
    DOMIniciarSesion.addEventListener('click',()=>{
        DOMDivBoton.innerHTML='';
        inicioSesion();
    });

    //si la direccion es corta mostramos mensaje modificado y cuando se cumpla lo quitamos
    document.querySelector('textarea').addEventListener('input',e=>{
        if(e.target.validity.tooShort){
            e.target.setCustomValidity("Dirección demasiado corta. No has escrito la dirección de envío completa");
        }else{
            e.target.setCustomValidity("");
        }
    });

    //Ver las contraseñas
    const contra=document.querySelector('#idContrasena');
    contra.addEventListener('mouseover',()=>verContra(contra));
    contra.addEventListener('mouseout',()=>ocultarContra(contra));

    const confContra=document.querySelector('#idConfContrasena');
    confContra.addEventListener('mouseover',()=>verContra(confContra));
    confContra.addEventListener('mouseout',()=>ocultarContra(confContra));

    //Cuando se envie el formulario comprueba las funciones
    idForm.addEventListener('submit',e=>{
        if(!validaContrasenias(e)){
            e.preventDefault();
        }else{
            guardarUsuarioEnLocalStorage(e);
        }
    });
}
//Ver y ocultar contraseñas
function verContra(contra){
    contra.type='text';
}
function ocultarContra(contra){
    contra.type='password';
}
//---------

//Validacion de campos
function validaContrasenias(){
    const contrasena=document.querySelector('#idContrasena').value;
    const confContrasena=document.querySelector('#idConfContrasena').value;
    if(contrasena!==confContrasena){
        alert('Las contraseñas no coinciden compruebalas');
        return false;
    }else{
        return true;
    }
}

//Guardar ultimo usuario logeado si le da a recordar usuario
function recuerdaUsuario(recordarUsuario){
    if(recordarUsuario.checked==true){
        const gmail=document.querySelector('#idEmail').value;
        const contrasena=document.querySelector('#idContrasena').value;
        ultimoUsuario={email:gmail,contrasenia:contrasena};
    }else{
        ultimoUsuario=false;
    }
    return ultimoUsuario;
}
function cargaUltimoUsuarioLocalStorage(){
    if(window.localStorage.getItem('usuarioRecordado')){
        ultimoUsuario=JSON.parse(window.localStorage.getItem('usuarioRecordado'));
    }
}
//--------------------

//LocalStorage
//--------------------

//guarda el usuario en el local
function guardarUsuarioEnLocalStorage(e){
    const gmail=document.querySelector('#idEmail').value;
    const contrasena=document.querySelector('#idContrasena').value;
    const encontrado=!!usuarios.find(usuario=>usuario.email===gmail);
    if(encontrado){
        e.preventDefault();
    }else{
        const usuario={email:gmail,contrasenia:contrasena};
        usuarios.push(usuario);
        window.localStorage.setItem('usuarios',JSON.stringify(usuarios));
    }
}

//carga el local al carrito y asi se va ampliando la cantidad de usuarios en el array
function cargarUsuarioDesdeLocalStorage(){
    if (window.localStorage.getItem("usuarios"))
        usuarios=JSON.parse(window.localStorage.getItem("usuarios"));
}
//--------------------
function cargarRegistroNoUsuarios(){
    if(usuarios==''){
        registro();
    }else{
        inicioSesion();
    }
}


window.addEventListener('load',cargarUsuarioDesdeLocalStorage);
window.addEventListener('load',cargaUltimoUsuarioLocalStorage);
window.addEventListener('load',cargarRegistroNoUsuarios);