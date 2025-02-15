import { describe, expect, test } from "vitest";

const user = {
  isActive: false,
  age: 9,
};

describe("user", () => {
  test("is defined", () => {
    expect(user).toBeDefined();
  });

  test("is active", () => {
    expect(user.isActive).toBeTruthy();
  });
});
