import { Box, styled } from "@mui/material";

import { getColors } from "@/app/theme/colors.ts";

export const SearchPanelStyled = styled(Box)(() => ({
  padding: "1rem",
  borderRadius: 5,
  backgroundColor: getColors().grey.panelsMain
}));