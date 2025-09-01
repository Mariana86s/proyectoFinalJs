import { postData } from "../services/fetch.js";
btnSolicitar.addEventListener('click', async function () {
    const formulario = document.getElementById('formulario');
    const usuario = document.getElementById('nombreUsuario').value;
    const sede = document.getElementById('sedeUsuario').value;
    const fecha = document.getElementById('fechaConsulta').value;
    const codigo = document.getElementById('codigoCompu').value;
    const consulta = document.getElementById('consulta').value;
    const terminos = document.querySelector('input[type="checkbox"]').checked;

    if (!usuario || !sede || !fecha || !codigo) {
        alert('Por favor, completa todos los campos.');
        return;
    }
    if (!terminos) {
        alert('Debes aceptar los Términos y Condiciones.');
        return;
    }
    alert('Formulario enviado correctamente (sin backend).');
    formulario.reset();
    const solicitudes = {
        usuario: usuario,
        sede: sede,
        fecha: fecha,
        codigo: codigo,
        consulta:consulta,
        hora: "",
        estado: "Pendiente"
    }
    const endpoint = "consultas";
    const peticion = await postData(solicitudes, endpoint);
    console.log(peticion);
 
    let solicitudesGuardadas = JSON.parse(localStorage.getItem("solicitudes")) || [];
        solicitudesGuardadas.push(solicitudes);
    localStorage.setItem("solicitudes", JSON.stringify(solicitudesGuardadas));
    console.log("Solicitud guardada en localStorage:", solicitudes);
});
