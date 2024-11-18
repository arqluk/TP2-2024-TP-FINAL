import UserController from "../controllers/UsersController.js"
import express from "express"
import { roleAuth } from "../middleware/roleAuth.js"

class UserRoutes{
    constructor(){
        this.router = express.Router()
        this.controller = new UserController()
    }

    start(){
        this.router.get("/user", this.controller.getUser)
        this.router.get("/user/:id", this.controller.getUserById)
        this.router.post("/user", roleAuth, this.controller.postUser)
        this.router.patch("/user/update/:id", roleAuth, this.controller.patchUser)
        this.router.put("/user/update/all/:id", roleAuth, this.controller.putUser)
        this.router.delete("/user/:id", roleAuth, this.controller.deleteUser)

        return this.router
    }
}

export default UserRoutes