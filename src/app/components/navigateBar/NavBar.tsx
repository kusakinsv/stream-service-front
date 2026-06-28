import { useLocation, useNavigate } from "react-router";
import {
  Box,
  Paper,
  AppBar,
  Button,
  Toolbar,
  useTheme,
  Container,
  Typography,
  useMediaQuery,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";


export interface NavItem {
  label: string;
  path: string;
  icon: React.ReactNode;
}

interface NavBarProps {
  children?: React.ReactNode;
}


export const navItems: NavItem[] = [
  { label: "Моя музыка", path: "/library", icon: "1" },
  { label: "Поиск музыки", path: "/search", icon: "2" },
];

export const NavBar: React.FC<NavBarProps> = ({ children }: NavBarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const currentPath = location.pathname;
  const activeIndex = navItems.findIndex((item) => item.path === currentPath);

  if (!isMobile) {
    return (
      <>
      <AppBar position="sticky" color="primary" elevation={3}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                cursor: "pointer",
                fontWeight: 700,
                letterSpacing: "0.5px",
              }}
              onClick={() => handleNavigation("/")}
            >
              MyApp
            </Typography>

            <Box sx={{ display: "flex", gap: 2 }}>
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  color="inherit"
                  startIcon={item.icon}
                  onClick={() => handleNavigation(item.path)}
                  sx={{
                    fontWeight: location.pathname === item.path ? 700 : 400,
                    borderBottom:
                      location.pathname === item.path ? "2px solid white" : "none",
                    borderRadius: 0,
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.1)",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    <Box component="main">{children}</Box>
    </>
    );
  }

  return (
    <>
      <AppBar position="sticky" color="primary" elevation={2} sx={{ display: { xs: "flex", md: "none" } }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 700, cursor: "pointer" }}
            onClick={() => handleNavigation("/")}
          >
            MyApp
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="main"
        sx={{
          pb: '65px',
        }}
      >
        {children}
      </Box>

      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: theme.zIndex.appBar,
          display: { xs: "block", md: "none" },
        }}
        elevation={3}
      >
        <BottomNavigation
          value={activeIndex !== -1 ? activeIndex : 0}
          onChange={(_, newValue) => {
            handleNavigation(navItems[newValue].path);
          }}
          showLabels
          sx={{
            height: 65,
            "& .MuiBottomNavigationAction-root": {
              minWidth: "auto",
              padding: "6px 12px",
            },
          }}
        >

          <Box sx={{ height: 65, display: { xs: "block", md: "none"} }} />
          {navItems.map((item) => (
            <BottomNavigationAction
              key={item.path}
              label={item.label}
              icon={item.icon}
              sx={{
                "&.Mui-selected": {
                  color: theme.palette.primary.main,
                },
              }}
            />
          ))}
        </BottomNavigation>
      </Paper>


      {/* Отступ снизу, чтобы контент не перекрывался навигацией */}

    </>
  );

};