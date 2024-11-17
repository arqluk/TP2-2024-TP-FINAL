class UserMemModel {
    constructor() {
        // Lista de usuarios almacenados en memoria.
        // @type {Array<{id: number, name: string, price: number}>}
        this.user = [
            {
              _id: "672e7a543e7ef25fe9e2022d",
              firstName: "John",
              lastName: "Doe",
              email: "john.doe@example.com",
              password: "encrypted_password",
              phoneNumber: "+123456789",
              address: {
                street: "123 Main St",
                city: "New York",
                postalCode: "10001",
                country: "USA",
                additionalInfo: "Apt 5B"
              },
              cart: [],
              purchaseHistory: [],
              preferredPaymentMethod: "credit_card",
              newsletterSubscribed: true,
              createdAt: "2024-11-08T12:00:00Z",
              updatedAt: "2024-11-08T12:00:00Z",
              lastLogin: "2024-11-07T15:30:00Z",
              role: "customer",
              verificationStatus: true
            },
            {
              _id: "673237004cc88767db63f719",
              firstName: "Anne",
              lastName: "Smith",
              email: "anne.smith@example.com",
              password: "encrypted_password",
              phoneNumber: "+987654321",
              address: {
                street: "321 Main St",
                city: "Miami",
                postalCode: "10003",
                country: "USA",
                additionalInfo: "Apt 2B"
              },
              cart: [],
              purchaseHistory: [],
              preferredPaymentMethod: "credit_card",
              newsletterSubscribed: true,
              createdAt: "2024-11-11T12:00:00Z",
              updatedAt: "2024-11-11T12:00:00Z",
              lastLogin: "2024-11-11T15:30:00Z",
              role: "customer",
              verificationStatus: true
            },
            {
              _id: "673554a749bd40c2511a0a58",
              firstName: "Max",
              lastName: "Adams",
              email: "max.adams@example.com",
              password: "encrypted_password",
              phoneNumber: "+987698769",
              address: {
                street: "456 Main St",
                city: "Boston",
                postalCode: "10022",
                country: "USA",
                additionalInfo: "Apt 1C"
              },
              cart: [],
              purchaseHistory: [],
              preferredPaymentMethod: "credit_card",
              newsletterSubscribed: false,
              createdAt: "2024-11-11T12:00:00Z",
              updatedAt: "2024-11-11T12:00:00Z",
              lastLogin: "2024-11-11T15:30:00Z",
              role: "customer",
              verificationStatus: true
            }
          ]
    }

    // Obtiene todos los usuarios almacenados.
    // @returns {Promise<Array<{id: number, name: string, price: number}>>} Lista de usuarios.
    getuser = async () => {
        return this.user;
    }
    
    // Crea un nuevo usuario y lo agrega a la lista.
    // @param {Object} data - Datos del nuevo usuario (name, price).
    // @param {string} data.name - Nombre del usuario.
    // @param {number} data.price - Precio asociado al usuario.
    postUser = async (data) => {
        data.id = this.user[this.user.length -1]._id +1
        this.user.push(data)
        return data
    }

    // Actualiza parcialmente un usuario en la lista.
    // @param {number} id - ID del usuario a actualizar.
    // @param {Object} data - Datos para actualizar el usuario (name, price).
    // @throws {Error} Si el usuario no existe.
    patchUser = async (id, data) => {
        try {
            const index = this.user.findIndex((e) => e._id == id)
            if(index == -1) throw new Error("El índice no existe.")
            const updateUser = {...this.user[index], ...data}
            this.user.splice(index, 1, updateUser)
            return updateUser
        } catch (error) {
            console.error("La actualización parcial de usuarios no se pudo completar.");
            // Vuelve a lanzar el error para que sea manejado por el controlador o el servicio.
            throw error;  
        }
    }

    // Actualiza completamente un usuario en la lista.
    // @param {number} id - ID del usuario a actualizar.
    // @param {Object} data - Datos para actualizar el usuario (name, price).
    // @throws {Error} Si el usuario no existe.
    putUser = async (id, data) => {
        try {
            const index = this.user.findIndex((e) => e._id == id)
            if(index == -1) throw new Error("El índice no existe.")
            const updateUser = {...this.user[index], ...data}
            this.user.splice(index, 1, updateUser)
            return updateUser
        } catch (error) {
            console.error("La actualización total de usuarios no se pudo completar.");
            // Vuelve a lanzar el error para que sea manejado por el controlador o el servicio.
            throw error;  
        }
    }

    // Elimina un usuario por su ID.
    // @param {number} id - ID del usuario a eliminar.
    // @throws {Error} Si el usuario no existe.
    deleteuser = async (id) => {
        const index = this.user.findIndex((e) => e._id == id)
        if(index == -1){
            throw new Error("El índice no existe.")
        } else{
            this.user.splice(index, 1)
            return "El usuario se eliminó correctamente."
        }
    }
}

export default UserMemModel;
