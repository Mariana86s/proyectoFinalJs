async function postData(obj,endpoint) {
   try {
     const peticion = await fetch(`http://localhost:3001/${endpoint}`,{
         method: "POST",
         headers:{
             "Content-Type": "application/json"
         },
         body: JSON.stringify(obj)
     })
     const respuesta = await peticion.json()
     console.log(respuesta);
     return respuesta
   } catch (error) {
    console.error(error);
   }
}
<<<<<<< HEAD
async function getData(endpoint) {
   try {
     const peticion = await fetch(`http://localhost:3001/${endpoint}`,{
         method: "GET",
         headers:{
             "Content-Type": "application/json"
         }
     })
     const respuesta = await peticion.json()
     console.log(respuesta);
     return respuesta
   } catch (error) {
    console.error(error);
   }
}
export {getData}
=======
export {postData}
const nombreCompleto = document.getElementById("nombre")
>>>>>>> 415b841c448a7987e495eec0909493d481383491
