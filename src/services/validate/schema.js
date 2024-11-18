import Joi from "joi"

export const validateProd = (prod) => {
    const prodSchema = Joi.object({
        name: Joi.string().min(1).max(30),
        description: Joi.string().min(1).max(100),
        price: Joi.number().integer().min(0).max(10000),
        stock: Joi.number().integer().min(0).max(1000),
        category: Joi.string().min(1).max(30),
        createdAt: Joi.string().min(1),
        updatedAt: Joi.string().min(1)
    })
    const { error } = prodSchema.validate(prod)
    const validation = error ? false : true
    return validation
}

export const validateUser = (user) => {
    const userSchema = Joi.object({
        firstName: Joi.string().min(1).max(20).required(),
        lastName: Joi.string().min(1).max(20).required(),
        email: Joi.string().email().max(50).required(), // Validación de formato de correo y longitud máxima
        password: Joi.string().min(6).max(20),
        phoneNumber: Joi.string().min(6).max(20),
        address: {
            street: Joi.string().min(1).max(20),
            city: Joi.string().min(1).max(20),
            postalCode: Joi.string().min(1).max(10),
            country: Joi.string().min(1).max(20),
            additionalInfo: Joi.string().min(1).max(10),
        },
        cart: Joi.array().items(Joi.object()).default([]), // Validación como un array de objetos vacío por defecto
        purchaseHistory: Joi.array().items(Joi.object()).default([]), // Igual que el carrito                                             //Joi.string().min(1),
        preferredPaymentMethod: Joi.string().min(4).max(15),
        newsletterSubscribed:Joi.boolean(),                 
        createdAt: Joi.string().min(1),
        updatedAt: Joi.string().min(1),
        lastLogin: Joi.string().min(1),
        role: Joi.string().min(1),
        verificationStatus: Joi.boolean()                   
    })
    const { error } = userSchema.validate(user)
    const validation = error ? false : true
    return validation
} 