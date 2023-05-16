
import { describe, jest, it, expect } from "@jest/globals";
import Content from "../src/models/Content";
import contentServices from "../src/services/content";



describe("test services ", () => {
  it("should save the content to database once", async () => {
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

    const mock = jest
      .spyOn(Content, "create")
      .mockResolvedValueOnce(contentDocument as any);

    const result = await contentServices.createContent(contentDocument);
    expect(mock).toBeCalledTimes(1);
    expect(result).toEqual(contentDocument);
    expect(result._id).toBeDefined();
  });
});