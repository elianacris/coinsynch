import { ReactNode, useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import { IconButton, Link } from "@mui/material";

import logo from "../../assets/logo.png";
import CarouselText from "../../components/Slider/CarouselText";
import { ModalSignUp } from "../../components/Modais/ModalSignUp";
import { ModalSignIn } from "../../components/Modais/ModalSignIn";
import { ComponentAvatar } from "../../layout/Header/ComponentAvatar";
import { useLocation } from "react-router-dom";

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
const settings = ["Logout"];

export default function Header() {
  const [modalSignUp, setModalSignUp] = useState<ReactNode>("");
  const [modalSignIn, setModalSignIn] = useState<ReactNode>("");
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const location = useLocation();

  const handleOpenModalSignUp = () => {
    setModalSignUp(
      <ModalSignUp open={true} handleClose={() => setModalSignUp("")} />
    );
  };
  const handleOpenModalSignIn = () => {
    setModalSignIn(
      <ModalSignIn open={true} handleClose={() => setModalSignIn("")} />
    );
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AppBar
      id="home"
      position="static"
      sx={{
        boxShadow: "none",
        backgroundColor: " #FFFFFF",
      }}
    >
      {modalSignUp && modalSignUp}
      {modalSignIn && modalSignIn}

      <Toolbar
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          rowGap: 1,
          gridColumn: "span 12",
          justifyItems: "center",
          alignContent: "center",
        }}
      >
        <IconButton onClick={() => scrollToSection("home")}>
          <img src={logo} alt="" style={{ gridColumn: "span 2" }} />
        </IconButton>
        {location.pathname === "/" && (
          <>
            <Link
              underline="none"
              onClick={() => scrollToSection("aboutUs")}
              sx={{
                mt: 1,
                fontFamily: "Roboto",
                gridColumn: "span 1",
                color: "#5D6670",
                height: "30px",
                fontWeight: 400,
                fontSize: "14px",
                cursor: "pointer",
                ":hover": {
                  color: "#5D6670",
                },
              }}
            >
              Sobre
            </Link>
            <Link
              underline="none"
              onClick={() => scrollToSection("topCryptos")}
              sx={{
                mt: 1,
                fontFamily: "Roboto",
                gridColumn: "span 1",
                color: "#5D6670",
                height: "30px",
                fontWeight: 400,
                fontSize: "14px",
                cursor: "pointer",
                ":hover": {
                  color: "#5D6670",
                },
              }}
            >
              Top Cryptos
            </Link>

            <CarouselText />
          </>
        )}
        {location.pathname === "/dashboard" && (
          <ComponentAvatar
            anchorElUser={anchorElUser}
            settings={settings}
            handleCloseUserMenu={handleCloseUserMenu}
            handleOpenUserMenu={handleOpenUserMenu}
          />
        )}
        {location.pathname === "/" && (
          <>
            <Button
              onClick={handleOpenModalSignIn}
              variant="text"
              sx={{
                gridColumn: "span 1",
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
              onClick={handleOpenModalSignUp}
              variant="contained"
              sx={{
                gridColumn: "span 1",
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
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
