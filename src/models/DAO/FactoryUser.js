import UserMemModel from "./UsersMemMemory.js"
import UserMongoModel from "./UsersMongoMem.js"

class FactoryUser {
    /**
     * Crea una instancia de un modelo de usuario dependiendo del tipo de persistencia especificado.
     * 
     * @param {string} persistencia - Tipo de persistencia a utilizar. Puede ser "MEM" para persistencia en memoria 
     * o "MONGO" para persistencia en MongoDB.
     * @returns {UserMemModel|UserMongoModel} Una instancia del modelo de usuario correspondiente al tipo de persistencia.
     */
    static get(persistencia) {
        switch (persistencia) {
            case "MEM":
                console.warn("Persistencia en memoria del servidor.")
                return new UserMemModel()
            case "MONGO":
                console.warn("Persistencia en MongoDB.")
                return new UserMongoModel()
            default:
                console.warn("Persistencia en default.")
                return new UserMemModel()
        }
    }
}

export default FactoryUser
