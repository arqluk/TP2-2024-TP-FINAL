import FactoryProd from "../models/DAO/FactoryProd.js"
import config from "../config.js"
import { validateProd } from "../services/validate/schema.js"

class ProdService {

    constructor() {
        this.model = FactoryProd.get(config.PERSISTENCE)
    }

    getProd = async () => {
        const prod = await this.model.getProd()
        return prod
    }

    getProdById = async (id) => {
        const prod = await this.model.getProdById(id)
        return prod
    }

    // postProd = async (data) => {
    //     const newProd = await this.model.postProd(data)
    //     return newProd
    // }

    postProd = async (data) => {
        if (validateProd(data)) {
            const newProd = await this.model.postProd(data)
            return newProd
        } else {
            throw new Error("Se quiere ingresar algún campo incorrecto.")
        }
    }

    patchProd = async (id, data) => {
        const update = await this.model.patchProd(id, data)
        return update
    }

    putProd = async (id, data) => {
        const update = await this.model.putProd(id, data)
        return update
    }

    deleteProd = async (id) => {
        const deleteItem = await this.model.deleteProd(id)
        return deleteItem
    }
}


export default ProdService
