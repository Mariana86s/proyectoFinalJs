import { getData } from "../services/fetch.js";

const btnIngresar = document.getElementById("ingresar");
const inputUsuario = document.getElementById("usuario");
const inputContraseña = document.getElementById("contraseña");

btnIngresar.addEventListener("click", async (e) => {
  e.preventDefault();
  const usuario = inputUsuario.value.trim();
  const contraseña = inputContraseña.value.trim();
  const usuarios = await getData("usuarios");
  const encontrado = usuarios.find(u => u.nombre === usuario && u.password === contraseña);
  if (!encontrado) {
    alert("Usuario no registrado");
    return; 
  }
  window.location.href = "../pages/solicitud.html";
});