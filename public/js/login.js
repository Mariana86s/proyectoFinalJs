document.addEventListener('DOMContentLoaded', () => {
  const btnIngresar = document.getElementById("ingresar");
  const inputUsuario = document.getElementById("usuario");
  const inputContraseña = document.getElementById("contraseña");

  // Solo para pruebas: inicializa usuarios si no existen
  if (!localStorage.getItem('usuarios')) {
    const usuariosDemo = [
      { nombre: "juan", password: "123" },
      { nombre: "maria", password: "abc" }
    ];
    localStorage.setItem('usuarios', JSON.stringify(usuariosDemo));
  }
<<<<<<< HEAD

  btnIngresar.addEventListener("click", (e) => {
    e.preventDefault(); // Si está dentro de un form

    const usuario = inputUsuario.value.trim();
    const contraseña = inputContraseña.value.trim();

    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

    const usuarioEncontrado = usuarios.find(u =>
      u.nombre === usuario && u.password === contraseña
    );

    if (!usuarioEncontrado) {
      alert("usuario no encontrado");
      return;
    }

    alert("usuario iniciado");
    window.location.href = "solicitud.html"; // Ajusta según tu estructura
  });
=======
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
>>>>>>> 5a5ee9d5a9e7cfbd0d775b81fc758dc136accee1
});
