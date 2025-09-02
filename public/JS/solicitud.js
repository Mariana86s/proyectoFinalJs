// Espera a que el contenido del DOM esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', function () {
  
  // Selecciona el formulario con la clase 'datos-usuario'
  const formulario = document.querySelector('.datos-usuario');

  // Agrega un listener al evento 'submit' del formulario
  formulario.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma tradicional

    // Obtiene los valores de los campos del formulario
    const usuario = formulario.querySelector('.usuario').value; // Nombre de usuario
    const sede = formulario.querySelector('input[placeholder="Sede de donde consulta"]').value; // Sede
    const fecha = formulario.querySelector('input[type="date"]').value; // Fecha de consulta
    const codigo = formulario.querySelector('input[type="number"]').value; // Código de estudiante
    const terminos = formulario.querySelector('input[type="checkbox"]').checked; // Aceptación de términos

    // Verifica que todos los campos estén completos
    if (!usuario || !sede || !fecha || !codigo) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    // Verifica que se hayan aceptado los términos y condiciones
    if (!terminos) {
      alert('Debes aceptar los Términos y Condiciones.');
      return;
    }

    // Si todo está correcto, muestra mensaje de éxito
    alert('Formulario enviado correctamente.');

    // Limpia el formulario
    formulario.reset();

    // Recupera las solicitudes guardadas previamente en localStorage
    let solicitudesGuardadas = JSON.parse(localStorage.getItem("solicitudes")) || [];

    // Crea un nuevo objeto con los datos del formulario
    const solicitudes = { usuario, sede, fecha, codigo };

    // Agrega la nueva solicitud al arreglo
    solicitudesGuardadas.push(solicitudes);

    // Guarda el arreglo actualizado en localStorage
    localStorage.setItem("solicitudes", JSON.stringify(solicitudesGuardadas));

    // Muestra en consola la solicitud guardada (útil para depuración)
    console.log("Solicitud guardada en localStorage:", solicitudes);
  });
});