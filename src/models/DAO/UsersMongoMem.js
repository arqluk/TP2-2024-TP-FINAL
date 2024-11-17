import MongoConnection from "../MongoConnection.js"
import { ObjectId } from "mongodb"

class UserMongoModel {
    constructor() {
    }

    /**
     * Recupera todos los usuarios almacenados en la colección `users`.
     * @returns {Promise<Array>} Un array con todos los usuarios encontrados.
     */
    getUser = async () => {
        const users = await MongoConnection.db.collection("users").find({}).toArray()
        return users
    }

    /**
     * Busca un usuario por su ID. Valida que el ID sea hexadecimal y tenga la longitud correcta.
     * Si el usuario no existe, devuelve un error.
     * @param {string} id - El ID del usuario a buscar.
     * @returns {Promise<Object>} Un objeto con un mensaje y los detalles del usuario si existe.
     * @throws {Error} Si el usuario no existe o el ID es inválido.
     */
    getUserById = async (id) => {
        try {
            // Validación del ID
            if (!ObjectId.isValid(id)) {
                throw new Error("ID inválido: debe ser un string hexadecimal de 24 caracteres.");
            }

            // Buscar el usuario
            const usuarioExistente = await MongoConnection.db.collection("users").findOne({ _id: ObjectId.createFromHexString(id) })
            if (!usuarioExistente) {
                throw new Error("El usuario no existe en la base de datos.");
            }
            return { message: "Usuario encontrado.", usuarioExistente }
        } catch (error) {
            throw new Error(`Error al obtener el usuario: ${error.message}`)
        }
    }

    /**
     * Inserta un nuevo usuario en la colección `users`.
     * @param {Object} data - Los datos del usuario a agregar.
     * @returns {Promise<Object>} Un mensaje con la confirmación de que el usuario fue agregado.
     */
    postUser = async (data) => {
        const newUser = await MongoConnection.db.collection("users").insertOne(data)
        return { message: "Usuario agregado correctamente.", newUser }
    }

    /**
     * Actualiza parcialmente los datos de un usuario en la colección `users`.
     * @param {string} id - El ID del usuario a actualizar.
     * @param {Object} data - Los datos a actualizar en el usuario.
     * @returns {Promise<Object>} Un mensaje con la confirmación de que el usuario fue actualizado.
     * @throws {Error} Si el usuario no existe o si no se realizaron cambios.
     */
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

    /**
     * Reemplaza completamente los datos de un usuario en la colección `users`.
     * @param {string} id - El ID del usuario a reemplazar.
     * @param {Object} data - Los nuevos datos para el usuario.
     * @returns {Promise<Object>} Un mensaje con la confirmación de que el usuario fue reemplazado.
     */
    putUser = async (id, data) => {
        const user = await MongoConnection.db.collection("users").replaceOne(
            { _id: ObjectId.createFromHexString(id) },
            data
        )
        return user
    }

    /**
     * Elimina un usuario de la colección `users`.
     * @param {string} id - El ID del usuario a eliminar.
     * @returns {Promise<Object>} Un mensaje con la confirmación de que el usuario fue eliminado.
     * @throws {Error} Si el usuario no existe o no se realizó la eliminación.
     */
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
