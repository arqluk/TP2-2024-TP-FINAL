import { faker } from '@faker-js/faker'

const randomProd = () => {
    const prod = {
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        stock: faker.number.int({ min: 0, max: 1000 }),
        category: faker.commerce.department(),
        createdAt: faker.string.sample({ min: 1 }),
        updatedAt: faker.string.sample({ min: 1 }),
        color: faker.color.human()
    }

    return prod
}

export default {
    randomProd
}