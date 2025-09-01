import { getData } from "../services/fetch.js"

const historial = document.getElementById("historial")
const tablaHistorial = document.getElementById("tablaHistorial")
const fila1 = document.getElementById("fila1")
const usuario1 = document.getElementById("ususario1")
const fila2 = document.getElementById("fila2")
const usuario2 = document.getElementById("usuario2")
const consultas = document.getElementById("consultas")

async function mostrarHistorial() {
const historialDatos = JSON.parse(localStorage.getItem("solicitudes")) || [];
  
    for (let i = 0; i < historialDatos.length; i++) {
        const tr = document.createElement("tr")
        const tdId = document.createElement("td")
        const tdUsuario = document.createElement("td")
        const tdSede = document.createElement("td")
        const tdFecha = document.createElement("td")
        const tdCodigo = document.createElement("td")

        tdId.textContent = historialDatos[i].id
        tdUsuario.textContent = historialDatos[i].usuario
        tdSede.textContent = historialDatos[i].sede
        tdFecha.textContent = historialDatos[i].fecha
        tdCodigo.textContent = historialDatos[i].codigo
        
        tr.appendChild(tdId)
        tr.appendChild(tdUsuario)
        tr.appendChild(tdSede)
        tr.appendChild(tdFecha)
        tr.appendChild(tdCodigo)

        tablaHistorial.appendChild(tr)
    }
}
mostrarHistorial()