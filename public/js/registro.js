// Agrega un listener al botón "Ingresar" que se ejecuta cuando se hace clic
btnIngresar.addEventListener("click", async function () {
  
  // Crea un objeto 'usuario' con los datos ingresados por el usuario en el formulario
  const usuario = {
    sede: sede.value,                     // Sede seleccionada
    nacimiento: nacimiento.value,         // Fecha de nacimiento
    telefono: telefono.value,             // Número de teléfono
    nombre: nombreCompleto.value,         // Nombre completo
    contraseña: contraseña.value,         // Contraseña elegida
    usuario: nombreUsuario.value,         // Nombre de usuario
    tipoUsuario: "estudiante"             // Tipo de usuario fijo como "estudiante"
  };

  try {
    // Envía los datos del usuario al servidor usando la función postData
    const peticion = await postData(usuario, "usuarios");

    // Muestra en consola la respuesta del servidor (útil para depuración)
    console.log(peticion);

    // Notifica al usuario que el registro fue exitoso
    alert("Usuario registrado correctamente ✅");
  } catch (error) {
    // Si ocurre un error durante el registro, lo muestra en consola
    console.error("Error al registrar el usuario:", error);

    // Muestra una alerta indicando que hubo un problema
    alert("Hubo un problema al registrar el usuario ❌");
  }
});