import FactoryProd from "../models/DAO/FactoryProd.js"
import config from "../config.js"

class ProdService{

    constructor(){
        this.model = FactoryProd.get(config.PERSISTENCE)
    }

    getProd = async () => {
        const prod = await this.model.getProd()
        return prod
    }
    
    postProd = async (data) => {
        const newProd = await this.model.postProd(data)
        return newProd
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
