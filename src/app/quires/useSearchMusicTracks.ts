import type { AxiosError, AxiosResponse } from "axios";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import type { AudioItem } from "@/app/types.ts";
import type { BaseError } from "@/app/quires/types.ts";

import { getMusicTracks } from "@/app/quires/getMusicTracks.ts";

export const useSearchMusicTracks = () => {
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse<AudioItem[]>, AxiosError<BaseError>, string>({
    mutationFn: (trackName: string) => getMusicTracks({
      query: trackName ?? "",
    }),
    onSuccess: (data) => {
      queryClient.setQueryData(['search-results'], data);
    }
  });
};