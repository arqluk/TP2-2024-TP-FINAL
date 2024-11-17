import ProdService from "../services/ProductsService.js"
import CurrencyService from "../services/CurrencyService.js"

class ProdController {
  constructor() {
    this.service = new ProdService()
    this.currencyService = new CurrencyService()
  }

  getProd = async (req, res) => {
    const prod = await this.service.getProd()
    res.send(prod)
  }

  getProdById = async (req, res) => {
    const { id } = req.params
    try {
      const prod = await this.service.getProdById(id);
      res.status(200).send(prod);
    } catch (error) {
      // Verifica el tipo de error y responde adecuadamente
      if (error.message.includes("no existe")) {
        res.status(404).send({ errorMsg: error.message });
      } else if (error.message.includes("Error al actualizar")) {
        res.status(422).send({ errorMsg: error.message });
      } else {
        res.status(500).send({ errorMsg: "Error interno del servidor" });
      }
    }
  }

  postProd = async (req, res) => {
    const data = req.body
    try {
      const newProd = await this.service.postProd(data)
      res.send(newProd)
    } catch (error) {
      res.status(404).send({ errorMsg: error.message })
    }
  }

  patchProd = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {
      const update = await this.service.patchProd(id, data);
      res.status(200).send(update);
    } catch (error) {
      // Verifica el tipo de error y responde adecuadamente
      if (error.message.includes("no existe")) {
        res.status(404).send({ errorMsg: error.message });
      } else if (error.message.includes("Error al actualizar")) {
        res.status(422).send({ errorMsg: error.message });
      } else {
        res.status(500).send({ errorMsg: "Error interno del servidor" });
      }
    }
  }

  putProd = async (req, res) => {
    const { id } = req.params
    const data = req.body
    const update = await this.service.putProd(id, data)
    res.send(update)
  }

  deleteProd = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {
      const deleteItem = await this.service.deleteProd(id)
      res.status(200).send(deleteItem);
    } catch (error) {
      // Verifica el tipo de error y responde adecuadamente
      if (error.message.includes("no existe")) {
        res.status(404).send({ errorMsg: error.message });
      } else if (error.message.includes("Error al actualizar")) {
        res.status(422).send({ errorMsg: error.message });
      } else {
        res.status(500).send({ errorMsg: "Error interno del servidor" });
      }
    }
  }

  getProdPriceInARS = async (req, res) => {
    try {
      const { id } = req.params;
      const prod = await this.service.getProdById(id);
      
      // Llamada a la API para obtener la tasa de conversión
      const exchangeRate = await this.currencyService.getExchangeRate()
      
      // Asumiendo que el precio está en dólares en el producto
      const priceInARS = parseFloat((prod.productoExistente.price * exchangeRate.compra).toFixed(2))
      
      res.json({
        ...prod,
        exchangeRate,
        priceInARS
      })

    } catch (error) {
      res.status(500).json({ message: 'Error al obtener el precio en ARS.', error: error.message });
    }
  }

}

export default ProdController  
