// Importa la función postData desde el archivo fetch.js
import { postData } from "../services/fetch.js";

// Agrega un listener al botón con id 'btnSolicitar' que se ejecuta al hacer clic
btnSolicitar.addEventListener('click', async function () {

  // Obtiene el formulario por su id
  const formulario = document.getElementById('formulario');

  // Captura los valores ingresados por el usuario en los distintos campos del formulario
  const usuario = document.getElementById('nombreUsuario').value;       // Nombre de usuario
  const sede = document.getElementById('sedeUsuario').value;            // Sede seleccionada
  const fecha = document.getElementById('fechaConsulta').value;         // Fecha de consulta
  const codigo = document.getElementById('codigoCompu').value;          // Código del equipo
  const consulta = document.getElementById('consulta').value;           // Texto de la consulta
  const terminos = document.querySelector('input[type="checkbox"]').checked; // Verifica si se aceptaron los términos

  // Validación: Verifica que los campos obligatorios no estén vacíos
  if (!usuario || !sede || !fecha || !codigo) {
    alert('Por favor, completa todos los campos.');
    return;
  }

  // Validación: Verifica que se hayan aceptado los términos y condiciones
  if (!terminos) {
    alert('Debes aceptar los Términos y Condiciones.');
    return;
  }

  // Muestra una alerta indicando que el formulario fue enviado correctamente
  alert('Formulario enviado correctamente (sin backend).');

  // Limpia el formulario después del envío
  formulario.reset();

  // Crea un objeto con los datos de la solicitud
  const solicitudes = {
    usuario: usuario,
    sede: sede,
    fecha: fecha,
    codigo: codigo,
    consulta: consulta,
    hora: "",                     // Campo vacío, posiblemente para completarse más adelante
    estado: "Pendiente"           // Estado inicial de la solicitud
  };

  // Define el endpoint al que se enviarán los datos
  const endpoint = "consultas";

  // Envía los datos al servidor usando postData
  const peticion = await postData(solicitudes, endpoint);

  // Muestra en consola la respuesta del servidor (útil para depuración)
  console.log(peticion);

  // Recupera solicitudes anteriores desde localStorage (si existen)
  let solicitudesGuardadas = JSON.parse(localStorage.getItem("solicitudes")) || [];

  // Agrega la nueva solicitud al arreglo
  solicitudesGuardadas.push(solicitudes);

  // Guarda el arreglo actualizado en localStorage
  localStorage.setItem("solicitudes", JSON.stringify(solicitudesGuardadas));

  // Muestra en consola la solicitud guardada localmente
  console.log("Solicitud guardada en localStorage:", solicitudes);
});