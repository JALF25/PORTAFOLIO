const datos={
    nombre:'',
    telefono:'',
    email:'',
    mensaje:''
}
const nombre=document.querySelector('#nombre');
const telefono=document.querySelector('#telefono');
const correo=document.querySelector('#email');
const txt=document.querySelector('#mensaje');
nombre.addEventListener('input',leertxt);
telefono.addEventListener('input',leertxt);
correo.addEventListener('input',leertxt);
txt.addEventListener('input',leertxt);

const formulario=document.querySelector('.formulario');

formulario.addEventListener('submit',function(evento){
    evento.preventDefault();

    const {nombre,telefono,email,mensaje}=datos;

    if(nombre==''||telefono==''||email==''||mensaje==''){
        mostraralerta('Todos los campos deben de estar llenos',true);
        return;
    }
    mostraralerta('Enviando Formulario');
});

function leertxt(e){
    //console.log(e.target.value);
    datos[e.target.id]=e.target.value;
    console.log(datos);
}

function mostraralerta(mensaje,error=null){
    const alerta=document.createElement('p');
    alerta.textContent=mensaje;

    if(error){
        alerta.classList.add('error');
    }
    else{
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    setTimeout(()=>{
        alerta.remove();
    },2500);
}