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
