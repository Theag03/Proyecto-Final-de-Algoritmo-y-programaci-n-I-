// Función para cerrar sesión
function logout() {
    // Limpiar los datos de inicio de sesión del localStorage
    localStorage.removeItem("user");
    // Redirigir al usuario a la página de inicio de sesión
    window.location.replace("/login.html");
}

// Llama a la función logout cuando sea necesario, por ejemplo, al hacer clic en un botón de cerrar sesión
document.getElementById("logout").addEventListener("click", logout);