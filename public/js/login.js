const btnIngresar = document.getElementById("ingresar");
const inputUsuario = document.getElementById("usuario");
const inputContraseña = document.getElementById("contraseña");

btnIngresar.addEventListener("click", () => {
  const usuario = inputUsuario.value.trim();
  const contraseña = inputContraseña.value.trim();

  if (usuario === "" || contraseña === "") {
    alert("Por favor, completa todos los campos :)");
    return;
  }
  if (usuario === "admin" && contraseña === "1234") {
    alert("¡Bienvenida, Francella! Acceso concedido.");
  } else {
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
 const encontrado = usuarios.find(u => u.usuario === usuario && u.password === contraseña);
    if (encontrado) {
        alert("¡Bienvenido, " + encontrado.nombre + "! Acceso concedido.");
        localStorage.setItem("usuarioActivo", JSON.stringify(encontrado)); 
    } else {
        alert("Usuario o contraseña incorrectos.");
    }

  }
});
