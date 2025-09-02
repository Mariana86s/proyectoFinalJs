// Importa funciones para obtener, eliminar y actualizar datos desde el servicio fetch.js
import { getData, deleteData, patchData } from "../services/fetch.js";

// Obtiene la referencia a la tabla donde se mostrará el historial
const tablaHistorial = document.getElementById("tablaHistorial");

// Función principal que carga y muestra el historial de consultas en la tabla
async function mostrarHistorial() {

  // Limpia la tabla, eliminando todas las filas excepto la primera (encabezado)
  while (tablaHistorial.rows.length > 1) {
    tablaHistorial.deleteRow(1);
  }

  // Obtiene los datos del historial desde el endpoint "consultas"
  const historialDatos = await getData("consultas");

  // Recorre cada elemento del historial y lo agrega como una fila en la tabla
  historialDatos.forEach(item => {
    const tr = document.createElement("tr"); // Crea una nueva fila

    // Crea las celdas para cada columna de la tabla
    const tdId = document.createElement("td");
    const tdUsuario = document.createElement("td");
    const tdConsulta = document.createElement("td");
    const tdHora = document.createElement("td");
    const tdEstado = document.createElement("td");
    const tdAcciones = document.createElement("td");

    // Asigna el contenido de cada celda con los datos correspondientes
    tdId.textContent = item.id;
    tdUsuario.textContent = item.usuario;
    tdConsulta.textContent = item.consulta;
    tdHora.textContent = item.hora;
    tdEstado.textContent = item.estado;

    // Crea el botón "Aprobar" para cambiar el estado de la consulta
    const btnEditar = document.createElement("button");
    btnEditar.textContent = "Aprobar";

    // Crea el botón "Eliminar" para borrar la consulta
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";

    // Evento para eliminar la entrada al hacer clic en "Eliminar"
    btnEliminar.addEventListener("click", async () => {
      await eliminarEntrada(item.id);     // Llama a la función para eliminar
      mostrarHistorial();                 // Recarga la tabla actualizada
    });

    // Evento para cambiar el estado de la consulta al hacer clic en "Aprobar"
    btnEditar.addEventListener("click", async function () {
      const objActualizar = {
        // Alterna entre "aprobada" y "rechazada"
        estado: item.estado === "aprobada" ? item.estado = "rechazada" : "aprobada"
      };
      await patchData(objActualizar, "consultas", item.id); // Actualiza el estado
      mostrarHistorial();                                   // Recarga la tabla
    });

    // Agrega los botones a la celda de acciones
    tdAcciones.appendChild(btnEditar);
    tdAcciones.appendChild(btnEliminar);

    // Agrega todas las celdas a la fila
    tr.appendChild(tdId);
    tr.appendChild(tdUsuario);
    tr.appendChild(tdConsulta);
    tr.appendChild(tdHora);
    tr.appendChild(tdEstado);
    tr.appendChild(tdAcciones);

    // Agrega la fila completa a la tabla
    tablaHistorial.appendChild(tr);
  });
}

// Llama a la función para mostrar el historial al cargar el script
mostrarHistorial();

// Función auxiliar para eliminar una entrada por su ID
async function eliminarEntrada(id) {
  await deleteData("consultas", id);
}