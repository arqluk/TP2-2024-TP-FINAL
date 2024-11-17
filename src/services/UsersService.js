import FactoryUser from "../models/DAO/FactoryUser.js"
import config from "../config.js"
import { validateUser } from "../services/validate/schema.js"

class UserService{

    constructor(){
        this.model = FactoryUser.get(config.PERSISTENCE)
    }

    getUser = async () => {
        const user = await this.model.getUser()
        return user
    }

    getUserById = async (id) => {
        const user = await this.model.getUserById(id)
        return user
    }

    postUser = async (data) => {
        if (validateUser(data)) {
            const newUser = await this.model.postUser(data)
            return newUser
        } else {
            throw new Error("Se quiere ingresar algún campo incorrecto.")
        }
    }

    patchUser = async (id, data) => {
        const update = await this.model.patchUser(id, data)
        return update
    }

    putUser = async (id, data) => {
        const update = await this.model.putUser(id, data)
        return update
    }

    deleteUser = async (id) => {
        const deleteItem = await this.model.deleteUser(id)
        return deleteItem
    }
}

export default UserService
