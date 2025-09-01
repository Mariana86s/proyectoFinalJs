document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.querySelector('.datos-usuario');

    formulario.addEventListener('submit', function (event) {
        event.preventDefault();

        const usuario = formulario.querySelector('.usuario').value;
        const sede = formulario.querySelector('input[placeholder="Sede de donde consulta"]').value;
        const fecha = formulario.querySelector('input[type="date"]').value;
        const codigo = formulario.querySelector('input[type="number"]').value;
        const terminos = formulario.querySelector('input[type="checkbox"]').checked;

        if (!usuario || !sede || !fecha || !codigo) {
            alert('Por favor, completa todos los campos.');
            return;
        }
        if (!terminos) {
            alert('Debes aceptar los Términos y Condiciones.');
            return;
        }

        alert('Formulario enviado correctamente.');
        formulario.reset();
        let solicitudesGuardadas = JSON.parse(localStorage.getItem("solicitudes")) || [];
        solicitudesGuardadas.push(solicitudes);
        localStorage.setItem("solicitudes", JSON.stringify(solicitudesGuardadas));
        console.log("Solicitud guardada en localStorage:", solicitudes);
    });
});