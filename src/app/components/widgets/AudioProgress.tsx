import { useState, useCallback } from "react";
import { Box, Slider, Typography, LinearProgress } from "@mui/material";

import { formatTime } from "@/app/utils/utils.ts";

interface AudioProgressProps {
  currentTime: number;
  duration: number;
  onChangeProgress: (value: number) => void;
}

export const AudioProgress = ({ currentTime, duration, onChangeProgress }: AudioProgressProps) => {
  const progress = duration ? (currentTime / duration) * 100 : 0;
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [localProgress, setLocalProgress] = useState<number>(progress);


  const handleDragStart = useCallback(() => {
    setIsDragging(true);
    setLocalProgress(progress);
  }, [progress, setIsDragging, setLocalProgress]);

  const handleDragChange = useCallback((_: Event, value: number) => {
    setIsDragging(true);
    setLocalProgress(value);
  }, [setIsDragging, setLocalProgress]);

  const handleDragEnd = useCallback((_: Event, localProgress: number) => {
    setIsDragging(false);
    onChangeProgress(localProgress);
  }, [onChangeProgress, setIsDragging]);


  return (
    <Box sx={{
      width: "100%",
      padding: "0 5rem",
    }}>
      <Box sx={{
        position: "relative",
      }}>

        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: 8,
            borderRadius: 4,
            "& .MuiLinearProgress-bar": {
              borderRadius: 4,
              transition: "transform 0.05s linear", // Плавное обновление
            },
          }}
        />
        <Slider value={isDragging ? localProgress : progress} min={0} max={100}
                sx={{
                  position: "absolute",
                  top: -12,
                  left: 0,
                  width: "100%",
                  "& .MuiSlider-track": { display: "none" },
                  "& .MuiSlider-rail": { display: "none" },
                  // '& .MuiSlider-thumb': { width: 0, height: 0 },
                }}
                onChange={(_, v) => handleDragChange(_, v as number)}
                onMouseDown={handleDragStart}
                onTouchStart={handleDragStart}
          /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
          // @ts-expect-error
                onChangeCommitted={(_, v) => handleDragEnd(_, v as number)}
        >
        </Slider>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
        <Typography variant="caption">
          {formatTime(currentTime)}
        </Typography>
        <Typography variant="caption">
          {formatTime(duration)}
        </Typography>
      </Box>
    </Box>
  );
};