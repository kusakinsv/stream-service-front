import { useMemo } from "react";
import { Box, Stack } from "@mui/material";

import type { AudioTrackData } from "@/app/types.ts";

import { removeDuplicates } from "@/app/utils/utils.ts";
import { useSearchStore } from "@/app/store/searchState.ts";
import { SearchPanel } from "@/pages/searchMusicPage/SearchPanel.tsx";
import { useSearchMusicTracks } from "@/app/quires/useSearchMusicTracks.ts";
import { useAudioStore } from "@/app/store/GlobalPlayerStore/useAudioPlayerState.ts";
import { TrackItem } from "@/pages/searchMusicPage/components/trackItem/TrackItem.tsx";
import { useValidateAudioTracks } from "@/app/hooks/audioValidator/useValidateAudioTracks.ts";
import { MusicPlayerControlsWidget } from "@/app/components/widgets/MusicPlayerControlsWidget.tsx";


export const SearchMusicWidget = () => {
  const { currentSearchTrack} = useSearchStore();

  const { data, isLoading } = useSearchMusicTracks({ trackName: currentSearchTrack });

  const searchedTracks = data?.data ?? [];
  const distinct = useMemo(() => removeDuplicates(searchedTracks), [searchedTracks]);

  const { isLoading: validateIsLoading, validatedItems } = useValidateAudioTracks(distinct, {
    concurrency: 5,
    itemTimeout: 5000,
    globalTimeout: 12000,
  });

  const { isPlaying, currentTrack, setCurrentTrack, togglePlay, setCurrentPlaylist } = useAudioStore();

  const onItemPlayButtonClickHandler = (item: AudioTrackData, trackList: AudioTrackData[]) => {
    if (currentTrack?.url !== item.url) {
      setCurrentTrack(item, trackList);
    } else {
      togglePlay();
    }
  };


   // console.log(validatedItems.length);
  const trackListFiltered = useMemo(() => {
      const audioTrackData = validatedItems.filter(item => item.isValid);
      setCurrentPlaylist(audioTrackData);
      return audioTrackData;
    },

    [validatedItems],
  );
  
  const trackList = useMemo(() => trackListFiltered
      .map((item) => (
        <TrackItem
          item={item}
          isPlaying={isPlaying}
          currentTrackUrl={currentTrack?.url}
          key={item.url}
          onClick={() => onItemPlayButtonClickHandler(item, trackListFiltered)}
        />)),
    [currentTrack?.url, isPlaying, onItemPlayButtonClickHandler, trackListFiltered],
  );

  return (
    <Stack sx={{
      height: "100%",
      justifyContent: "space-between",
    }}>
      <Stack spacing={1} useFlexGap={true}>
        <SearchPanel/>
        <Box>
          <Stack>
            {isLoading ?? validateIsLoading ? "Loading..." : trackList}
          </Stack>
        </Box>
      </Stack>

      <MusicPlayerControlsWidget />

    </Stack>
  );
};