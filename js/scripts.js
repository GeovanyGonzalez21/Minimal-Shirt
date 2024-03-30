/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
function validarNumero(input) {
    var regex = /^[0-9]{8}$/; // Expresión regular para verificar que el número tenga exactamente 8 dígitos
    var numero = input.value.trim();

    if (regex.test(numero)) {
        document.getElementById("mensajeError").textContent = ""; // Borra el mensaje de error
        document.getElementById("mensajeExito").textContent = "Número válido"; // Muestra mensaje de éxito
        document.getElementById("phone").classList.remove("is-invalid"); // Quita la clase de inválido si estaba presente
        document.getElementById("phone").classList.add("is-valid"); // Agrega la clase de válido
    } else {
        document.getElementById("mensajeError").textContent = "Ingrese un número válido (exactamente 8 dígitos)"; // Muestra mensaje de error
        document.getElementById("mensajeExito").textContent = ""; // Borra el mensaje de éxito
        document.getElementById("phone").classList.remove("is-valid"); // Quita la clase de válido si estaba presente
        document.getElementById("phone").classList.add("is-invalid"); // Agrega la clase de inválido
    }
}
function validarFormulario() {
    var nombre = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var mensaje = document.getElementById("message").value.trim();
    
    var nombreValido = validarCampo(nombre, "name");
    var emailValido = validarCampo(email, "email");
    var mensajeValido = validarCampo(mensaje, "message");
    
    return nombreValido && emailValido && mensajeValido;
}

function validarCampo(valor, campo) {
    var valido = true;
    var mensajeError = "";

    if (valor === "") {
        valido = false;
        mensajeError = "Este campo es obligatorio.";
    } else if (campo === "email" && !validarEmail(valor)) {
        valido = false;
        mensajeError = "El formato del correo electrónico no es válido.";
    }

    var elementoError = document.querySelector(`.invalid-feedback[data-sb-feedback="${campo}:required"]`);
    if (elementoError) {
        if (valido) {
            elementoError.style.display = "none";
        } else {
            elementoError.textContent = mensajeError;
            elementoError.style.display = "block";
        }
    }

    return valido;
}
//Valir email
function validarEmail(input) {
    var regex = /\S+@\S+\.\S+/;
    //Con esto eliminamos espaciados en la cadena
    var email = input.value.trim();
    if (regex.test(email)) {
        document.getElementById("mensajeError").textContent = ""; // Borra el mensaje de error
        document.getElementById("mensajeExito").textContent = "Correo eléctronico correcto"; // Muestra mensaje de éxito
        document.getElementById("email").classList.remove("is-invalid"); // Quita la clase de inválido si estaba presente
        document.getElementById("email").classList.add("is-valid"); // Agrega la clase de válido
    } else {
        document.getElementById("mensajeError").textContent = "Ingrese un correo electónico válido"; // Muestra mensaje de error
        document.getElementById("mensajeExito").textContent = ""; // Borra el mensaje de éxito
        document.getElementById("email").classList.remove("is-valid"); // Quita la clase de válido si estaba presente
        document.getElementById("email").classList.add("is-invalid"); // Agrega la clase de inválido
    }
}
//Validar nombres
function ValidarNombre(input) {
    // Realizamos la expresión regular
    // Acepta tildes tantos en los nombres y apellidos
    var regex = /^[A-Za-zá-íóúüÜÉÑñ\s-]+$/;
    // Elimina espacios en la cadena
    var nombre = input.value.trim();
    if (regex.test(nombre)) {
        document.getElementById("mensajeError").textContent = ""; // Borra el mensaje de error
        document.getElementById("mensajeExito").textContent = "Nombre escrito de forma correcta"; // Muestra mensaje de éxito
        document.getElementById("nombre").classList.remove("is-invalid"); // Quita la clase de inválido si estaba presente
        document.getElementById("nombre").classList.add("is-valid"); // Agrega la clase de válido.
    } else {
        document.getElementById("mensajeError").textContent = "Ingrese un nombre correcto";
        document.getElementById("mensajeExito").textContent = ""; // Borra el mensaje de éxito
        document.getElementById("nombre").classList.remove("is-valid"); // Quita la clase de válido si estaba presente
        document.getElementById("nombre").classList.add("is-invalid"); // Agrega la clase de inválido.
    }
}

//Validar direccion
     //Realizamos la expresión regular
     //Acepta parentesis, tildes, #
     //No acepta simbolos commo $, y derivados, tampoco corchetes
    function ValidarDireccion(direccion) {
    var regex = /^[A-Za-zá-íóúüíóúüÜÉÑñ0-9\s,()"'-]+$/;
    if (regex.test(direccion)) {
        document.getElementById("mensajeError").textContent = ""; // Borra el mensaje de error
        document.getElementById("mensajeExito").textContent = "Dirección escrita de forma correcta";
        document.getElementById("direccion").classList.remove("is-invalid"); // Quita la clase de inválido si estaba presente
        document.getElementById("direccion").classList.add("is-valid"); // Agrega la clase de válido
    } else {
        document.getElementById("mensajeError").textContent = "Ingrese una dirección correcta";
        document.getElementById("mensajeExito").textContent = ""; // Borra el mensaje de éxito
        document.getElementById("direccion").classList.remove("is-valid"); // Quita la clase de válido si estaba presente
        document.getElementById("direccion").classList.add("is-invalid"); // Agrega la clase de inválido
    }
}
//Función para cambiar el color de los cuadros de texto
function updateColor() {
    var colorSelector = document.getElementById("colorSelector");
    var colorBox = document.getElementById("colorBox");
    var selectedColor = colorSelector.value;
    colorBox.style.backgroundColor = selectedColor;
    // Cambiar el color del texto según la selección
    colorBox.style.color = (selectedColor === "Negro" || selectedColor === "Dorado") ? "white" : "black";
}    
