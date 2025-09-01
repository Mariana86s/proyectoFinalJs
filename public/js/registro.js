import { postData } from "../services/fetch.js"
const sede = document.getElementById("sede")
const nacimiento = document.getElementById("nacimiento")
const telefono = document.getElementById("telefono")
const nombreUsuario = document.getElementById("usuario")
const nombreCompleto = document.getElementById("nombre")
const contraseña = document.getElementById("contraseña")
const btnIngresar = document.getElementById("btnIngresar")

btnIngresar.addEventListener("click", async function () {
    const usuario = {
        sede: sede.value,
        nacimiento: nacimiento.value,
        telefono: telefono.value,
        nombre:nombreCompleto.value,
        password:contraseña.value,
        usuario: nombreUsuario.value

    };
    const peticion = await postData(usuario,"usuarios")
    console.log(peticion);
    alert("Usuario registrado correctamente ✅");
    window.location.href = "../pages/login.html";
});




