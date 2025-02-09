// let button_submit = document.getElementById("submit")

// function submitData(data){
//         let data_string = JSON.stringify(data)
//         localStorage.setItem("user", data_string)
// }

// button_submit.addEventListener("click", (e) =>{
//     e.preventDefault()
    
//     let Nombre = document.getElementById("correo electronico").value
//     let Usuario = document.getElementById("ubicacion").value
//     let librofavorito = document.getElementById("biografia").value
//     const data = {
//         librofavorito: librofavorito,
//         Nombre: Nombre,
//         Usuario: Usuario,
//         }
//         submitData(data)
// })

// let button_submit = document.getElementById("submit");

// function submitData(data) {

//     localStorage.setItem("librofavorito", JSON.stringify(data.librofavorito));
//     localStorage.setItem("Nombre", JSON.stringify(data.Nombre));
//     localStorage.setItem("Usuario", JSON.stringify(data.Usuario));
// }

// button_submit.addEventListener("click", (e) => {
//     e.preventDefault();
    

//     let Nombre = document.getElementById("correo electronico").value;
//     let Usuario = document.getElementById("ubicacion").value;
//     let librofavorito = document.getElementById("biografia").value;

//     const data = {
//         librofavorito: librofavorito,
//         Nombre: Nombre,
//         Usuario: Usuario,
//     };

//     submitData(data);
// });

let button_submit = document.getElementById("submit");

function submitData(data) {
    // Guardar cada propiedad en localStorage con una clave única
    localStorage.setItem("librofavorito", JSON.stringify(data.librofavorito));
    localStorage.setItem("Nombre", JSON.stringify(data.Nombre));
    localStorage.setItem("Usuario", JSON.stringify(data.Usuario));
}

// Función para cerrar sesión
function logout() {
    // Limpiar los datos de inicio de sesión del localStorage
    localStorage.removeItem("librofavorito");
    localStorage.removeItem("Nombre");
    localStorage.removeItem("Usuario");
    // Redirigir al usuario a la página de inicio de sesión
    window.location.replace("/login.html");
}

button_submit.addEventListener("click", (e) => {
    e.preventDefault();
    
    let Nombre = document.getElementById("nombre").value;
    let Usuario = document.getElementById("usuario").value;
    let librofavorito = document.getElementById("librofavorito").value;

    const data = {
        librofavorito: librofavorito,
        Nombre: Nombre,
        Usuario: Usuario,
    };

    submitData(data);
});

// Llama a la función logout cuando sea necesario, por ejemplo, al hacer clic en un botón de cerrar sesión
document.getElementById("logout").addEventListener("click", logout);