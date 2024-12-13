const contraInput = document.querySelector('.contra'); // Selecciona el elemento con la clase 'contra'
const validarElement = document.querySelector('.valid'); // Selecciona el elemento con la clase 'valid'

contraInput.addEventListener('focus', () => {
    validarElement.style.display = 'block'; // Muestra el elemento 'validarElement' cuando el campo de contraseña obtiene el enfoque
});

contraInput.addEventListener('blur', () => {
    validarElement.style.display = 'none'; // Oculta el elemento 'validarElement' cuando el campo de contraseña pierde el enfoque
});

(function() {
    const boton = document.querySelector('.pointer'); // Selecciona el elemento con la clase 'pointer'
    let contra = document.querySelector('.contra'); // Selecciona el elemento con la clase 'contra'
    let texto = {
        cantidad: document.querySelector('.validar .cantidad'), // Selecciona el elemento con la clase 'cantidad' dentro de '.validar'
        minu: document.querySelector('.validar .minu'), // Selecciona el elemento con la clase 'minu' dentro de '.validar'
        mayu: document.querySelector('.validar .mayu'), // Selecciona el elemento con la clase 'mayu' dentro de '.validar'
        especial: document.querySelector('.validar .especial') // Selecciona el elemento con la clase 'especial' dentro de '.validar'
    };

    contra.addEventListener("keyup", function() {
        patternTest(pattern.cantidad(), texto.cantidad); // Verifica el patrón 'cantidad' y muestra u oculta el elemento de texto correspondiente
        patternTest(pattern.mayu(), texto.mayu); // Verifica el patrón 'mayu' y muestra u oculta el elemento de texto correspondiente
        patternTest(pattern.minu(), texto.minu); // Verifica el patrón 'minu' y muestra u oculta el elemento de texto correspondiente
        patternTest(pattern.especial(), texto.especial); // Verifica el patrón 'especial' y muestra u oculta el elemento de texto correspondiente

        if (
            hasClass(texto.cantidad, "valido") &&
            hasClass(texto.minu, "valido") &&
            hasClass(texto.mayu, "valido") &&
            hasClass(texto.especial, "valido")
        ) {
            addClass(contra.parentElement, "valido"); // Agrega la clase 'valido' al elemento padre del campo de contraseña
            boton.style.pointerEvents = "auto"; // Habilita los eventos de puntero en el elemento 'boton'
        } else {
            removeClass(contra.parentElement, "valido"); // Remueve la clase 'valido' del elemento padre del campo de contraseña
            boton.style.pointerEvents = "none"; // Deshabilita los eventos de puntero en el elemento 'boton'
        }
    });

    let pattern = {
        cantidad: function() {
            if (contra.value.length >= 8) {
                return true;
            }
        },
        minu: function() {
            let regex = /^(?=.*[a-z]).+$/;
            if (regex.test(contra.value)) {
                return true;
            }
        },
        mayu: function() {
            let regex = /^(?=.*[A-Z]).+$/;
            if (regex.test(contra.value)) {
                return true;
            }
        },
        especial: function() {
            let regex = /^(?=.*[0-9\W]).+$/;
            if (regex.test(contra.value)) {
                return true;
            }
        }
    };

    function removeClass(el, className) {
        if (el.classList) el.classList.remove(className); // Remueve la clase 'className' del elemento 'el' si tiene el método 'classList'
        else {
            el.className = el.className.replace(
                new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " "
            ); // Remueve la clase 'className' del elemento 'el' utilizando expresiones regulares
        }
    }

    function hasClass(el, className) {
        if (el.classList) {
            console.log(el.classList);
            return el.classList.contains(className); // Verifica si el elemento 'el' tiene la clase 'className'
        } else {
            return new RegExp("(^| )" + className + "( |$)", "gi").test(el.className); // Verifica si el elemento 'el' tiene la clase 'className' utilizando expresiones regulares
        }
    }

    function patternTest(pattern, response) {
        if (pattern) {
            addClass(response, "valido"); // Agrega la clase 'valido' al elemento 'response'
        } else {
            removeClass(response, "valido"); // Remueve la clase 'valido' del elemento 'response'
        }
    }

    function addClass(el, className) {
        if (el.classList) {
            el.classList.add(className); // Agrega la clase 'className' al elemento 'el' si tiene el método 'classList'
        } else {
            el.className += " " + className; // Agrega la clase 'className' al elemento 'el' concatenándolaEl código que proporcionaste contiene comentarios para explicar el propósito de cada sección. Aquí está el código con los comentarios añadidos:
        }
    }
})();