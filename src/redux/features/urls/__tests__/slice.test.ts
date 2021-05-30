import { shortcodeAPIResponseStubs } from "@/tests/stubs";
import {
  reducer,
  addURL,
  setCopiedUrl,
  setIsLoading,
  initialState,
} from "../slice";

describe("URLs reducer", () => {
  it("should handle initial state", () => {
    expect(reducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should handle addUrl", () => {
    const result = reducer(
      initialState,
      addURL({ value: shortcodeAPIResponseStubs[0].result })
    );
    expect(result.urls).toEqual([shortcodeAPIResponseStubs[0].result]);
  });

  it("should handle setIsLoading", () => {
    const result = reducer(initialState, setIsLoading({ value: true }));
    expect(result.isLoading).toEqual(true);
  });
});

it("should handle setCopiedUrl", () => {
  const result = reducer(
    initialState,
    setCopiedUrl({ value: shortcodeAPIResponseStubs[0].result.short_link })
  );
  expect(result.copiedUrl).toEqual(
    shortcodeAPIResponseStubs[0].result.short_link
  );
});
