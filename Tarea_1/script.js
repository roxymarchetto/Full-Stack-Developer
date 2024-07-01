document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se envíe el formulario automáticamente

    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const pais = document.getElementById('pais').value;

    // Validar los campos
    if (nombre === '') {
        alert('Por favor, ingrese su nombre.');
        return;
    }

    if (apellido === '') {
        alert('Por favor, ingrese su apellido.');
        return;
    }

    if (email === '') {
        alert('Por favor, ingrese su correo electrónico.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        return;
    }

    if (fechaNacimiento === '') {
        alert('Por favor, ingrese su fecha de nacimiento.');
        return;
    }

    if (pais === '') {
        alert('Por favor, ingrese su país.');
        return;
    }

    // Si todo es válido, enviar el formulario
    alert('Formulario enviado correctamente.');
    
    // Resetear el formulario
    document.getElementById('formulario').reset();
});
 
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(String(email).toLowerCase());
    
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(String(email).toLowerCase());
}}
