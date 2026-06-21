import type { AxiosError, AxiosResponse } from "axios";

import { useQuery } from "@tanstack/react-query";

import type { AudioItem } from "@/app/types.ts";
import type { BaseError } from "@/app/quires/types.ts";

import { getMusicTracks } from "@/app/quires/getMusicTracks.ts";

type SearchMusicTracksProps = {
  trackName: null | string;
}

export const useSearchMusicTracks = ({ trackName }: SearchMusicTracksProps) => {

  return useQuery<AxiosResponse<AudioItem[]>, AxiosError<BaseError>>({
    enabled: trackName !== null,
    queryKey: ["search-music", { trackName }],
    queryFn: () => getMusicTracks({
      query: trackName ?? "",
    }),
  });
};