import { sheets_v4 } from "googleapis";

const API_KEY = import.meta.env.VITE_API_KEY
const ID_CLIENTE = import.meta.env.VITE_ID_CLIENTE
const spreadSheetId = "1n_XYoMh-xKyodMdY4_G6prHRbDMm2zuP";
import axios from "axios";
const fetchLink = `https://docs.google.com/v4/spreadsheets/${spreadSheetId}/values?key=${API_KEY}`;

const baseLink = `https://sheets.googleapis.com/v4/1n_XYoMh-xKyodMdY4_G6prHRbDMm2zuP`

const idSheet = "1n_XYoMh-xKyodMdY4_G6prHRbDMm2zuP"
export const fetchData = async () => {
    try {
        const response = await axios.get(fetchLink)
        return response.data.values
    } catch (error) {
        console.error("Error al obtener los datos", error)
    }
}

const fetch = async  () => {

}


