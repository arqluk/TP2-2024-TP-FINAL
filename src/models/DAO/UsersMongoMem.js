import MongoConnection from "../MongoConnection.js"
import { ObjectId } from "mongodb"

class UserMongoModel {
    constructor() {
    }

    getUser = async () => {
        const users = await MongoConnection.db.collection("users").find({}).toArray()
        return users
    }

    getUserById = async (id) => {
        try {
            // Validación del ID para asegurarse de que tiene la longitud correcta
            if (!ObjectId.isValid(id)) {
                throw new Error("ID inválido: debe ser un string hexadecimal de 24 caracteres.");
            }

            // Si el ID es válido, intenta buscar el producto
            const usuarioExistente = await MongoConnection.db.collection("users").findOne({ _id: ObjectId.createFromHexString(id) })
            if (!usuarioExistente) {
                throw new Error("El usuario no existe en la base de datos.");
            }
            return { message: "Usuario encontrado.", usuarioExistente }

        } catch (error) {
            throw new Error(`Error al actualizar el usuario: ${error.message}`)
        }
    }

    postUser = async (data) => {
        const newUser = await MongoConnection.db.collection("users").insertOne(data)
        return { message: "Usuario agregado correctamente.", newUser }
    }

    patchUser = async (id, data) => {
        try {
            const usuarioExistente = await MongoConnection.db.collection("users").findOne({ _id: ObjectId.createFromHexString(id) });

            if (!usuarioExistente) {
                throw new Error("El usuario no existe en la base de datos.");
            }

            const user = await MongoConnection.db.collection("users").updateOne(
                { _id: ObjectId.createFromHexString(id) },
                { $set: data }
            )

            if (user.modifiedCount === 0) {
                throw new Error("No se realizaron cambios en el usuario.");
            }

            return { message: "Usuario actualizado correctamente.", user }

        } catch (error) {
            throw new Error(`Error al actualizar el usuario: ${error.message}`)
        }
    }

    putUser = async (id, data) => {
        const user = await MongoConnection.db.collection("users").replaceOne(
            { _id: ObjectId.createFromHexString(id) },
            data
        )
        return user
    }

    deleteUser = async (id) => {
        try {
            const usuarioExistente = await MongoConnection.db.collection("users").findOne({ _id: ObjectId.createFromHexString(id) });

            if (!usuarioExistente) {
                throw new Error("El usuario no existe en la base de datos.");
            }

            const user = await MongoConnection.db.collection("users").deleteOne(
                { _id: ObjectId.createFromHexString(id) },
            )

            if (user.deletedCount === 0) {
                throw new Error("No se realizó la eliminación del usuario.");
            }

            return { message: "Usuario eliminado correctamente.", user };

        } catch (error) {
            throw new Error(`Error al eliminar el usuario: ${error.message}`)
        }
    }
}

export default UserMongoModel
