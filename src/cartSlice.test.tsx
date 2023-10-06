import reducer from "./cartSlice";

describe("cartSlice", () => {
  test("should return the initial state", () => {
    expect(reducer(undefined, { type: undefined })).toEqual({
      cart: [],
      quantity: 0,
    });
  });
});
