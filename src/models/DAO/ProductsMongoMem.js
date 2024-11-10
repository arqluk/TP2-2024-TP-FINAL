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
        return newProduct
    }

    // actualiza solo UNA PARTE del objeto
    patchProd = async (id, data) => {
        //console.log(_id)
        // updateOne -> actualiza el campo si existe y si no crea uno nuevo
        const prod = await MongoConnection.db.collection("products").updateOne(
            // la configuración del driver de Mongodb para pasar el tipo de objeto que necesita Mongo
            { _id: ObjectId.createFromHexString(id) },
            { $set: data }
        )
        return prod
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
}

export default ProdMongoModel
