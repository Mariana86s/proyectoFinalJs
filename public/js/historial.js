import { getData, deleteData } from "../services/fetch.js"

const tablaHistorial = document.getElementById("tablaHistorial")

async function mostrarHistorial() {
  // Elimina todas las filas excepto la primera (encabezado)
  while (tablaHistorial.rows.length > 1) {
    tablaHistorial.deleteRow(1)
  }

  const historialDatos = await getData("consultas")

  historialDatos.forEach(item => {
    const tr = document.createElement("tr")

    const tdId = document.createElement("td")
    const tdUsuario = document.createElement("td")
    const tdConsulta = document.createElement("td")
    const tdHora = document.createElement("td")
    const tdEstado = document.createElement("td")
    const tdAcciones = document.createElement("td")

    tdId.textContent = item.id
    tdUsuario.textContent = item.usuario
    tdConsulta.textContent = item.consulta
    tdHora.textContent = item.hora
    tdEstado.textContent = item.estado

    const btnEditar = document.createElement("button")
    btnEditar.textContent = "Editar"

    const btnEliminar = document.createElement("button")
    btnEliminar.textContent = "Eliminar"
    btnEliminar.addEventListener("click", async () => {
      await eliminarEntrada(item.id)
      mostrarHistorial() // 🔄 Actualiza la tabla sin borrar el encabezado
    })

    tdAcciones.appendChild(btnEditar)
    tdAcciones.appendChild(btnEliminar)

    tr.appendChild(tdId)
    tr.appendChild(tdUsuario)
    tr.appendChild(tdConsulta)
    tr.appendChild(tdHora)
    tr.appendChild(tdEstado)
    tr.appendChild(tdAcciones)

    tablaHistorial.appendChild(tr)
  })
}

mostrarHistorial()

async function eliminarEntrada(id) {
  await deleteData("consultas", id)
}
