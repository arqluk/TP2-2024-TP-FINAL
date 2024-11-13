import UserService from "../services/UsersService.js";

class UserController {
  constructor() {
    this.service = new UserService()
  }

  getUser = async (req, res) => {
    const user = await this.service.getUser()
    res.send(user)
  }

  getUserById = async (req, res) => {
    const { id } = req.params
    try {
      const user = await this.service.getUserById(id);
      res.status(200).send(user);
  } catch (error) {
      // Verifica el tipo de error y responde adecuadamente
      if (error.message.includes("no existe")) {
          res.status(404).send({ errorMsg: error.message });
      } else if (error.message.includes("Error al actualizar")) {
          res.status(422).send({ errorMsg: error.message });
      } else {
          res.status(500).send({ errorMsg: "Error interno del servidor" });
      }
  }
}

  // postUser = async (req, res) => {
  //   const data = req.body
  //   const newUser = await this.service.postUser(data)
  //   res.send(newUser)
  // }

  postUser = async (req, res) => {
    const data = req.body
    try {
      const newUser = await this.service.postUser(data)
    res.send(newUser)
    } catch (error) {
      res.status(404).send({ errorMsg: error.message })
    }
  }

  patchUser = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {
        const update = await this.service.patchUser(id, data);
        res.status(200).send(update);
    } catch (error) {
        // Verifica el tipo de error y responde adecuadamente
        if (error.message.includes("no existe")) {
            res.status(404).send({ errorMsg: error.message });
        } else if (error.message.includes("Error al actualizar")) {
            res.status(422).send({ errorMsg: error.message });
        } else {
            res.status(500).send({ errorMsg: "Error interno del servidor" });
        }
    }
}

  putUser = async (req, res) => {
    const { id } = req.params
    const data = req.body
    const update = await this.service.putUser(id, data)
    res.send(update)
  }

  deleteUser = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {
        const deleteItem = await this.service.deleteUser(id)
        res.status(200).send(deleteItem);
    } catch (error) {
        // Verifica el tipo de error y responde adecuadamente
        if (error.message.includes("no existe")) {
            res.status(404).send({ errorMsg: error.message });
        } else if (error.message.includes("Error al actualizar")) {
            res.status(422).send({ errorMsg: error.message });
        } else {
            res.status(500).send({ errorMsg: "Error interno del servidor" });
        }
    }
  }

}

export default UserController
