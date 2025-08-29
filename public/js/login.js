import { getData } from "../services/fetch.js";

const btnIngresar = document.getElementById("ingresar");
const inputUsuario = document.getElementById("usuario");
const inputContraseña = document.getElementById("contraseña");

btnIngresar.addEventListener("click", async() => {
  const usuarios = await getData("usuarios")
  const usuario = inputUsuario.value.trim();
  const contraseña = inputContraseña.value.trim();
  const usuarioEncontrado = usuarios.find((usuarioR)=> usuarioR.nombre === usuario && usuarioR.password === contraseña)

  if (!usuarioEncontrado) {
      alert("no existe")
  }
  if (usuarioEncontrado) {
    alert("usuario iniciado")
    // redirección a la otra página usando window.location.href
    
  }
});
