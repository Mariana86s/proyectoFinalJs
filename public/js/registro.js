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
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    usuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    alert("Usuario registrado correctamente ✅");
});




