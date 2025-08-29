import { postData } from "../services/fetch.js"
const sede = document.getElementById("sede")
const nacimiento = document.getElementById("nacimiento")
const telefono = document.getElementById("telefono")
const nombreCompleto = document.getElementById("nombre")
const nombreUsuario = document.getElementById("usuario")
const contraseña = document.getElementById("password")
const btnIngresar = document.getElementById("btnIngresar")

btnIngresar.addEventListener("click", async function () {
    const usuario = {
        sede: sede.value,
        nacimiento: nacimiento.value,
        telefono: telefono.value,
        nombreCompleto: nombre.value,
        contraseña: contraseña.value,
        nombreUsuario: usuario.value
        
    };
    const peticion = await postData(usuario,"usuarios");
});




