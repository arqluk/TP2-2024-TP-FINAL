import MongoConnection from "../MongoConnection.js"
import { ObjectId } from "mongodb"

class ProdMongoModel{
    constructor(){ 
    }

    getProd = async () => {
        const products = await MongoConnection.db.collection("products").find({}).toArray()
        return products
    }
    
    postProd = async (data) => {
        const newProduct = await MongoConnection.db.collection("products").insertOne(data)
        return { message: "Producto agregado correctamente.", newProduct }
        //return newProduct
    }

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
            //return prod;  // Retorna `prod` después de la actualización exitosa
    
        } catch (error) {
            throw new Error(`Error al actualizar el producto: ${error.message}`)
        }
    }

    // el PUT cambia por completo el objeto
    putProd = async (id, data) => {
        //replaceOne -> pisa completamente los campos que ya existian
        const prod = await MongoConnection.db.collection("products").replaceOne(
            { _id: ObjectId.createFromHexString(id) },
            data
        )
        return prod
    }

    deleteProd = async (id) => {
        const prod = await MongoConnection.db.collection("products").deleteOne(
            { _id: ObjectId.createFromHexString(id) }
        )
        return prod
    }

    deleteProd = async (id) => {
        try {
            const productoExistente = await MongoConnection.db.collection("products").findOne({ _id: ObjectId.createFromHexString(id) });
            
            if (!productoExistente) {
                throw new Error("El producto no existe en la base de datos.");
            }
    
            const prod = await MongoConnection.db.collection("products").deleteOne(
                { _id: ObjectId.createFromHexString(id) },
            //    { $set: data }
            
            )
    
            if (prod.deletedCount === 0) {
                throw new Error("No se realizó la eliminación del producto.");
            }
    
            return { message: "Producto eliminado correctamente.", prod };
            //return prod;  // Retorna `prod` después de la actualización exitosa
    
        } catch (error) {
            throw new Error(`Error al eliminar el producto: ${error.message}`)
        }
    }
}

export default ProdMongoModel
