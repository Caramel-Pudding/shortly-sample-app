import { ShortUrl } from "@/redux/features/urls/types";
import { shortcodeBasicUrl } from "./routes";

export interface ShortenRequestParams {
  readonly link: string;
}

export interface ShortenResponse {
  readonly ok: boolean;
  readonly result: ShortUrl;
}

export const fetchShortenUrl = async ({
  link,
}: ShortenRequestParams): Promise<ShortenResponse | null> => {
  try {
    const url = new URL(`${shortcodeBasicUrl}/shorten`);
    url.searchParams.append("url", link);
    const res = await fetch(url.href);
    // eslint-disable-next-line @typescript-eslint/return-await
    return (await res.json()) as Promise<ShortenResponse>;
  } catch {
    return null;
  }
};
