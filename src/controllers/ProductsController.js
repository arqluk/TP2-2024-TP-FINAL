import ProdService from "../services/ProductsService.js";

class ProdController {
  constructor() {
    this.service = new ProdService()
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

  // postProd = async (req, res) => {
  //   const data = req.body
  //   const newProd = await this.service.postProd(data)
  //   res.send(newProd)
  // }

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

}

export default ProdController
