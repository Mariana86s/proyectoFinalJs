import { getData } from "../services/fetch.js";

const btnIngresar = document.getElementById("ingresar");
const inputUsuario = document.getElementById("usuario");
const inputContraseña = document.getElementById("contraseña");

btnIngresar.addEventListener("click", async (e) => {
  e.preventDefault();

  const usuario = inputUsuario.value.trim();
  const contraseña = inputContraseña.value.trim();

  if (!usuario || !contraseña) {
    alert("Por favor, completa ambos campos.");
    return;
  }

  try {
    const usuarios = await getData("usuarios");

    const encontrado = usuarios.find(
      (u) => u.nombre === usuario && u.contraseña === contraseña
    );

    if (!encontrado) {
      alert("Usuario no registrado ❌");
      return;
    }

    alert("Inicio de sesión exitoso ✅");
    window.location.href = "../pages/solicitud.html";
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    alert("Hubo un problema al iniciar sesión. Intenta de nuevo más tarde.");
  }
});