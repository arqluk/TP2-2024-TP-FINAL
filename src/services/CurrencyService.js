import axios from 'axios';

class CurrencyService {
    constructor() {
    }
    getExchangeRate = async () => {
        try {

            const response = await axios.get('https://dolarapi.com/v1/dolares/oficial')

            if (response.status === 200) {
                const { compra, venta } = response.data
                return { compra, venta };
            } else {
                throw new Error('Error en la respuesta de Dólar API')
            }
        } catch (error) {
            throw new Error(`Error al obtener el tipo de cambio: ${error.message}`)
        }
    }
}

export default CurrencyService



/* codigo para un archivo test.js o donde quieran usar la api

import getExchangeRate from "./services/CurrencyService.js";

const testExchangeRate = async () => {
    try {
        const rates = await getExchangeRate();
        console.log(`Tasa de cambio oficial (compra): ${rates.compra}`);
        console.log(`Tasa de cambio oficial (venta): ${rates.venta}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
};

testExchangeRate();

*/