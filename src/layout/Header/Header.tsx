import React from "react";

import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
// import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
// import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
export default function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: "none",
        backgroundColor: " rgba(61, 61, 61, 1)",
      }}
    >
      <Toolbar sx={{ display: "flex" }}>
        {/* <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ':hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.12);',
              color: ' #fff',
            },
          }}
        >
          <MenuIcon />
        </IconButton> */}
        {/* 
        <Link to={ROUTES.DASHBOARD}>
          <img
            src={PageTitle}
            alt="title"
            style={{ width: '72px', height: '22px' }}
          />
        </Link> */}

        <Button
          variant="text"
          sx={{
            mt: 0.5,
            m: "-20px",
            color: "#fff",
            width: "48px",
            height: "30px",
            ":hover": {
              backgroundColor: " rgba(0, 0, 0, 0.12);",
              color: "#fff",
            },
          }}
          //   onClick={onLogout}
        >
          SAIR
        </Button>
      </Toolbar>
    </AppBar>
  );
}
