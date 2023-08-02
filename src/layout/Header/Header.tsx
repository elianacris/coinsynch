import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
// import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
// import MenuIcon from "@mui/icons-material/Menu";
// import { Typography } from "@mui/material";

import logo from "../../assets/logo.png";
import CarouselText from "../../components/Slider/CarouselText";

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
        backgroundColor: " #FFFFFF",
      }}
    >
      <Toolbar
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          rowGap: 1,
          // columnGap: 2,
          gridColumn: "span 12",
        }}
      >
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

        <img src={logo} alt="" style={{ gridColumn: "span 2" }} />
        <Button
          variant="text"
          sx={{
            gridColumn: "span 1",
            color: "#5D6670",
            height: "30px",
            textTransform: "none",
            ":hover": {
              backgroundColor: " #Ffffff",
              boxShadow: "none",
              border: "none",
            },
          }}
        >
          About us
        </Button>
        <Button
          variant="text"
          sx={{
            gridColumn: "span 2",
            textTransform: "none",
            color: "#5D6670",
            height: "30px",
            ":hover": {
              backgroundColor: " #Ffffff",
              boxShadow: "none",
            },
          }}
        >
          Top Cryptos
        </Button>

        <CarouselText />

        <Button
          variant="text"
          sx={{
            gridColumn: "span 2",
            textTransform: "none",
            color: "#5D6670",
            height: "30px",
            ":hover": {
              backgroundColor: " #Ffffff",
              boxShadow: "none",
            },
          }}
        >
          Sign in
        </Button>

        <Button
          variant="contained"
          sx={{
            gridColumn: "span 2",
            textTransform: "none",
            color: "#fff",
            padding: "8px 16px",
            backgroundColor: " #FBAB34",
            borderRadius: "32px",
            boxShadow: "none",
            ":hover": {
              backgroundColor: " #FBAB34",
              boxShadow: "none",
            },
          }}
        >
          Sign up
        </Button>
      </Toolbar>
    </AppBar>
  );
}
