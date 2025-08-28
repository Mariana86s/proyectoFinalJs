import { postData } from "../services/fetch.js"
const sede = document.getElementById("sede")
const nacimiento = document.getElementById("nacimiento")
const telefono = document.getElementById("telefono")
const nombreCompleto = document.getElementById("nombre")
const contraseña = document.getElementById("contraseña")
const btnIngresar = document.getElementById("btnIngresar")

btnIngresar.addEventListener("click", async function () {
    /*
        Llamamos al postData para poder pasar la información
    */
    const usuario = {
        sede: sede.value,
        nacimiento: nacimiento.value,
        telefono: telefono.value,
        nombreCompleto: nombreCompleto.value,
        contraseña: contraseña.value
    };
    const peticion = await postData(usuario);
});




