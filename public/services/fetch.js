const BASE_URL = "http://localhost:3001";

async function getData(endpoint) {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`GET ${endpoint} falló con estado ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(`Error en getData: ${error.message}`);
    throw error;
  }
}

async function postData(obj, endpoint) {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    });

    if (!response.ok) {
      throw new Error(`POST ${endpoint} falló con estado ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(`Error en postData: ${error.message}`);
    throw error;
  }
}

async function deleteData(endpoint, id) {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`DELETE ${endpoint}/${id} falló con estado ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(`Error en deleteData: ${error.message}`);
    throw error;
  }
}

export { getData, postData, deleteData };
