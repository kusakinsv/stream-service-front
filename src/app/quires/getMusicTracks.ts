import type { AudioItem } from "@/app/types.ts";

import { streamServiceClient } from "@/app/api/client.ts";

type SearchMusicRequest = {
  query: string;
}

export const getMusicTracks = (params: SearchMusicRequest) => {
  return streamServiceClient.get<AudioItem[]>("/api/v1/search", {params})
};