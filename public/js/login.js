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
    alert("Usuario o contraseña incorrectos.");
  }
});
