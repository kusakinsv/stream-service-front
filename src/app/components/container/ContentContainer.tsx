import { styled, Container } from "@mui/material";

export const Content = styled(Container)(() => ({
  py: 2,
  flexGrow: 1,
  maxWidth: 'md',
  padding: "0.2rem",
"&.MuiContainer-maxWidthLg": {
  paddingLeft: "0.2rem",
  paddingRight: "0.2rem",
}
}));