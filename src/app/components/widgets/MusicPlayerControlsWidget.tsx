import React from "react";
import { Box, Stack } from "@mui/material";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded";
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";

import { AudioProgress } from "@/app/components/widgets/AudioProgress.tsx";
import { useAudioStore } from "@/app/store/GlobalPlayerStore/useAudioPlayerState.ts";

const sxIconsArrow = {
  fontSize: "3rem",
  cursor: "pointer",
};

const sxIconsPlayPause = {
  fontSize: "4rem",
  cursor: "pointer",
};

export const MusicPlayerControlsWidget = () => {
  const state = useAudioStore();

  const onNextHandler = () => {
    state.next();
  };

  const timerRef = React.useRef(0);
  const handleClickPrev = () => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      state.progressTo(0);
    }, 200);
  };

  const handleDoubleClickPrev = () => {
    clearTimeout(timerRef.current);
    state.prev();
  };

  const onChangeProgress = (value: number) => {
    state.progressTo(value);
  }

  return (
    <Box>
      <Stack spacing={1}>
        <Stack>
          <AudioProgress currentTime={state.currentTime} duration={state.duration} onChangeProgress={onChangeProgress} />
        </Stack>
        <Box>{state.currentTrack?.name ?? "-"}</Box>
        <Stack spacing={2} direction={"row"} sx={{
          alignItems: "center",
          justifyContent: "center",
          pb: 5,
        }}>
          <Box><SkipPreviousRoundedIcon sx={sxIconsArrow} onClick={handleClickPrev}
                                        onDoubleClick={handleDoubleClickPrev} /></Box>
          <Box>{state.isPlaying
            ? <PauseIcon sx={sxIconsPlayPause} onClick={() => state.pause()} />
            : <PlayArrowIcon sx={sxIconsPlayPause} onClick={() => state.play()} />}
          </Box>
          <Box><SkipNextRoundedIcon sx={sxIconsArrow} onClick={onNextHandler} /></Box>
        </Stack>
      </Stack>
    </Box>
  );
};

