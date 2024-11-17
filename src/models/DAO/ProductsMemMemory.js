class ProdMemModel{
    constructor(){
        this.prod = [
            {
              _id: "672e7f253e7ef25fe9e20230",
              name: "Wireless Mouse",
              description: "A high-quality wireless mouse.",
              price: 19.99,
              stock: 130,
              category: "electronics",
              createdAt: "2024-11-08T12:00:00.000Z",
              updatedAt: "2024-11-08T12:00:00.000Z"
            },
            {
              _id: "67301e9cf394165641041eb9",
              name: "Notebook Lenovo",
              description: "A high-quality notebook.",
              price: 899.99,
              stock: 20,
              category: "electronics",
              createdAt: "2024-11-09T12:00:00.000Z",
              updatedAt: "2024-11-09T12:00:00.000Z"
            },
            {
              _id: "6730205e264186ce1b2ae921",
              name: "Notebook HP",
              description: "A high-quality new notebook.",
              price: 999.99,
              stock: 10,
              category: "electronics",
              createdAt: "2024-11-09T12:00:00.000Z",
              updatedAt: "2024-11-09T12:00:00.000Z"
            },
            {
              _id: "6730225c264186ce1b2ae922",
              name: "Smartphone Samsung",
              description: "A top level new smartphone.",
              price: 599.99,
              stock: 100,
              category: "electronics",
              createdAt: "2024-11-09T12:00:00.000Z",
              updatedAt: "2024-11-09T12:00:00.000Z"
            },
            {
              _id: "673143cb94c9657719b88081",
              name: "Headphone philips",
              description: "Stereo headphone.",
              price: 69.99,
              stock: 600,
              category: "electronics",
              createdAt: "2024-11-09T12:00:00.000Z",
              updatedAt: "2024-11-09T12:00:00.000Z"
            },
            {
              _id: "6735484f377e48f3f943c079",
              name: "Hard Disk verbatim",
              description: "Hard Disk.",
              price: 49.99,
              stock: 130,
              category: "electronics",
              createdAt: "2024-11-12T12:00:00.000Z",
              updatedAt: "2024-11-12T12:00:00.000Z"
            }
          ]
    }

    getProd = async () => {
        return this.prod
    }
    
    postProd = async (data) => {
        data.id = this.prod[this.prod.length -1]._id +1
        this.prod.push(data)
        return data
    }

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

    deleteProd = async (id) => {
        const index = this.prod.findIndex((e) => e._id == id)
        if(index == -1){
            throw new Error("El índice no existe.")
        } else{
            this.prod.splice(index, 1)
            return "El producto se eliminó correctamente."
        }
    }

}

export default ProdMemModel