import Joi from "joi"

export const validateProd = (prod) => {
    const prodSchema = Joi.object({
        name: Joi.string().min(1).max(20),
        description: Joi.string().min(1).max(40),
        price: Joi.number().min(0).max(10000),
        stock: Joi.number().min(0),
        category: Joi.string().min(1).max(15),
        createdAt: Joi.string().min(1),
        updatedAt: Joi.string().min(1)
    })

    //validate -> es propia de Joi y valida el dato que yo le pase
    const { error } = prodSchema.validate(prod)
    //esto es un ejemplo de como manejar el error
    const validation = error ? false : true
    return validation
}