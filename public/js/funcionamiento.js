import { postData } from "../services/fetch.js";
btnSolicitar.addEventListener('click', function() {
         const formulario = document.getElementById('formulario');
        const usuario = document.getElementById('nombreUsuario').value;
        const sede = document.getElementById('sedeUsuario').value;
        const fecha = document.getElementById('fechaConsulta').value;
        const codigo = document.getElementById('codigoCompu').value;
        // const terminos = document.getElementById('input[type="checkbox"]').checked;

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


        /*
            Crear un obj que se llame solicitud,
            Este obj tiene que tener las mismas propiedades que valores

            usuario: usuario

            creeas una variable que sea igual al await del postData
        */
       const solicitud = {
        usuario:usuario,
       }
});