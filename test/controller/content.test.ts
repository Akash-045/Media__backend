//import { createContentController } from "../../src/controllers/content";
import request from "supertest";
import {
  describe,
  it,
  beforeAll,
  afterAll,
  afterEach,
  expect,
} from "@jest/globals";
import app from "../../src/app";

import connect, { MongodHelper } from "./../db-helper";
async function createContent() {
  //new product
  let content = {
    title: "Example Content",
    partnerId: "1234567890",
    description: "This is an example content.",
    originalUrl: "https://example.com/content",
    publishDate: "2023-05-08",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  };
  return await request(app).post("/contents").send(content);
  //check content in datbase or not
}
describe("create content controller", () => {
  let mongoHelper: MongodHelper;
  beforeAll(async () => {
    mongoHelper = await connect();
  });
  afterEach(async () => {
    await mongoHelper.clearDatabase();
  });
  afterAll(async () => {
    await mongoHelper.closeDatabase();
  });

  it("should return 201 if content is created", async () => {
    const response = await createContent();
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("_id")
    expect(response.body.title).toBe("title")
    expect(response.body.paragraph).toBe("paragraph")
  });
});
