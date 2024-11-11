import UserController from "../controllers/UsersController.js"
import express from "express"

class UserRoutes{
    constructor(){
        this.router = express.Router()
        this.controller = new UserController()
    }

    start(){
        this.router.get("/user", this.controller.getUser)
        this.router.get("/user/:id", this.controller.getUserById)
        this.router.post("/user", this.controller.postUser)
        this.router.patch("/user/update/:id", this.controller.patchUser)
        this.router.put("/user/update/all/:id", this.controller.putUser)
        this.router.delete("/user/:id", this.controller.deleteUser)

        return this.router
    }
}

export default UserRoutes