import { faker } from '@faker-js/faker'

const randomProd = () => {
    const prod = {
        name: faker.commerce.productName({ min: 1, max: 30 }),
        description: faker.commerce.productDescription({ min: 1, max: 100 }),
        price: faker.number.int({ min: 0, max: 10000}),
        stock: faker.number.int({ min: 0, max: 1000}),
        category: faker.commerce.department({ min: 1, max: 30 }),
        createdAt: faker.commerce.productName({ min: 1 }),
        updatedAt: faker.commerce.productName({ min: 1 }),
    }

    return prod
}

export default {
    randomProd
}