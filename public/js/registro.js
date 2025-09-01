<<<<<<< HEAD
import { postData } from "../services/fetch.js"
const sede = document.getElementById("sede")
const nacimiento = document.getElementById("nacimiento")
const telefono = document.getElementById("telefono")
const nombreUsuario = document.getElementById("usuario")
const nombreCompleto = document.getElementById("nombre")
const contraseña = document.getElementById("contraseña")
const btnIngresar = document.getElementById("btnIngresar")
=======
>>>>>>> 373fdcfa512a822bdb697a520c3cb0db13fc2043

btnIngresar.addEventListener("click", async function () {
    const usuario = {
        sede: sede.value,
        nacimiento: nacimiento.value,
        telefono: telefono.value,
        nombre: nombreCompleto.value,
        contraseña: contraseña.value,
        usuario: nombreUsuario.value
    };
<<<<<<< HEAD
    const peticion = await postData(usuario,"usuarios")
    console.log(peticion);
    alert("Usuario registrado correctamente ✅");
    window.location.href = "../pages/login.html";
});



=======
>>>>>>> 373fdcfa512a822bdb697a520c3cb0db13fc2043

    try {
        const peticion = await postData(usuario, "usuarios");
        console.log(peticion);
        alert("Usuario registrado correctamente ✅");
    } catch (error) {
        console.error("Error al registrar el usuario:", error);
        alert("Hubo un problema al registrar el usuario ❌");
    }
});