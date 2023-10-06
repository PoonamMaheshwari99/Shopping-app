import reducer, { statusonlogin, statusonlogout } from "./onLoginSlice";

describe("onLoginSlice", () => {
  test("should return the initial state", () => {
    expect(reducer(undefined, { type: undefined })).toEqual({
      sendonlogin: false,
    });
  });

  test("should handle on login", () => {
    const previousState = {
      sendonlogin: false,
    };

    expect(reducer(previousState, statusonlogin())).toEqual({
      sendonlogin: true,
    });
  });

  test("should handle on logout", () => {
    const previousState = {
      sendonlogin: true,
    };

    expect(reducer(previousState, statusonlogout())).toEqual({
      sendonlogin: false,
    });
  });
});
