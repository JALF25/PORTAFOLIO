// Definición del objeto datos con propiedades nombre y cedula
const datos = {
  nombre: '',
  cedula: ''
};

// Selección del elemento HTML con el ID "nombre" y se agrega un evento "input" que llama a la función leertxt
const nombre = document.querySelector('#nombre');
nombre.addEventListener('input', leertxt);

// Selección del elemento HTML con el ID "cedula" y se agrega un evento "input" que llama a la función leertxt
const cedula = document.querySelector('#cedula');
cedula.addEventListener('input', leertxt);

// Selección del elemento HTML con la clase "formulario"
const formulario = document.querySelector('.formulario');

// Agregar un evento "submit" al formulario que llama a una función anónima cuando se envía el formulario
formulario.addEventListener('submit', function(evento) {
  evento.preventDefault(); // Evita que se envíe el formulario

  const { nombre, cedula } = datos; // Desestructuración de las propiedades nombre y cedula del objeto datos

  // Verificar si alguno de los campos nombre o cedula está vacío
  if (nombre == '' || cedula == '') {
    return; // No hacer nada si alguno de los campos está vacío
  }

  mostraralerta('Enviando Formulario'); // Llamar a la función mostraralerta con el mensaje "Enviando Formulario"
});

// Función que se ejecuta cada vez que se ingresa texto en los campos nombre o cedula
function leertxt(e) {
  datos[e.target.id] = e.target.value; // Guardar el valor ingresado en el objeto datos utilizando el ID del campo como clave
  console.log(datos); // Imprimir el objeto datos en la consola
}

// Función que muestra una alerta en el formulario con el mensaje proporcionado
function mostraralerta(mensaje) {
  const alerta = document.createElement('p'); // Crear un elemento de párrafo
  alerta.textContent = mensaje; // Establecer el contenido de texto del elemento como el mensaje proporcionado

  alerta.classList.add('correcto'); // Agregar la clase "correcto" al elemento de alerta

  formulario.appendChild(alerta); // Agregar el elemento de alerta como hijo del formulario

  // Eliminar el elemento de alerta después de 2 segundos
  setTimeout(() => {
    alerta.remove();
  }, 2000);

  // Redirigir al usuario a la página "home.html" después de otros 2 segundos
  setTimeout(() => {
    window.location.href = 'home.html';
  }, 2000);
}
