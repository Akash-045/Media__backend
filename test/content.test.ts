// unit test
// mock database
// install: yarn add mockingoose -D
// link: https://www.npmjs.com/package/mockingoose

import { describe, jest, it, expect } from "@jest/globals";
import Content from "../src/models/Content";
import contentServices from "../src/services/content";

const mock = jest.spyOn(Content, "create");

describe("test services", () => {
  it("should save the content to database once", async () => {
    // content doc
    const contentDocument = new Content({
      title: "test",
      partnerId: "1oai9d",
      description: "test",
      originalUrl: "test",
      publishDate: "test",
      paragraph: "test",
      images: [],
      videos: [],
    });

    mock.mockResolvedValue(contentDocument);

    const result = await contentServices.createContent(contentDocument);
    expect(result.title).toEqual(contentDocument.title);
    // Check how many times `Content.create()` was called
    expect(mock).toHaveBeenCalledTimes(1);
  });
});
