import SearchIcon from '@mui/icons-material/Search';
import { Stack, Button, TextField, InputAdornment } from "@mui/material";

import { getColors } from "@/app/theme/colors.ts";
import { getMusicTracks } from "@/app/quires/getMusicTracks.ts";
import { SearchPanelStyled } from "@/pages/searchMusicPage/SearchPanel.styled.ts";

export const SearchPanel = () => {
  getMusicTracks({
    query: "Цой - Группа Крови",
  })

  const handleSearchClick = () => {
    console.log('go');
  }

  return (
    <SearchPanelStyled>
      <Stack spacing={2} direction="row"  sx={{display: "flex", justifyContent: "space-around"}}>
      <TextField fullWidth={true}
                 sx={{
                   maxWidth: "90%",
                   margin: "0 auto",
                 }}
                 slotProps={{
                   input: {
                     startAdornment: (
                       <InputAdornment position="start">
                         <SearchIcon sx={{color: getColors().grey.textSecondary}}/>
                       </InputAdornment>
                     ),
                   },
                 }} />
        <Button onClick={handleSearchClick}>GO</Button>
      </Stack>
    </SearchPanelStyled>
  );
};