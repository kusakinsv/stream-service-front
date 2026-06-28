import type { PlayListItem } from "@/app/types.ts";

import { streamServiceClient } from "@/app/api/client.ts";

export type PlayListMusicResponse = {
  title: string,
  positions: PlayListItem[]
}

export const getMyMusicLibrary = () => {
  return streamServiceClient.get<PlayListMusicResponse>("/stream-service/api/v1/library")
};

export const addTrackToLibrary = (item: PlayListItem) => {
  return streamServiceClient.post<PlayListMusicResponse>("/stream-service/api/v1/library", item)
};

export const deleteTrackFromLibrary = (position: number) => {
  return streamServiceClient.delete<PlayListMusicResponse>(`/stream-service/api/v1/library/${position}`)
};