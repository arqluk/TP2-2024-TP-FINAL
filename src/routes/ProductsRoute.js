import ProdController from "../controllers/ProductsController.js"
import express from "express"
import { roleAuth } from "../middleware/roleAuth.js"

//Clase que maneja las rutas de productos.
//Esta clase define las rutas HTTP para crear, obtener, actualizar y eliminar productos.
class ProdRoutes {
    constructor() {
        //El enrutador de Express utilizado para definir las rutas.
        //@type {Object}
        this.router = express.Router();

        //El controlador de productos que gestiona la lógica de las operaciones.
        //@type {ProdController}
        this.controller = new ProdController();
    }

    //Inicia las rutas de productos.
    //@returns {Object} El router con las rutas configuradas.
    start() {
        // Obtener todos los productos
        this.router.get("/prod", this.controller.getProd)
        // Obtener un producto por ID
        this.router.get("/prod/:id", this.controller.getProdById); 
        // Crear un producto
        this.router.post("/prod", roleAuth, this.controller.postProd) 
        // Actualizar parcialmente un producto
        this.router.patch("/prod/update/:id", roleAuth, this.controller.patchProd) 
        // Actualizar completamente un producto
        this.router.put("/prod/update/all/:id", roleAuth, this.controller.putProd); 
        // Eliminar un producto
        this.router.delete("/prod/:id", roleAuth, this.controller.deleteProd); 
        // Obtener el precio en ARS de un producto
        this.router.get("/prod/priceInARS/:id", this.controller.getProdPriceInARS); 


        return this.router;
    }
}

export default ProdRoutes 
