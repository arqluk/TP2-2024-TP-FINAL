import UserController from "../controllers/UsersController.js"
import express from "express"

/**
 * Clase que maneja las rutas de usuario.
 * 
 * Esta clase define las rutas HTTP para crear, obtener, actualizar y eliminar usuarios.
 */
class UserRoutes {
    constructor() {
        /**
         * El enrutador de Express utilizado para definir las rutas.
         * @type {Object}
         */
        this.router = express.Router();
        
        /**
         * El controlador de usuarios que gestiona la lógica de las operaciones.
         * @type {UserController}
         */
        this.controller = new UserController();
    }

    /**
     * Inicia las rutas de usuario.
     * 
     * @returns {Object} El router con las rutas configuradas.
     */
    start() {
        this.router.get("/user", this.controller.getUser);
        this.router.get("/user/:id", this.controller.getUserById);
        this.router.post("/user", this.controller.postUser);
        this.router.patch("/user/update/:id", this.controller.patchUser);
        this.router.put("/user/update/all/:id", this.controller.putUser);
        this.router.delete("/user/:id", this.controller.deleteUser);

        return this.router;
    }
}

export default UserRoutes;
