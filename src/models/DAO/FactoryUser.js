import UserMemModel from "./UsersMemMemory.js"
import UserMongoModel from "./UsersMongoMem.js"

class FactoryUser{
    static get(persistencia){
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