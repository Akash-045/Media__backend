import {
  permissionCheckWrite,
  permissionCheckRead,
} from "../src/middleware/permissionCheck";
import { describe, it, expect, jest } from "@jest/globals";

describe("permission check middleware", () => {
  it("should allow user to get resource", () => {
    const req: any = {
      user: {
        permissions: [{ access: "READ" }],
      },
      method: "GET",
    };

    const mock = jest.fn();

    permissionCheckRead(req, {} as any, mock);
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

    permissionCheckWrite(req, {} as any, mock);
    expect(mock).toBeCalledTimes(1);
    expect(mock).toBeCalledWith();
  });
});
