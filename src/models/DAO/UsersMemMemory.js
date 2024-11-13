class UserMemModel{
    constructor(){
        this.user = [
            { id: 1, name: "Escritorio", price: 120000 },
            { id: 2, name: "Mesa", price: 90000 },
            { id: 3, name: "Velador", price: 15000 }
        ]    
    }

    getuser = async () => {
        return this.user
    }
    
    postUser = async (data) => {
        data.id = this.user[this.user.length -1].id +1
        this.user.push(data)
        return data
    }

    patchUser = async (id, data) => {
        try {
            const index = this.user.findIndex((e) => e.id == id)
            if(index == -1) throw new Error("El índice no existe.")
            const updateUser = {...this.user[index], ...data}
            this.user.splice(index, 1, updateUser)
            return updateUser
        } catch (error) {
            console.error("La actualización parcial de usuarios no se pudo completar.")
        }
    }

    putUser = async (id, data) => {
        try {
            const index = this.user.findIndex((e) => e.id == id)
            if(index == -1) throw new Error("El índice no existe.")
            const updateUser = {...this.user[index], ...data}
            this.user.splice(index, 1, updateUser)
            return updateUser
        } catch (error) {
            console.error("La actualización total de usuarios no se pudo completar.")
        }
    }

    deleteuser = async (id) => {
        const index = this.user.findIndex((e) => e.id == id)
        if(index == -1){
            throw new Error("El índice no existe.")
        } else{
            this.user.splice(index, 1)
            return "El usuario se eliminó correctamente."
        }
    }

}

export default UserMemModel