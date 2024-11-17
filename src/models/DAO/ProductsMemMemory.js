class ProdMemModel {
    constructor() {
        this.prod = [
            { id: 1, name: "Escritorio", price: 120000 },
            { id: 2, name: "Mesa", price: 90000 },
            { id: 3, name: "Velador", price: 15000 }
        ]
    }

    /**
     * Obtiene todos los productos almacenados en la memoria.
     * @returns {Promise<Array>} Un array con todos los productos.
     */
    getProd = async () => {
        return this.prod
    }

    /**
     * Inserta un nuevo producto en la memoria. Se asigna un ID automáticamente al nuevo producto.
     * @param {Object} data - Los datos del producto a agregar (debe contener `name` y `price`).
     * @returns {Promise<Object>} El objeto del nuevo producto agregado.
     */
    postProd = async (data) => {
        data.id = this.prod[this.prod.length - 1].id + 1
        this.prod.push(data)
        return data
    }

    /**
     * Actualiza parcialmente los datos de un producto en la memoria. 
     * Si el producto no existe, lanza un error.
     * @param {number} id - El ID del producto a actualizar.
     * @param {Object} data - Los datos a actualizar del producto (por ejemplo, `name` o `price`).
     * @returns {Promise<Object>} El producto actualizado.
     * @throws {Error} Si el producto no se encuentra en la memoria.
     */
    patchProd = async (id, data) => {
        try {
            const index = this.prod.findIndex((e) => e.id == id)
            if (index == -1) throw new Error("El índice no existe.")
            const updateProd = { ...this.prod[index], ...data }
            this.prod.splice(index, 1, updateProd)
            return updateProd
        } catch (error) {
            console.error("La actualización parcial de productos no se pudo completar.")
        }
    }

    /**
     * Actualiza completamente los datos de un producto en la memoria.
     * Si el producto no existe, lanza un error.
     * @param {number} id - El ID del producto a actualizar.
     * @param {Object} data - Los nuevos datos del producto.
     * @returns {Promise<Object>} El producto actualizado.
     * @throws {Error} Si el producto no se encuentra en la memoria.
     */
    putProd = async (id, data) => {
        try {
            const index = this.prod.findIndex((e) => e.id == id)
            if (index == -1) throw new Error("El índice no existe.")
            const updateProd = { ...this.prod[index], ...data }
            this.prod.splice(index, 1, updateProd)
            return updateProd
        } catch (error) {
            console.error("La actualización total de productos no se pudo completar.")
        }
    }

    /**
     * Elimina un producto de la memoria.
     * Si el producto no existe, lanza un error.
     * @param {number} id - El ID del producto a eliminar.
     * @returns {Promise<string>} Un mensaje de confirmación de la eliminación.
     * @throws {Error} Si el producto no se encuentra en la memoria.
     */
    deleteProd = async (id) => {
        const index = this.prod.findIndex((e) => e.id == id)
        if (index == -1) {
            throw new Error("El índice no existe.")
        } else {
            this.prod.splice(index, 1)
            return "El producto se eliminó correctamente."
        }
    }
}

export default ProdMemModel
