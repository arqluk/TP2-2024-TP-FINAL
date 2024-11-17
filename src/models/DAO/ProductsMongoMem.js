import MongoConnection from "../MongoConnection.js" 
import { ObjectId } from "mongodb"

class ProdMongoModel {
    constructor() {
    }

    // Recupera todos los productos almacenados en la colección `products`.
    // @returns {Promise<Array>} Un array con todos los productos encontrados.
    getProd = async () => {
        const products = await MongoConnection.db.collection("products").find({}).toArray()
        return products
    }

    // Busca un producto por su ID. Valida que el ID sea hexadecimal y tenga la longitud correcta.
    // Si el producto no existe, devuelve un error.
    // @param {string} id - El ID del producto a buscar.
    // @throws {Error} Si el producto no existe o el ID es inválido.
    getProdById = async (id) => {
        try {
            // Validación del ID
            if (!ObjectId.isValid(id)) {
                throw new Error("ID inválido: debe ser un string hexadecimal de 24 caracteres.");
            }

            // Buscar el producto
            const productoExistente = await MongoConnection.db.collection("products").findOne({ _id: ObjectId.createFromHexString(id) });
            if (!productoExistente) {
                throw new Error("El producto no existe en la base de datos.");
            }

            return { message: "Producto encontrado.", productoExistente };
        } catch (error) {
            throw new Error(`Error al obtener el producto: ${error.message}`);
        }
    }

    // Inserta un nuevo producto en la colección `products`.
    // @param {Object} data - Los datos del producto a agregar.
    postProd = async (data) => {
        const newProduct = await MongoConnection.db.collection("products").insertOne(data)
        return { message: "Producto agregado correctamente.", newProduct }
    }

    // Actualiza parcialmente los datos de un producto en la colección `products`.
    // @param {string} id - El ID del producto a actualizar.
    // @param {Object} data - Los datos a actualizar en el producto.
    // @throws {Error} Si el producto no existe o si no se realizaron cambios.
    patchProd = async (id, data) => {
        try {
            const productoExistente = await MongoConnection.db.collection("products").findOne({ _id: ObjectId.createFromHexString(id) });

            if (!productoExistente) {
                throw new Error("El producto no existe en la base de datos.");
            }

            const prod = await MongoConnection.db.collection("products").updateOne(
                { _id: ObjectId.createFromHexString(id) },
                { $set: data }
            )

            if (prod.modifiedCount === 0) {
                throw new Error("No se realizaron cambios en el producto.");
            }

            return { message: "Producto actualizado correctamente.", prod }

        } catch (error) {
            throw new Error(`Error al actualizar el producto: ${error.message}`)
        }
    }

    // Reemplaza completamente los datos de un producto en la colección `products`.
    // @param {string} id - El ID del producto a reemplazar.
    // @param {Object} data - Los nuevos datos para el producto.
    putProd = async (id, data) => {
        const prod = await MongoConnection.db.collection("products").replaceOne(
            { _id: ObjectId.createFromHexString(id) },
            data
        )
        return prod
    }

    // Elimina un producto de la colección `products`.
    // @param {string} id - El ID del producto a eliminar.
    // @throws {Error} Si el producto no existe o no se realizó la eliminación.
    deleteProd = async (id) => {
        try {
            const productoExistente = await MongoConnection.db.collection("products").findOne({ _id: ObjectId.createFromHexString(id) });

            if (!productoExistente) {
                throw new Error("El producto no existe en la base de datos.");
            }

            const prod = await MongoConnection.db.collection("products").deleteOne(
                { _id: ObjectId.createFromHexString(id) },
            )

            if (prod.deletedCount === 0) {
                throw new Error("No se realizó la eliminación del producto.");
            }

            return { message: "Producto eliminado correctamente.", prod };

        } catch (error) {
            throw new Error(`Error al eliminar el producto: ${error.message}`)
        }
    }
}

export default ProdMongoModel
