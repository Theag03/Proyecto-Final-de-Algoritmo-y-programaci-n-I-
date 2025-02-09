let button_submit = document.getElementById("submit");

function validateForm(username, password) {
    let errors = [];

    if (!username) {
        errors.push("El usuario es obligatorio.");
    }
    if (!password) {
        errors.push("La contraseña es obligatoria.");
    }

    return errors;
}

button_submit.addEventListener("click", (e) => {
    e.preventDefault();

    let username = document.getElementById("usuario").value;
    let password = document.getElementById("contraseña").value;

    const errors = validateForm(username, password);

    if (errors.length > 0) {
        // Mostrar errores al usuario
        alert(errors.join("\n"));
    } else {
        // Recuperar datos del localStorage
        const storedData = JSON.parse(localStorage.getItem("user"));

        // Verificar si el usuario y la contraseña coinciden
        if (storedData && storedData.username === username && storedData.password === password) {
            alert("Inicio de sesión exitoso:", storedData);
            // Redirigir a la página de inicio
        window.location.replace("/Index.html");
    } else {
        alert("Nombre de usuario o contraseña incorrectos.");
    }
}
});

