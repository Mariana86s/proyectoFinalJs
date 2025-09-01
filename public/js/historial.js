import { getData } from "../services/fetch.js"

const tablaHistorial = document.getElementById("tablaHistorial")

async function mostrarHistorial() {
    const historialDatos = await getData("consultas")
    

    for (let i = 0; i < historialDatos.length; i++) {
        const tr = document.createElement("tr")
        const tdId = document.createElement("td")
        const tdUsuario = document.createElement("td")
        const tdSede = document.createElement("td")
        const tdFecha = document.createElement("td")
        const tdCodigo = document.createElement("td")
        const tdEditar = document.createElement("button")
        const tdEliminar = document.createElement("button")

        tdId.textContent = historialDatos[i].id
        tdUsuario.textContent = historialDatos[i].usuario
        tdSede.textContent = historialDatos[i].sede
        tdFecha.textContent = historialDatos[i].fecha
        tdCodigo.textContent = historialDatos[i].codigo 
        tdEditar.textContent = "Editar"
        tdEliminar.textContent = "Eliminar"


        tdEliminar.addEventListener("click",async function() {
        tr.remove();
        })

        tr.appendChild(tdId)
        tr.appendChild(tdUsuario)
        tr.appendChild(tdSede)
        tr.appendChild(tdFecha)
        tr.appendChild(tdCodigo)
        tr.appendChild(tdEditar)
        tr.appendChild(tdEliminar)
        tablaHistorial.appendChild(tr)
    }
}
mostrarHistorial()