class ProdMemModel {
    constructor() {
        this.prod = [
            {
              _id: "672e7f253e7ef25fe9e20230",
              name: "Wireless Mouse",
              description: "A high-quality wireless mouse.",
              price: 19,
              stock: 130,
              category: "electronics",
              createdAt: "2024-11-08T12:00:00.000Z",
              updatedAt: "2024-11-08T12:00:00.000Z"
            },
            {
              _id: "67301e9cf394165641041eb9",
              name: "Notebook Lenovo",
              description: "A high-quality notebook.",
              price: 899,
              stock: 20,
              category: "electronics",
              createdAt: "2024-11-09T12:00:00.000Z",
              updatedAt: "2024-11-09T12:00:00.000Z"
            },
            {
              _id: "6730205e264186ce1b2ae921",
              name: "Notebook HP",
              description: "A high-quality new notebook.",
              price: 999,
              stock: 10,
              category: "electronics",
              createdAt: "2024-11-09T12:00:00.000Z",
              updatedAt: "2024-11-09T12:00:00.000Z"
            },
            {
              _id: "6730225c264186ce1b2ae922",
              name: "Smartphone Samsung",
              description: "A top level new smartphone.",
              price: 599,
              stock: 100,
              category: "electronics",
              createdAt: "2024-11-09T12:00:00.000Z",
              updatedAt: "2024-11-09T12:00:00.000Z"
            },
            {
              _id: "673143cb94c9657719b88081",
              name: "Headphone philips",
              description: "Stereo headphone.",
              price: 69,
              stock: 600,
              category: "electronics",
              createdAt: "2024-11-09T12:00:00.000Z",
              updatedAt: "2024-11-09T12:00:00.000Z"
            },
            {
              _id: "6735484f377e48f3f943c079",
              name: "Hard Disk verbatim",
              description: "Hard Disk.",
              price: 49,
              stock: 130,
              category: "electronics",
              createdAt: "2024-11-12T12:00:00.000Z",
              updatedAt: "2024-11-12T12:00:00.000Z"
            }
          ]
    }
    // Obtiene todos los productos almacenados en la memoria.
    // @returns {Promise<Array>} Un array con todos los productos.
    getProd = async () => {
        return this.prod
    }
    // Inserta un nuevo producto en la memoria. Se asigna un ID automáticamente al nuevo producto.
    // Los datos del producto a agregar (debe contener `name` y `price`).
    postProd = async (data) => {
        data.id = this.prod[this.prod.length -1]._id +1
        this.prod.push(data)
        return data
    }
    // Actualiza parcialmente los datos de un producto en la memoria.
    // Si el producto no existe, lanza un error.
    // @param {number} id - El ID del producto a actualizar.
    // @param {Object} data - Los datos a actualizar del producto (por ejemplo, `name` o `price`).
    patchProd = async (id, data) => {
        try {
            const index = this.prod.findIndex((e) => e._id == id)
            if(index == -1) throw new Error("El índice no existe.")
            const updateProd = {...this.prod[index], ...data}
            this.prod.splice(index, 1, updateProd)
            return updateProd
        } catch (error) {
            console.error("La actualización parcial de productos no se pudo completar.")
        }
    }
    // Actualiza completamente los datos de un producto en la memoria.
    // Si el producto no existe, lanza un error.
    // @param {number} id - El ID del producto a actualizar.
    // @param {Object} data - Los nuevos datos del producto.
    // @throws {Error} Si el producto no se encuentra en la memoria.
    putProd = async (id, data) => {
        try {
            const index = this.prod.findIndex((e) => e._id == id)
            if(index == -1) throw new Error("El índice no existe.")
            const updateProd = {...this.prod[index], ...data}
            this.prod.splice(index, 1, updateProd)
            return updateProd
        } catch (error) {
            console.error("La actualización total de productos no se pudo completar.")
        }
    }
    // Elimina un producto de la memoria.
    // Si el producto no existe, lanza un error.
    // @param {number} id - El ID del producto a eliminar.
    // @throws {Error} Si el producto no se encuentra en la memoria.
    deleteProd = async (id) => {
        const index = this.prod.findIndex((e) => e._id == id)
        if(index == -1){
            throw new Error("El índice no existe.")
        } else {
            this.prod.splice(index, 1)
            return "El producto se eliminó correctamente."
        }
    }
}

export default ProdMemModel