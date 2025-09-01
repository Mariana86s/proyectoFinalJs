const sede = document.getElementById("sede");
const nacimiento = document.getElementById("nacimiento");
const telefono = document.getElementById("telefono");
const nombreUsuario = document.getElementById("usuario");
const nombreCompleto = document.getElementById("nombre");
const contraseña = document.getElementById("contraseña");
const btnIngresar = document.getElementById("btnIngresar");

btnIngresar.addEventListener("click", function () {
    const usuario = {
        sede: sede.value,
        nacimiento: nacimiento.value,
        telefono: telefono.value,
<<<<<<< HEAD
        nombre: nombreCompleto.value,
        contraseña: contraseña.value,
        usuario: nombreUsuario.value
    };

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    usuarios.push(usuario);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Usuario registrado correctamente (guardado en tu navegador).");

    document.getElementById("formRegistro").reset();

    window.location.href = "login.html";
=======
        nombre:nombreCompleto.value,
        password:contraseña.value,
        usuario: nombreUsuario.value

    };
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    usuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    alert("Usuario registrado correctamente ✅");
>>>>>>> 5a5ee9d5a9e7cfbd0d775b81fc758dc136accee1
});
