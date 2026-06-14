import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";

interface INavigateBarProps {
  pageName?: string;
}

export const NavigateBar = ({pageName}: INavigateBarProps
) => {
  return (
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            sx={{ mr: 2 }}
            color="inherit"
            aria-label="menu"
          >
           L
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {pageName ?? ""}
          </Typography>
        </Toolbar>
      </AppBar>
  );
};