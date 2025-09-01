const sede = document.getElementById("sede");
const nacimiento = document.getElementById("nacimiento");
const telefono = document.getElementById("telefono");
const nombreUsuario = document.getElementById("usuario");
const nombreCompleto = document.getElementById("nombre");
const contraseña = document.getElementById("contraseña");
const btnIngresar = document.getElementById("btnIngresar");

btnIngresar.addEventListener("click", async function () {
    const usuario = {
        sede: sede.value,
        nacimiento: nacimiento.value,
        telefono: telefono.value,
        nombre: nombreCompleto.value,
        contraseña: contraseña.value,
        usuario: nombreUsuario.value
    };

    try {
        const peticion = await postData(usuario, "usuarios");
        console.log(peticion);
        alert("Usuario registrado correctamente ✅");
    } catch (error) {
        console.error("Error al registrar el usuario:", error);
        alert("Hubo un problema al registrar el usuario ❌");
    }
});