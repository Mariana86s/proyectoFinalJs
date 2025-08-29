import { getData } from "../services/fetch.js"

const historial = document.getElementById ("historial")
const tablaHistorial = document.getElementById("tablaHistorial")
const fila1 = document.getElementById("fila1")
const usuario1 = document.getElementById("ususario1")
const fila2 = document.getElementById("fila2") 
const usuario2 = document.getElementById("usuario2")

const historialDatos = [
    {usuario: "Samantha", accion: "inicio sesión", fecha: "2025-03-21"},
    {usuario: "Pepito", accion: "cerro sesión", fecha: "2025-03-20"}
];
const consultas = document.getElementById("consultas")
async function mostrarHistorial() {
 const historialDatos = await getData("consultas")
  for (let i = 0; i < historialDatos.length; i++) {
    const pNombre = document.createElement("p")

    pNombre.textContent = historialDatos[i].usuario
    consultas.appendChild(pNombre)
}
}


mostrarHistorial()