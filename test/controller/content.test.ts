//content controller
//import {createContentController} from "../../src/controllers/content"
import request from "supertest"
import {describe,it,beforeAll, afterEach, afterAll} from "@jest/globals"
import app from "../../src/app"

async function createContentController(){

    let content = {
        title:"test",
        content:"test",
        author:"test"
    }
    return await request(app).post("/contents")
    .send(content)
    

describe("content controller",()=>{
let mongoHelper:MongoDHelper;
beforeAll(async ()=>{
    mongoHelper = await connect()
})
afterEach(async ()=>{
    await mongoHelper.clearDatabase()
})
afterAll(async()=>{
    await mongoHelper.closeDatabase()
})
//write test here

})
}