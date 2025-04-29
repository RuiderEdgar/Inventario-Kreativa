import axios from "axios";

export const getDatos = async () => {
    try {
      const response = await axios.get("https://datainventario-37085-default-rtdb.firebaseio.com/datos.json");
      return response.data;
    } catch (error) {
      console.error(error);
    }
}

