/**
 * Modelo en memoria para gestionar usuarios.
 * 
 * Esta clase simula una base de datos en memoria para almacenar, modificar y eliminar usuarios.
 */
class UserMemModel {
    constructor() {
        /**
         * Lista de usuarios almacenados en memoria.
         * @type {Array<{id: number, name: string, price: number}>}
         */
        this.user = [
            { id: 1, name: "Escritorio", price: 120000 },
            { id: 2, name: "Mesa", price: 90000 },
            { id: 3, name: "Velador", price: 15000 }
        ];
    }

    /**
     * Obtiene todos los usuarios almacenados.
     * 
     * @returns {Promise<Array<{id: number, name: string, price: number}>>} Lista de usuarios.
     */
    getuser = async () => {
        return this.user;
    }
    
    /**
     * Crea un nuevo usuario y lo agrega a la lista.
     * 
     * @param {Object} data - Datos del nuevo usuario (name, price).
     * @param {string} data.name - Nombre del usuario.
     * @param {number} data.price - Precio asociado al usuario.
     * 
     * @returns {Promise<Object>} Usuario creado con el ID asignado.
     */
    postUser = async (data) => {
        data.id = this.user[this.user.length - 1].id + 1;  // Asigna un nuevo ID.
        this.user.push(data);  // Agrega el usuario a la lista.
        return data;  // Devuelve el usuario agregado.
    }

    /**
     * Actualiza parcialmente un usuario en la lista.
     * 
     * @param {number} id - ID del usuario a actualizar.
     * @param {Object} data - Datos para actualizar el usuario (name, price).
     * 
     * @returns {Promise<Object>} Usuario actualizado.
     * @throws {Error} Si el usuario no existe.
     */
    patchUser = async (id, data) => {
        try {
            const index = this.user.findIndex((e) => e.id == id);
            if (index === -1) throw new Error("El índice no existe.");  // Si no se encuentra el índice, lanza un error.
            
            const updateUser = { ...this.user[index], ...data };  // Mezcla los datos actuales con los nuevos.
            this.user.splice(index, 1, updateUser);  // Reemplaza el usuario con el nuevo objeto.
            return updateUser;  // Devuelve el usuario actualizado.
        } catch (error) {
            console.error("La actualización parcial de usuarios no se pudo completar.");
            throw error;  // Vuelve a lanzar el error para que sea manejado por el controlador o el servicio.
        }
    }

    /**
     * Actualiza completamente un usuario en la lista.
     * 
     * @param {number} id - ID del usuario a actualizar.
     * @param {Object} data - Datos para actualizar el usuario (name, price).
     * 
     * @returns {Promise<Object>} Usuario actualizado.
     * @throws {Error} Si el usuario no existe.
     */
    putUser = async (id, data) => {
        try {
            const index = this.user.findIndex((e) => e.id == id);
            if (index === -1) throw new Error("El índice no existe.");  // Si no se encuentra el índice, lanza un error.
            
            const updateUser = { ...this.user[index], ...data };  // Mezcla los datos actuales con los nuevos.
            this.user.splice(index, 1, updateUser);  // Reemplaza el usuario con el nuevo objeto.
            return updateUser;  // Devuelve el usuario actualizado.
        } catch (error) {
            console.error("La actualización total de usuarios no se pudo completar.");
            throw error;  // Vuelve a lanzar el error para que sea manejado por el controlador o el servicio.
        }
    }

    /**
     * Elimina un usuario por su ID.
     * 
     * @param {number} id - ID del usuario a eliminar.
     * 
     * @returns {Promise<string>} Mensaje indicando si el usuario fue eliminado correctamente.
     * @throws {Error} Si el usuario no existe.
     */
    deleteuser = async (id) => {
        const index = this.user.findIndex((e) => e.id == id);
        if (index === -1) {
            throw new Error("El índice no existe.");  // Si no se encuentra el índice, lanza un error.
        } else {
            this.user.splice(index, 1);  // Elimina el usuario de la lista.
            return "El usuario se eliminó correctamente.";  // Mensaje indicando que el usuario fue eliminado.
        }
    }
}

export default UserMemModel;
