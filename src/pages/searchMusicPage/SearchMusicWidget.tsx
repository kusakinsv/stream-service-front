import { useMemo } from "react";
import { Box, Stack } from "@mui/material";

import type { AudioItem, AudioTrackData } from "@/app/types.ts";

import { removeDuplicates } from "@/app/utils/utils.ts";
import { SearchPanel } from "@/pages/searchMusicPage/SearchPanel.tsx";
import { useAudioStore } from "@/app/store/GlobalPlayerStore/useAudioPlayerState.ts";
import { TrackItem } from "@/pages/searchMusicPage/components/trackItem/TrackItem.tsx";
import { useValidateAudioTracks } from "@/app/hooks/audioValidator/useValidateAudioTracks.ts";
import { MusicPlayerControlsWidget } from "@/app/components/widgets/MusicPlayerControlsWidget.tsx";


const MOCK_TRACKS: AudioItem[] = [
  {
    name: "В. Цой - Группа крови",
    url: "https://muzmas.ru/uploads/music/2023/30/kino-v-coj-gruppa-krovi-mp3.mp3",
  },
  {
    name: "Дурной Вкус - Пластинки",
    url: "https://dnl2.drivemusic.me/dl/D6LbkIcIjm2lM0buLPT_vw/1710815764/download_music/2023/08/durnojj-vkus-plastinki.mp3",
  },
  {
    name: "В. Цой - Спокойная ночь",
    url: "https://s.muzrecord.com/files/kino-spokoynaya-noch.mp3",
  },
  {
    name: "В. Цой - Спокойная ночь",
    url: "https://s.muzrecord.com/files/kino-spokoynaya-noch.mp3",
  },
  {
    name: "Сплин - Выхода нет",
    url: "https://dnl1.drivemusic.me/dl/zpn_cj1mWs4DJ2BctTOykA/1713142632/download_music/2012/10/splin-vykhoda-net.mp3",
  },
  {
    name: "Би-2, Агата Кристи - А мы не ангелы, парень",
    url: "https://s.muzrecord.com/mp3/2020-10-2/1601618222_agata_kristi_bi2_a_my_ne_angely_paren.mp3",
  },
  {
    name: "Би-2, Чичерина - Мой рокнролл",
    url: "https://muzgen.net/uploads/music/2021/08/Bi_2_i_Chicherina_Moj_rok_n_rol.mp3",
  },
  {
    name: "В. Цой - Спокойная ночь",
    url: "https://s.muzrecord.com/files/kino-spokoynaya-noch.mp3",
  },
];


export const SearchMusicWidget = () => {
  const searched = useMemo(() => removeDuplicates(MOCK_TRACKS), []);
  const { isLoading, validItems } = useValidateAudioTracks(searched, {});
  const { isPlaying, currentTrack, setCurrentTrack, togglePlay } = useAudioStore();

  const onClickHandler = (item: AudioTrackData, trackList: AudioTrackData[]) => {
    if (currentTrack?.url !== item.url) {
      setCurrentTrack(item, trackList);
    } else {
      togglePlay();
    }
  };

  const trackListFiltered = useMemo(() =>
      validItems.filter(item => item.isValid),
    [validItems],
  );

  const trackList = useMemo(() => trackListFiltered
      .map((item) => (
        <TrackItem
          item={item}
          isPlaying={isPlaying}
          currentTrackUrl={currentTrack?.url}
          key={item.url}
          onClick={() => onClickHandler(item, trackListFiltered)}
        />)),
    [currentTrack?.url, isPlaying, trackListFiltered],
  );

  return (
    <Stack sx={{
      height: "100%",
      justifyContent: "space-between",
    }}>
    <Stack spacing={1} useFlexGap={true}>
      <SearchPanel />
      <Box>
        <Stack>
          {isLoading ? "Loading..." : trackList}
        </Stack>
      </Box>
    </Stack>

      <MusicPlayerControlsWidget/>

    </Stack>
  );
};