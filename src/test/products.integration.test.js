import generator from "../utils/generator.js"
import { expect } from "chai"
import supertest from "supertest"

const urlBase = supertest("http://localhost:8080")

describe('Test de productos: ', () => {
    const data = generator.randomProd()
    //console.log("DATA: ", data)

    it('GET Products', async () => {
        const response = await urlBase.get("/prod")
        expect(response.status).to.equal(200)
    })

    it('POST Products', async () => {
        const response = await urlBase.post("/prod").set('role', 'admin').send(data)
        expect(response.status).to.equal(200)
    })
})  
