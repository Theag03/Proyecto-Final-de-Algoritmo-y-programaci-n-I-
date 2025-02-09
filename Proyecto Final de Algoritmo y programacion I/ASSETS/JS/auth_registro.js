let button_submit = document.getElementById("submit")

function submitData(data){
        let data_string = JSON.stringify(data)
        localStorage.setItem("user", data_string)
}

function validateForm(nombre, username, email, password, telefono) {
    let errors = [];

    if (!nombre) {
        errors.push("El nombre es obligatorio.");
    }
    if (!username) {
        errors.push("El usuario es obligatorio.");
    }
    if (!email) {
        errors.push("El correo electrónico es obligatorio.");
    } else {
        // Validar formato de correo electrónico
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            errors.push("El correo electrónico no es válido.");
        }
    }
    if (!password) {
        errors.push("La contraseña es obligatoria.");
    }
    if (!telefono) {
        errors.push("El teléfono es obligatorio.");
        } else {
        // Validar que el teléfono contenga solo números
        const telefonoPattern = /^[0-9]+$/;
        if (!telefonoPattern.test(telefono)) {
            errors.push("El teléfono solo puede contener números.");
        }
    }

    return errors;
}

button_submit.addEventListener("click", (e) => {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let username = document.getElementById("usuario").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("contraseña").value;
    let telefono = document.getElementById("telefono").value;

    const errors = validateForm(nombre, username, email, password, telefono);

    if (errors.length > 0) {
        // Mostrar errores al usuario
        alert(errors.join("\n"));
    } else {
        const data = {
            nombre: nombre,
            username: username,
            email: email,
            telefono: telefono,
            password: password,
        };
        submitData(data);
        // Limpiar el formulario después de guardar
        clearForm();
        window.location.replace("/Login.html");
    }
});

// Función para limpiar el formulario
function clearForm() {
    document.getElementById("nombre").value = '';
    document.getElementById("usuario").value = '';
    document.getElementById("email").value = '';
    document.getElementById("contraseña").value = '';
    document.getElementById("telefono").value = '';
}