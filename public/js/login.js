
//Capturamos los elementos del DOM
const btnIngresar = document.getElementById("ingresar");
const inputUsuario = document.getElementById("usuario");
const inputContraseña = document.getElementById("contraseña");

//Agregamos evento al botón
btnIngresar.addEventListener("click", () => {
  const usuario = inputUsuario.value.trim();
  const contraseña = inputContraseña.value.trim();

  //Validamos los campos
  if (usuario === "" || contraseña === "") {
    alert("Por favor, completa todos los campos.");
    return;
  }

  // Simulamos verificación (puedes conectar con base de datos luego)
  if (usuario === "admin" && contraseña === "1234") {
    alert("¡Bienvenida, Francella! Acceso concedido.");
    // Aquí podrías redirigir a otra página:
    // window.location.href = "dashboard.html";
  } else {
    alert("Usuario o contraseña incorrectos.");
  }
});