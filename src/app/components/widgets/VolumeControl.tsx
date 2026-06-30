import { useMemo, useState, useCallback } from "react";
import { Box, Slider, Typography } from "@mui/material";

import { useAudioStore } from "@/app/store/GlobalPlayerStore/useAudioPlayerState.ts";


export const VolumeControl = () => {
  const {setVolume, audioRef, volume} = useAudioStore();
  const defaultVolume = useMemo<number>(()=> volume, []);

  const progress = 0;
  const [volumeLevel, setVolumeLevel] = useState<number>(progress);

  const handleDragStart = useCallback(() => {
    setVolumeLevel(progress);
  }, [progress, setVolumeLevel]);

  const handleDragChange = useCallback((_: Event, value: number) => {
    if (audioRef != null) {
      audioRef.volume = value/100;
    }
  }, [audioRef]);

  const handleDragEnd = (_: Event, volume: number) => {
    setVolume(volume);
    setVolumeLevel(volume);
  };


  return (
    <Box sx={{
      width: "100%",
      padding: {
        md: "0 5rem",
        xs: "0 2.5rem",
      },
    }}>
      <Box sx={{
        // display: "flex",
        alignItems: "center", /* Центрирует элементы по вертикали */
        // justifyContent: "center", /* Горизонтальное выравнивание (опционально) */
        height:" 40px", /* Задайте нужную высоту контейнеру */
      }}>
        <Box sx={{
          minHeight: "50px",
          // position.: "relative",
          display: "flex",
          alignItems: "center", /* Центрирует элементы по вертикали */

          justifyContent: "center"
        }}>

          <Slider defaultValue={defaultVolume} min={0} max={100}
                  sx={{
                    margin: "0 auto",
                    // position: "absolute",
                    bottom: 0,
                    // top: "30%",
                    // top: {xs: "10%"},
                    left: 0,
                    height: 3,
                    // margin: "0 0 0 0",
                    // padding: "0 0 0 0",
                    width: "60%",
                    // "& .MuiSlider-track": { display: "none" },
                    // "& .MuiSlider-rail": { display: "none" },
                    '& .MuiSlider-thumb': { width: "1rem", height: "1rem" },
                  }}
                  onChange={(_, v) => handleDragChange(_, v as number)}
                  onMouseDown={handleDragStart}
                  onTouchStart={handleDragStart}
            /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
            // @ts-expect-error
                  onChangeCommitted={(_, v) => handleDragEnd(_, v as number)}
            // onTouchEnd={() => handleDragEnd}
          >
          </Slider>

        </Box>

      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2, width: "60%", }}>
        <Typography variant="caption">
          {/*{formatTime(currentTime)}*/}
        </Typography>
        <Typography variant="caption">
          {volumeLevel}
        </Typography>
      </Box>
    </Box>
  );
};