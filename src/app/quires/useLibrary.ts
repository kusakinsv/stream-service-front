import type { AxiosError, AxiosResponse } from "axios";

import { useQuery, useMutation } from "@tanstack/react-query";

import type { PlayListItem } from "@/app/types.ts";
import type { BaseError } from "@/app/quires/types.ts";

import {
  addTrackToLibrary,
  getMyMusicLibrary,
  deleteTrackFromLibrary,
  deleteTrackFromLibraryById, type PlayListMusicResponse,
} from "@/app/quires/libraryQuires.ts";


export const useGetMusicLibrary = () => {
  return useQuery<AxiosResponse<PlayListMusicResponse>, AxiosError<BaseError>>({
    enabled: true,
    queryKey: ["library"],
    queryFn: () => getMyMusicLibrary(),
  });
};

export const useAddTrackToLibrary = () => {
  return useMutation<AxiosResponse<PlayListMusicResponse>, AxiosError<BaseError>, PlayListItem>({
    mutationFn: (item: PlayListItem) => addTrackToLibrary(item),
  });
};

//todo переделать на url
export const useDeleteTrackFromLibraryById = () => {
  return useMutation<AxiosResponse<PlayListMusicResponse>, AxiosError<BaseError>, number>({
    mutationFn: (position: number) => deleteTrackFromLibraryById(position),
  });
};

export const useDeleteTrackFromLibrary = () => {
  return useMutation<AxiosResponse<PlayListMusicResponse>, AxiosError<BaseError>, PlayListItem>({
    mutationFn: (item: PlayListItem) => deleteTrackFromLibrary(item),
  });
};