export interface URLsState {
  readonly urls: ShortUrl[];
  readonly copiedUrl: string;
  readonly isLoading: boolean;
}

export interface URLsChangePayload {
  readonly value: ShortUrl;
}

export interface CopiedURLChangePayload {
  readonly value: string;
}

export interface IsLoadingChangePayload {
  readonly value: boolean;
}

export interface ShortUrl {
  readonly code: string;
  readonly short_link: string;
  readonly full_short_link: string;
  readonly short_link2: string;
  readonly short_link3: string;
  readonly full_short_link2: string;
  readonly share_link: string;
  readonly full_share_link: string;
  readonly original_link: string;
  readonly full_short_link3: string;
}
