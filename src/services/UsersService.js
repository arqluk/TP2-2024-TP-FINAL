import FactoryUser from "../models/DAO/FactoryUser.js"
import config from "../config.js"

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
        const newUser = await this.model.postUser(data)
        return newUser
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
