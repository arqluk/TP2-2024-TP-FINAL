class UserMemModel {
    constructor() {
        // Lista de usuarios almacenados en memoria.
        // @type {Array<{id: number, name: string, price: number}>}
        this.user = [
            { id: 1, name: "Escritorio", price: 120000 },
            { id: 2, name: "Mesa", price: 90000 },
            { id: 3, name: "Velador", price: 15000 }
        ];
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
        // Asigna un nuevo ID.
        data.id = this.user[this.user.length - 1].id + 1;  
        // Agrega el usuario a la lista.
        this.user.push(data);  
        // Devuelve el usuario agregado.
        return data;  
    }

    // Actualiza parcialmente un usuario en la lista.
    // @param {number} id - ID del usuario a actualizar.
    // @param {Object} data - Datos para actualizar el usuario (name, price).
    // @throws {Error} Si el usuario no existe.
    patchUser = async (id, data) => {
        try {
            const index = this.user.findIndex((e) => e.id == id);
            // Si no se encuentra el índice, lanza un error.
            if (index === -1) throw new Error("El índice no existe.");  
            // Mezcla los datos actuales con los nuevos.
            const updateUser = { ...this.user[index], ...data };  
            // Reemplaza el usuario con el nuevo objeto.
            this.user.splice(index, 1, updateUser);  
            // Devuelve el usuario actualizado.
            return updateUser;  
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
            const index = this.user.findIndex((e) => e.id == id);
            // Si no se encuentra el índice, lanza un error.
            if (index === -1) throw new Error("El índice no existe.");  
            // Mezcla los datos actuales con los nuevos.
            const updateUser = { ...this.user[index], ...data };  
            // Reemplaza el usuario con el nuevo objeto.
            this.user.splice(index, 1, updateUser);  
            // Devuelve el usuario actualizado.
            return updateUser;  
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
        const index = this.user.findIndex((e) => e.id == id);
        if (index === -1) {
            // Si no se encuentra el índice, lanza un error.
            throw new Error("El índice no existe.");  
        } else {
            // Elimina el usuario de la lista.
            this.user.splice(index, 1);  
            // Mensaje indicando que el usuario fue eliminado.
            return "El usuario se eliminó correctamente.";  
        }
    }
}

export default UserMemModel;
