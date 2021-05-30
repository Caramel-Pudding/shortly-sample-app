import fetchMock from "jest-fetch-mock";
import { shortcodeAPIResponseStubs, urlStub } from "@/tests/stubs";
import { fetchShortenUrl } from "../gateway";

describe("Fetch Weather", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it(`if request resolves should return data`, async () => {
    // * #TEST: ARRANGE
    fetchMock.mockResponseOnce(JSON.stringify(shortcodeAPIResponseStubs[0]));
    // * #TEST: ACT
    const result = await fetchShortenUrl({ link: urlStub });
    // * #TEST: ASSERT
    expect(result).toEqual(shortcodeAPIResponseStubs[0]);
    expect(fetchMock.mock.calls).toHaveLength(1);
    expect(fetchMock.mock.calls[0][0]).toEqual(
      "https://api.shrtco.de/v2//shorten?url=https%3A%2F%2Fuserinyerface.com%2F"
    );
  });

  it(`if request rejects should return null`, async () => {
    // * #TEST: ARRANGE
    fetchMock.mockRejectOnce();
    // * #TEST: ACT
    const result = await fetchShortenUrl({ link: urlStub });
    // * #TEST: ASSERT
    expect(result).toBeNull();
    expect(fetchMock.mock.calls).toHaveLength(1);
    expect(fetchMock.mock.calls[0][0]).toEqual(
      "https://api.shrtco.de/v2//shorten?url=https%3A%2F%2Fuserinyerface.com%2F"
    );
  });
});
