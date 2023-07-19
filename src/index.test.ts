import { describe, expect, it } from "vitest";

import ixclone from ".";

describe("ixclone", () => {
  it("Works", () => {
    const A = {
      foo: "bar",
    };

    const B = ixclone(A);

    expect(A).toEqual(B);

    A.foo = "baz";

    const C = ixclone(A);

    expect(A).toEqual(C);

    expect(A.foo).toEqual("baz");
    expect(B.foo).toEqual("bar");
    expect(C.foo).toEqual("baz");
  });
});
