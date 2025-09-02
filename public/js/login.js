// Importa la función getData desde el archivo fetch.js
import { getData } from "../services/fetch.js";

// Obtiene referencias a los elementos del DOM
const btnIngresar = document.getElementById("ingresar");
const inputUsuario = document.getElementById("usuario");
const inputContraseña = document.getElementById("contraseña");

// Agrega un listener al botón "Ingresar"
btnIngresar.addEventListener("click", async (e) => {
 e.preventDefault(); // Evita que el formulario se envíe automáticamente

  // Obtiene y limpia los valores de los campos de entrada
  const usuario = inputUsuario.value.trim();
  const contraseña = inputContraseña.value.trim();

  // Verifica que ambos campos estén completos
  if (!usuario || !contraseña) {
    alert("Por favor, completa ambos campos.");
    return;
  }

  try {
    // Obtiene la lista de usuarios desde el servicio
    const usuarios = await getData("usuarios");

    // Busca si existe un usuario con el usuario y contraseña proporcionados
    const encontrado = usuarios.find(
      (u) => u.usuario === usuario && u.password === contraseña
    );

    // Verifica si el usuario encontrado también es administrador
    const encontradoAdmin = usuarios.find(
      (u) => u.usuario === usuario && u.password === contraseña && u.tipoUsuario === "admin"
    );

    // Si no se encuentra ningún usuario válido, muestra un mensaje de error
    if (!encontrado) {
      alert("Usuario no registrado ❌");
      return;
    }

    // Si el usuario es administrador, redirige al historial
    if (encontradoAdmin) {
      window.location.href = "../pages/historial.html";
      return;
    }

    // Si es un usuario regular, muestra mensaje de éxito y redirige a solicitud
    alert("Inicio de sesión exitoso ✅");
    window.location.href = "../pages/solicitud.html";

  } catch (error) {
    // Maneja errores en la obtención de datos
    console.error("Error al obtener los datos:", error);
    alert("Hubo un problema al iniciar sesión. Intenta de nuevo más tarde.");
  }
});