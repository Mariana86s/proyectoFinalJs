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
});
