import permissionCheck from "../src/middleware/permissionCheck";
import { ForbiddenError } from "../src/helper/apiError";
import {describe,it,expect, jest} from "@jest/globals"

describe("permission check middleware", () => {
  it("should allow user to get resource", () => {
    const req: any = {
      user: {
        permissions: [{ access: "READ" }],
      },
      method: "GET",
    };

    const mock = jest.fn();

    permissionCheck(req, {} as any, mock);
    expect(mock).toBeCalledTimes(1);
    expect(mock).toBeCalledWith();
  });

  it("should not allow user to get resource", () => {
    const req: any = {
      user: {
        permissions: [{ access: "WRITE" }],
      },
      method: "GET",
    };

    const mock = jest.fn();

    permissionCheck(req, {} as any, mock);
    expect(mock).toBeCalledTimes(1);
    expect(mock).toBeCalledWith(new ForbiddenError());
  });
});