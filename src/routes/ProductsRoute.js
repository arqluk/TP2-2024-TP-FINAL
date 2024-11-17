import ProdController from "../controllers/ProductsController.js"
import { roleAuth } from "../middleware/roleAuth.js"
import express from "express"

class ProdRoutes{
    constructor(){
        this.router = express.Router()
        this.controller = new ProdController()
    }

    start(){x
        this.router.get("/prod", this.controller.getProd)
        this.router.get("/prod/:id", roleAuth, this.controller.getProdById)
        this.router.post("/prod", roleAuth, this.controller.postProd)
        this.router.patch("/prod/update/:id", roleAuth, this.controller.patchProd)
        this.router.put("/prod/update/all/:id", roleAuth, this.controller.putProd)
        this.router.delete("/prod/:id", roleAuth, this.controller.deleteProd)

        return this.router
    }
}

export default ProdRoutes
