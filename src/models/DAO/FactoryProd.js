import ProdMemModel from "./ProductsMemMemory.js"
import ProdMongoModel from "./ProductsMongoMem.js"

class FactoryProd {
    /**
     * Crea una instancia de un modelo de producto dependiendo del tipo de persistencia especificado.
     * 
     * @param {string} persistencia - Tipo de persistencia a utilizar. Puede ser "MEM" para persistencia en memoria 
     * o "MONGO" para persistencia en MongoDB.
     * @returns {ProdMemModel|ProdMongoModel} Una instancia del modelo de producto correspondiente al tipo de persistencia.
     */
    static get(persistencia) {
        switch (persistencia) {
            case "MEM":
                console.warn("Persistencia en memoria del servidor.")
                return new ProdMemModel()
            case "MONGO":
                console.warn("Persistencia en MongoDB.")
                return new ProdMongoModel()
            default:
                console.warn("Persistencia en default.")
                return new ProdMemModel()
        }
    }
}

export default FactoryProd
